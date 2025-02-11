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
        tail -n +2 | sort | awk -F '[[:blank:]]+' '{print $2" "$5}')
        # CNAME line is removed with `tail`, IP lines are `sort`ed 
        # TTL and IP fields are extracted with `awk`
    IPn=0; TTL=''; mark=''
    if [[ -n "${IPs}" ]]; then  
        IPn=$(wc -l <<< "${IPs}"); 
        TTL="${IPs%% *}"
        mark="+${IPn}_${TTL}"
        IPs=$(printf "${IPs}" | cut -d ' ' -f 2) # keep only IP field
    fi
    oIPs=$(cat ${ipf})
    if [[ "${IPs}" != "${oIPs}" ]]; then
        printf "${IPs}" > ${ipf}
        echo "${dt}:" ${IPs} >> ${logf}
        echo -e "\n${dt}"; [[ -n ${IPs} ]] && printf '  %s\n' ${IPs}
        hmark='..' # DEBUG
        if      [[ ${IPn} -lt 1 ]]; then hmark='--' 
        else if [[ ${IPn} -lt 2 ]]; then hmark=' +'
        else                             hmark='++'; fi; fi
        echo -en "${hmark} ${minute}" 
    fi
    echo -n "${mark}"
    ((minute++))
    sleep 1 #60
done

