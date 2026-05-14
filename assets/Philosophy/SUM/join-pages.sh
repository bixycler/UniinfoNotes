#!/bin/bash

for dir in the-table-mensa ego-sum psx-archive; do 
    echo "Joining $dir ..."
    for f in $(ls "$dir"); do 
        cat "$dir"/"$f"; printf '\n\n-----\n\n\n'; 
    done > "$dir".md
    echo "              done."
done
