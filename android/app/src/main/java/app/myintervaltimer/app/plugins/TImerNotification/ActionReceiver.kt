package app.myintervaltimer.app.plugins

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin

class ActionReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        val action: String? = intent.getStringExtra("action");
        println("ACTION!!!!!!!")
        println(action)

        if (action == "pause") {
            notifyListeners("onPauseTimer", JSObject())
        } else if (action == "resume") {
            notifyListeners("onResumeTimer", JSObject())
        } else if (action == "stop") {
            notifyListeners("onCloseTimer", JSObject())
            handleRemoveNotification(context)
        }
    }
}