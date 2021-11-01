package app.myintervaltimer.app.plugins.TimerNotification

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent

class TimerNotificationReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        val action: String? = intent.action
// TODO enable notifyListeners
        if (action == "pause") {
//            notifyListeners("onPauseTimer", JSObject())
            val plugin = CapacitorTimerNotification()
            plugin.triggerListener("onPauseTimer")
            
        } else if (action == "resume") {
//            notifyListeners("onResumeTimer", JSObject())
        } else if (action == "stop") {
//            notifyListeners("onCloseTimer", JSObject())
            handleRemoveTimerNotification(context)
        }
    }
}