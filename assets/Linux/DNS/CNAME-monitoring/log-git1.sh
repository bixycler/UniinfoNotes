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
    IPs=$(dig +nocmd +noall +answer +ttlid ${host} | \
        sort | tail -n +2 | cut -d ' ' -f 2,4 | sed 's/\tIN//')
        # the CNAME is `sort`ed to last line then removed with `tail`
        # TTL and IP fields are extracted with `cut` & `sed`
    IPn=$(wc -l <<< "${IPs}"); ((--IPn))
    IPs=$(printf "${IPs}" | head -n -1) # remove CNAME line
    oIPs=$(cat ${ipf})
    if [[ "${IPs}" != "${oIPs}" ]]; then
        printf "${IPs}" > ${ipf}
        echo "${dt}:" ${IPs} >> ${logf}
        echo -e "\n${dt}"; [[ -n ${IPs} ]] && printf '  %s\n' ${IPs}
        ( [[ ${IPn} -lt 1 ]] && hmark='--' ) || \
        ( [[ ${IPn} -lt 2 ]] && hmark=' +' ) || hmark='++'
        echo -en "${hmark} ${minute}" 
    fi
    ( [[ ${IPn} -lt 1 ]] && mark='' ) || mark="+${IPn}"
    echo -n "${mark}"
    ((minute++))
    sleep 60
done

