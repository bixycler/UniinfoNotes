#!/bin/bash

host=git1.lan.skygate.co.jp
cname=mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com
logf=${host}.log
echo -e "Monitoring host ${host} for A records\n  from CNAME ${cname}"
minute=0
last='unresolved'
while true; do
    echo -n " ${minute}"
    dt=$(date '+%Y-%m-%d_%H:%M:%S')
    IPs=$(dig +short ${host} | sort)
    IPn=$(wc -l <<< "${IPs}")
    if [[ ${IPn} -gt 1 ]]; then
        st="${dt}"$'\n'"${IPs}"
        if [[ ${last} == 'unresolved' ]]; then echo -en "\n++ ${minute}"; fi
        echo "${st}"$'\n' >> ${logf}
        echo -n "+${IPn}"
        last='resolved'
    else
        if [[ ${last} == 'resolved' ]]; then echo -en "-- ${minute}"; fi
        last='unresolved'
    fi
    ((minute++))
    sleep 60
done

