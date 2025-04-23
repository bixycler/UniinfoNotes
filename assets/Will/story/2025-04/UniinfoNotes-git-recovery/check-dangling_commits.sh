#!/bin/bash
MSG_LS='dangling_commits.msg.txt'
MSG_LS_SORT='dangling_commits.msg.sort.txt'
while read -r line; do
    sha=$(echo "$line" | awk '{print $3}')
    echo "Checking commit $sha:"
    commit=$(git show --no-patch --format='%ai|%H|%s' "$sha")
    echo $commit | tee -a $MSG_LS
done < dangling_commits.txt
sort -r $MSG_LS > $MSG_LS_SORT
