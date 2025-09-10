src=${1:-log}
allHistory=$2
init=36cb3edc

if [ -n "$allHistory" ]; then
	git reset --hard ${init}
fi

msg=$(git show --format="[${src}] %h: %s" -s ${src})
git merge --squash -Xtheirs ${src}
ret=$?
if [ ${ret} -ne 0 ]; then
	echo "Manually resolve conflicts, then: copy config.edn; remove assets; git add & commit"
    echo "Commit message: ${msg}"
    exit 1
fi
cp -v assets/logseq/global/config.edn logseq/config.edn
rm -r assets && echo "All assets removed"
git add --all
git commit -m "${msg}"
