#!/bin/bash

hosts=(mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com
    mgmt-repo1-clb-243604401.ap-northeast-1.elb.amazonaws.com
    mgmt-tools-alb-1633637944.ap-northeast-1.elb.amazonaws.com)
logf=log-cname-ips.log
echo "Monitoring hosts:"
printf '  %s\n' ${hosts[@]}
minute=0
while true; do
    echo -n " ${minute}"
    dt=$(date '+%Y-%m-%d_%H:%M:%S')
    for host in ${hosts[@]}; do
        IPs=$(dig +short ${host} | sort)
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
    sleep 60
done

