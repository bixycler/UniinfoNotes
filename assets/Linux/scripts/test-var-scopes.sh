#!/bin/bash
shcmd=$(ps -p $$ -o comm='')
echo "Shell: $shcmd"
lrvar='global lrvar'
f(){
    local readonly lrvar='local readonly'
    echo "local lrvar=$lrvar"
    lrvar='locally changed'
    echo "local lrvar=$lrvar" 
}
g(){
    declare -r lrvar='local readonly'
    echo "local lrvar=$lrvar"
    lrvar='locally changed'
    echo "local lrvar=$lrvar" 
}

echo "global lrvar=$lrvar"
f
g
