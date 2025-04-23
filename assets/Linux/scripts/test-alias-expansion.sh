#!/bin/bash
shopt -s expand_aliases
alias ll='ls -l'
alias
echo '-- Execute ll:'; ll
echo '-- Execute \ll:'; \ll
echo '-- Execute l\l:'; l\l
echo '-- Execute l\s:'; l\s
