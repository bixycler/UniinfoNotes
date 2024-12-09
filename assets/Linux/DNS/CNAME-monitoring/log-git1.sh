#!/bin/bash

host=git1.lan.skygate.co.jp
cname=mgmt-gitlab-clb-1008603512.ap-northeast-1.elb.amazonaws.com
logf=${host}.log
ipf=${host}.ip.log
echo -e "Monitoring host ${host} for A records\n  from CNAME ${cname}"
minute=0
while true; do
    echo -n " ${minute}"
    dt=$(date '+%Y-%m-%d_%H:%M:%S')
    IPs=$(dig +short ${host} | sort | head -n -1) # remove CNAME line (sorted to last line)
    IPn=$(wc -l <<< "${IPs}"); 
    oIPs=$(cat ${ipf})
    if [[ "${IPs}" != "${oIPs}" ]]; then
        printf "${IPs}" > ${ipf}
        echo "${dt}:" ${IPs} >> ${logf}
        echo -e "\n${dt}"; printf '  %s\n' ${IPs}
        [[ ${IPn} -lt 1 ]] && hmark='--' || \ 
        [[ ${IPn} -lt 2 ]] && hmark=' +' || hmark='++'
        echo -en "\n${hmark} ${minute}" 
    fi
    [[ ${IPn} -lt 1 ]] && mark='' || mark="+${IPn}"
    echo -n "${mark}"
    ((minute++))
    sleep 60
done

