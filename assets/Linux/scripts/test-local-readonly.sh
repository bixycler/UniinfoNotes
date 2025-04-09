#!/bin/bash
lrvar='global lrvar'
declare_r(){
    echo 'declare_r()-----------'
    declare -r lrvar='local declare -r'
    echo "local lrvar=$lrvar"
    lrvar='locally changed'
    echo "local lrvar=$lrvar" 
}
local_then_readonly(){
    echo 'local_then_readonly()-----------'
    local lrvar='local'
    readonly lrvar='local then readonly'
    echo "local lrvar=$lrvar"
    lrvar='locally changed'
    echo "local lrvar=$lrvar" 
}
readonly_then_local(){
    echo 'readonly_then_local()-----------'
    readonly lrvar='readonly in readonly_then_local()'
    local lrvar
    echo "local lrvar=$lrvar"
    lrvar='locally changed'
    echo "local lrvar=$lrvar" 
}
local_readonly(){
    echo 'local_readonly()-----------'
    local readonly lrvar='local readonly'
    echo "local lrvar=$lrvar"
    lrvar='locally changed'
    echo "local lrvar=$lrvar" 
}
readonly_local(){
    echo 'readonly_local()-----------'
    readonly local lrvar='readonly local'
    echo "local lrvar=$lrvar"
    lrvar='locally changed'
    echo "local lrvar=$lrvar" 
}

echo "global lrvar=$lrvar"
declare_r
local_then_readonly
#readonly_then_local
local_readonly
readonly_local
echo "global lrvar=$lrvar"
