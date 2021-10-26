package app.myintervaltimer.app.plugins

import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import androidx.core.graphics.drawable.toBitmap
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
//        TODO fix small icon not showing
        val smallIcon = R.drawable.logo_24x24
        val title = "Title"
        val text = "text"
        val priority = NotificationCompat.PRIORITY_DEFAULT
        val ongoing = true
        val silent = true

        var builder = NotificationCompat.Builder(context, CHANNEL_ID)
            .setSmallIcon(smallIcon)
            .setContentTitle(title)
            .setContentText(text)
            .setPriority(priority)
            .setOngoing(ongoing)
            .setSilent(silent)

            with(NotificationManagerCompat.from(context)) {
            notify(notificationId, builder.build())
        }
    }
}