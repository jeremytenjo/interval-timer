package app.myintervaltimer.app.plugins

import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.os.Build
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import androidx.core.content.ContextCompat.getSystemService
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin

@CapacitorPlugin(name = "CapacitorTimerNotification")
class CapacitorTimerNotification : Plugin() {
    private val Channel_id = "channel_id_example_01"
    private val notificationId = 101

    @PluginMethod
    fun echo(call: PluginCall) {
        println("hello from android!")

//        createNotificationChannel()
        sendNotification()
        
        val value = call.getString("value")
        val result = JSObject()

        result.put("value", value)
        result.put("source", "hello from android!")

        call.resolve(result)
    }

//    fun createNotificationChannel(){
//        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
//            val name = "Notification Title"
//            val descriptionText = "Notification Description"
//            val importance = NotificationManager.IMPORTANCE_DEFAULT
//            val channel = NotificationChannel(Channel_id, name, importance).apply{
//                description= descriptionText
//            }
//            val notificationManager: NotificationManager = getSystemService(Context) as NotificationManager
//            notificationManager.createNotificationChannel(channel)
//        }
//    }

    fun sendNotification() {
        var builder = NotificationCompat.Builder(context, Channel_id)
            .setContentTitle("My notification")
            .setContentText("Much longer text that cannot fit one line...")
            .setStyle(NotificationCompat.BigTextStyle()
                .bigText("Much longer text that cannot fit one line..."))
            .setPriority(NotificationCompat.PRIORITY_DEFAULT)
        with(NotificationManagerCompat.from(context)) {
            notify(notificationId, builder.build())
        }
    }
}