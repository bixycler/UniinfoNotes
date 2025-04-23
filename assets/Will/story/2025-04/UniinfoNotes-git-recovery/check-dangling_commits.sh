#!/bin/bash
rm dangling_commits.show.txt
while read -r line; do
    sha=$(echo "$line" | awk '{print $3}')
    echo "Checking commit $sha:"
    commit=$(git show --no-patch --format='%ai|%H|%s' "$sha")
    echo $commit | tee -a dangling_commits.show.txt
done < dangling_commits.txt
sort -r dangling_commits.show.txt > dangling_commits.sort.txt
