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
if ! {
    zenity --question --icon-name=emblem-generic --title "${now}" --text "Stop! Breath, Relax..."\
    || tension=$(zenity --scale --title "${now}" --text "How much tension's remaining?"); }
then
        tension=-1
        problem=$(zenity --entry --width 500 --title "${now}" --text "What's the problem?")
fi
echo -e "${dt}\t${tension}\t${problem}" >> $LOGF
