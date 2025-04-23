#!/bin/bash
OUTPUT_FILE="dangling_blobs_contents.txt"
> $OUTPUT_FILE
while read -r line; do
    sha=$(echo "$line" | awk '{print $3}')
    echo "Blob SHA: $sha" | tee -a $OUTPUT_FILE
    echo "Content:" | tee -a $OUTPUT_FILE
    git cat-file -p "$sha" | tee -a $OUTPUT_FILE
    echo -e "----------------\n" | tee -a $OUTPUT_FILE
done < dangling_blobs.txt
