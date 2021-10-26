package app.myintervaltimer.app.plugins

import android.content.Context
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import app.myintervaltimer.app.R

fun handleShowNotification(context: Context) {
    val CHANNEL_ID = context.getString(R.string.timer_notification_channel_id)
    val notificationId = 101
    val smallIcon = R.drawable.logo_android_notification
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