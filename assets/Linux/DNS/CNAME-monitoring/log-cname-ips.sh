#!/bin/bash

githost=mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com
mgmthosts=(${githost}
    mgmt-repo1-clb-243604401.ap-northeast-1.elb.amazonaws.com
    mgmt-tools-alb-1633637944.ap-northeast-1.elb.amazonaws.com
)
dbhosts=( 
    pre1-mastest.c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
    pre1-sgmvtest-20240315.c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
    pre1-myskyg.c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
    pre1-mysgca.c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
    pre1-sigdb-20230614.c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
    pre1-somali.c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
    pre1-domtourdb.c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
    pre1-sessiondb-cluster.cluster-c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
)
hosts=(${mgmthosts[@]} ${dbhosts[@]})

logf=log-cname-ips.log
cd ${HOME}/tmp/
echo "Monitoring hosts:"
printf '  %s\n' ${hosts[@]}
seconds=0
while true; do
    ttls=()
    dt=$(date '+%Y-%m-%d_%H:%M:%S')
    for host in ${hosts[@]}; do
        IPs=(); ttl=0; st="${host}:${dt}"
        while [[ ${#IPs[@]} -lt 1 ]]; do # retry
            sleep 0.1 # try to avoid the expiration threshold (TTL = 0) 
            IPs=($(dig +short ${host} | sort))
            ttl=$(dig +noall +answer +ttlid ${host} | tail -1 | awk '{print $2}')
        done
        ttls+=($ttl)
        oIPs=($(cat ${host}.ip.log))
        if [[ "${IPs}" != "${oIPs}" ]]; then
            printf "%s\n" "${IPs[@]}" > ${host}.ip.log
            echo "${st}:" ${IPs} >> ${logf}
            echo -e "\n${st}"; printf "  %s\n" ${IPs[@]}
        else :
            echo -e "\n= ${st}:" ${IPs} # DEBUG
        fi
    done
    ttls=($(printf "%s\n" "${ttls[@]}" | sort -n))
    echo -e "\n+ TTLs:" ${ttls} # DEBUG
    ttl=${ttls[0]}
    ((seconds+=ttl))
    echo -n " ${seconds}s"
    sleep ${ttl}
done

