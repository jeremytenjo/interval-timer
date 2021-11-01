package app.myintervaltimer.app.utils

import app.myintervaltimer.app.Globals

fun TriggerListener(listenerName: String) {
    val sharedData = Globals.instance
    val listener = sharedData.value
    listener.triggerListener(listenerName)
}
