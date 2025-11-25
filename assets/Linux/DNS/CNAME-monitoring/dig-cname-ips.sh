#!/bin/bash

# Dig CNAME records for IP to update cname.hosts

githost=git1.lan.skygate.co.jp
gitcname=mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com
declare -A cnames=([$githost]=${gitcname}
    [repo1.lan.skygate.co.jp]=mgmt-repo1-clb-243604401.ap-northeast-1.elb.amazonaws.com
    [docker-registry-web.dena-travel.internal]=mgmt-tools-alb-1633637944.ap-northeast-1.elb.amazonaws.com
    [dbm.lan.skygate.co.jp]=pre1-mastest.c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
    [view.lan.skygate.co.jp]=pre1-sgmvtest-20240315.c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
    [mymaster.lan.skygate.co.jp]=pre1-myskyg.c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
    [myslave.lan.skygate.co.jp]=pre1-myskyg.c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
    [mycache.lan.skygate.co.jp]=pre1-mysgca.c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
    [mysig-master.lan.skygate.co.jp]=pre1-sigdb-20230614.c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
    [mysig-slave.lan.skygate.co.jp]=pre1-sigdb-20230614.c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
    [somali-master.lan.skygate.co.jp]=pre1-somali.c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
    [somali-slave.lan.skygate.co.jp]=pre1-somali.c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
    [domtourdb.lan.skygate.co.jp]=pre1-domtourdb.c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
    [sessiondb.lan.skygate.co.jp]=pre1-sessiondb-cluster.cluster-c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
)
# Management hosts have TTL = 1 minute
mgmthosts=($githost
    repo1.lan.skygate.co.jp
    docker-registry-web.dena-travel.internal
)
# DB hosts have very short TTL: 5 seconds!
dbhosts=( 
    dbm.lan.skygate.co.jp
    view.lan.skygate.co.jp
    mymaster.lan.skygate.co.jp
    myslave.lan.skygate.co.jp
    mycache.lan.skygate.co.jp
    mysig-master.lan.skygate.co.jp
    mysig-slave.lan.skygate.co.jp
    somali-master.lan.skygate.co.jp
    somali-slave.lan.skygate.co.jp
    domtourdb.lan.skygate.co.jp
    sessiondb.lan.skygate.co.jp
)
# All hosts
hosts=(${mgmthosts[@]} ${dbhosts[@]}) 

logdir=${HOME}/tmp
iplogdir=${logdir}/dig-cname-ips
logf=${logdir}/dig-cname-ips.log
cnamehostsf=${HOME}/hosts/active/cname.hosts
mkdir -pv ${iplogdir} 2>/dev/null

echo "Monitoring hosts:"
printf '  %s\n' ${cnames[*]@K}
declare -A cnameIP
seconds=0
while true; do
    IPupdates=(); cnameIP=(); ttls=()
    dt=$(date '+%Y-%m-%d_%H:%M:%S')
    for host in ${hosts[@]}; do
        IPs=(); ttl=0; st="${host}:${dt}"
        iplogf=${iplogdir}/${host}.ip.log
        # Dig CNAME of $host for IP & TTL
        while [[ ${#IPs[@]} -lt 1 ]]; do 
            sleep 0.01 # try to avoid the expiration threshold (TTL = 0) 
            IPs=($(dig +short ${cnames[$host]} 2>/dev/null | sort))
            ttl=$(dig +noall +answer +ttlid ${cnames[$host]} 2>/dev/null | tail -1 | awk '{print $2}')
        done
        ip=${IPs[0]}; cnameIP[$host]=${ip}
        ttls+=($ttl)
        # Check the dug IP against the stored IP
        oip=$(cat ${iplogf})
        if [[ "${ip}" != "${oip}" ]]; then # IP update
            IPupdates+=($host)
            printf "%s\n" "${ip}" > ${iplogf}
            echo "${st}:" ${ip} "< ${IPs[@]}" >> ${logf}
            echo -e "\n${st}: ${ip}"; printf "  %s\n" "${IPs[@]}"
        else :
            #echo -e "\n= ${st}:" ${IPs[*]} # DEBUG
        fi
    done

    # Update cname.hosts
    if [[ ${#IPupdates[@]} -gt 0 ]]; then 
        echo '### IPs from CNAME records ###' > $cnamehostsf
        for host in ${hosts[@]}; do
            echo >> $cnamehostsf
            echo ${cnameIP[$host]} ${host} >> $cnamehostsf
            echo '#CNAME' ${cnames[$host]} >> $cnamehostsf
        done
    fi
    # Update IP Table NAT/OUTPUT to redirect DB hosts to localhost ports, which are forwarded to *.amazonaws.com by SSH tunnel-aws
    #sudo iptables --table nat --append OUTPUT --protocol tcp \
    #--destination dbm.lan.skygate.co.jp --dport 1521 \
    #--jump DNAT --to-destination 127.0.0.1:1524

    # Sleep in TTL
    ttls=($(printf "%s\n" "${ttls[@]}" | sort -n))
    #echo -e "\n+ TTLs:" ${ttls[*]} # DEBUG
    #ttl=${ttls[0]} # the least TTL
    ttl=$(dig +noall +answer +ttlid ${gitcname} | tail -1 | awk '{print $2}')
    ((seconds+=ttl))
    echo -n " ${seconds}+${ttl}s"
    sleep ${ttl}
done

