package app.myintervaltimer.app.plugins.TimerNotification

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent

class TimerNotificationReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        val action: String? = intent.action
// TODO enable notifyListeners
        if (action == "pause") {
            CapacitorTimerNotification().triggerListener("onPauseTimer")
        } else if (action == "resume") {
//            triggerListener("onResumeTimer", JSObject())
        } else if (action == "stop") {
//            triggerListener("onCloseTimer", JSObject())
            handleRemoveTimerNotification(context)
        }
    }
}