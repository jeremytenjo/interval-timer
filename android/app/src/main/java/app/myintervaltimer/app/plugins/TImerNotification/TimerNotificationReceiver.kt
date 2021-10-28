package app.myintervaltimer.app.plugins.TimerNotification

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin

class TimerNotificationReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        val action: String? = intent.action

        if (action == "pause") {
//            notifyListeners("onPauseTimer", JSObject())
        } else if (action == "resume") {
//            notifyListeners("onResumeTimer", JSObject())
        } else if (action == "stop") {
//            notifyListeners("onCloseTimer", JSObject())
            handleRemoveTimerNotification(context)
        }
    }
}