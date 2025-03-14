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
    if ! tension=($(zenity --list --checklist --title "${now}" --text "How much tension's remaining?"\
        --separator=' ' --column "" --column "" --column "" -- \
        true 0 '%' false 10 '%'  false 20 '%' false 30 '%' false 40 '%' false 50 '%' \
        false 60 '%' false 70 '%' false 80 '%' false 90 '%' false 100 '%' false ' -1' '♾️' \
        false '+' 'Comments')) # the space before -1 in ' -1' is to avoid "option" collision, even after `--`!
    then tension=(-1 '+'); fi
    if [[ ${tension[-1]} == '+' ]]; then
        [[ ${#tension[@]} -lt 2 ]] && tension=(-1 ${tension[-1]})
        tension=${tension[-2]}
        problem=$(zenity --entry --width 500 --title "${now}" --text "What's the problem?")
    else
        tension=${tension[-1]}
    fi
fi
echo -e "${dt}\t${tension}\t${problem}" >> $LOGF

