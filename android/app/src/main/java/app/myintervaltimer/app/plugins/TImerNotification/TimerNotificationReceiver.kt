package app.myintervaltimer.app.plugins.TimerNotification

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import app.myintervaltimer.app.utils.TriggerListener

class TimerNotificationReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        val action: String? = intent.action

        if (action == "pause") {
            TriggerListener("onPauseTimer")
        } else if (action == "resume") {
            TriggerListener("onResumeTimer")
        } else if (action == "stop") {
            TriggerListener("onStopTimer")
            handleRemoveTimerNotification(context)
        }
    }
}