#!/bin/bash

githost=mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com
hosts=(${githost}
    mgmt-repo1-clb-243604401.ap-northeast-1.elb.amazonaws.com
    mgmt-tools-alb-1633637944.ap-northeast-1.elb.amazonaws.com
    pre1-mastest.c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
    pre1-sgmvtest-20240315.c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
    pre1-myskyg.c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
    pre1-mysgca.c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
    pre1-sigdb-20230614.c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
    pre1-somali.c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
    pre1-domtourdb.c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
    pre1-sessiondb-cluster.cluster-c1wbmxxj2vu5.ap-northeast-1.rds.amazonaws.com
)
logf=log-cname-ips.log
cd ${HOME}/tmp/
echo "Monitoring hosts:"
printf '  %s\n' ${hosts[@]}
minute=0
ttl=0
while true; do
    dt=$(date '+%Y-%m-%d_%H:%M:%S')
    for host in ${hosts[@]}; do
        IPs=$(dig +short ${host} | sort)
        IPn=$(printf "${IPs}\n" | wc -l)
        while [[ ${IPn} -lt 1 ]]; do # retry
            sleep 0.1 # try to avoid the expiration threshold (TTL = 0) 
            IPs=$(dig +short ${host} | sort)
            IPn=$(printf "${IPs}" | wc -l)
        done
        oIPs=$(cat ${host}.ip.log)
        if [[ "${IPs}" != "${oIPs}" ]]; then
            printf "${IPs}" > ${host}.ip.log
            st="${host}:${dt}"
            echo "${st}:" ${IPs} >> ${logf}
            echo -e "\n${st}"; printf '  %s\n' ${IPs}
        else :
            #echo -e "\n= ${host}:${dt}:" ${IPs} # DEBUG
        fi
    done
    ((minute++))
    ttl=$(dig +noall +answer +ttlid ${githost} | tail -1 | awk '{print $2}')
    echo -n " ${minute}m+${ttl}s"
    sleep ${ttl}
done

