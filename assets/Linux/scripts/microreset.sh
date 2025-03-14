#!/bin/bash
#
# This is a cron job for microresetting while in work.
export DISPLAY=':0'
export DBUS_SESSION_BUS_ADDRESS='unix:path=/run/user/1001/bus' # 1001 = $(id -u dinhlx)

LOGF=${1:-$HOME/Documents/microreset.log}
today=$(date '+%Y-%m-%d')
now=$(date '+%H:%M:%S')
dt="${today}_${now}"

tension=0; problem=''
if ! zenity --question --icon-name=emblem-generic --title "${now}" --text "Stop! Breath, Relax..."
then
    if ! tension=$(zenity --list --title "${now}" --text "How much tension's remaining?\n(Escape for ♾️, \nenter blank to skip comments)"\
        --height 400 --column "" --column "" -- \
        0 '%' 10 '%' 20 '%' 30 '%' 40 '%' 50 '%' \
        60 '%' 70 '%' 80 '%' 90 '%' 100 '%' ' -1' '♾️' )
        # the space before -1 in ' -1' is to avoid "option" collision, even after `--`!
    then tension='-1'; fi
    tension=$(echo $tension | xargs) # trim white spaces
    if [[ -n ${tension} ]]; then
        tensionStr="${tension}%"
        [[ ${tension} == '-1' ]] && tensionStr='♾️' 
        problem=$(zenity --entry --width 500 --title "${now}" --text "What's the problem with tension = ${tensionStr}?")
    else
        tension='0'
    fi
fi
echo -e "${dt}\t${tension}\t${problem}" >> $LOGF

