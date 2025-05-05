#!/bin/bash
i=0
increment(){
	((++i))
    printf $i
}
printf "With function call: "
increment; printf ' '
increment; printf ' '
increment; printf ' '
echo
printf "With command substitution: " # ineffective
printf "%d " $(increment)
printf "%d " $(increment)
printf "%d " $(increment)
echo
printf "With pipeline: " # ineffective
increment |xargs printf "%d "
increment |xargs printf "%d "
increment |xargs printf "%d "
echo
out="test-cmd-sub.txt"
printf "With output redirection: "
rm $out
increment >> $out; printf ' ' >> $out
increment >> $out; printf ' ' >> $out
increment >> $out; printf ' ' >> $out
cat $out
echo
printf "With process substitution: "
rm $out
increment > >(cat >> $out; printf ' ' >> $out)
increment > >(cat >> $out; printf ' ' >> $out)
increment > >(cat >> $out; printf ' ' >> $out)
cat $out
echo
echo "Final i = $i"
