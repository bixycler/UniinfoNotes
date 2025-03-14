#!/bin/bash
#
# This is a cron job for microresetting while in work.
export DISPLAY=':0'
export DBUS_SESSION_BUS_ADDRESS='unix:path=/run/user/1001/bus' # 1001 = $(id -u dinhlx)

LOGF=${1:-$HOME/Documents/microreset.log}
today=$(date '+Y-m-d')
now=$(date '+H:M:S')
dt="${today}_${now}"

gsettings set org.gnome.desktop.peripherals.keyboard send-events disabled

tension=0; problem=''
if ! {
    zenity --question --icon-name=emblem-generic --title "${now}" --text "Stop! Breath, Relax..."\
    || tension=$(zenity --list --checklist --title "${now}" --text "How much tension's remaining?"\
        --column "" --column "Level of tension" true '0' false '10'  false '20' false '30' false '40' false '50' false '60' false '70' false '80' false '90' false '100' false '♾<fe0f>' false '+ Comments'); }
then
    tension=-1
    problem=$(zenity --entry --width 500 --title "${now}" --text "What's the problem?")
fi
xinput --reattach "$keyboard_id" 3
echo -e "${dt}\t${tension}\t${problem}" >> $LOGF

gsettings set org.gnome.desktop.peripherals.keyboard send-events enabled
