package app.myintervaltimer.app.plugins

import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import app.myintervaltimer.app.R
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin

@CapacitorPlugin(name = "CapacitorTimerNotification")
class CapacitorTimerNotification : Plugin() {
    @PluginMethod
    fun showTimerNotification(call: PluginCall) {
        println("hello from android!")
        sendNotification()

        val value = call.getString("value")
        val result = JSObject()

        result.put("value", value)
        result.put("source", "hello from android!")

        call.resolve(result)
    }


    fun sendNotification() {
        val CHANNEL_ID = context.getString(R.string.timer_notification_channel_id)
        val notificationId = 101
        var builder = NotificationCompat.Builder(context, CHANNEL_ID)
            .setSmallIcon(R.drawable.logo_192x192)
            .setContentTitle("My notification")
            .setContentText("Much longer text that cannot fit one line...")
            .setPriority(NotificationCompat.PRIORITY_DEFAULT)

            with(NotificationManagerCompat.from(context)) {
            notify(notificationId, builder.build())
        }

        println("Timer Notification Sent!!")
    }
}