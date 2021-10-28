package app.myintervaltimer.app.plugins.TimerNotification

import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import app.myintervaltimer.app.R

fun handleShowTimerNotification(context: Context, time: String? = "0:00", workoutType: String? = "Workout") {
    val CHANNEL_ID = context.getString(R.string.timer_notification_channel_id)
    val TIMER_NOTIFICATION_ID = R.integer.timer_notification_id
    val smallIcon = R.drawable.logo_android_notification
    val title = "Timer is running"
    val text = "Current mode: ${workoutType}"
    val priority = NotificationCompat.PRIORITY_DEFAULT
    val ongoing = true
    val silent = true

    val pauseIntent = Intent(context, ActionReceiver::class.java).apply {
        putExtra("action", "pause")
    }
    val pausePendingIntent: PendingIntent =
        PendingIntent.getBroadcast(context, 0, pauseIntent, 0)

    val stopIntent = Intent(context, ActionReceiver::class.java).apply {
        putExtra("action", "stop")
    }
    val stopPendingIntent: PendingIntent =
        PendingIntent.getBroadcast(context, 0, stopIntent, 0)


    var builder = NotificationCompat.Builder(context, CHANNEL_ID)
        .setSmallIcon(smallIcon)
        .setContentTitle(title)
        .setContentText(text)
        .setPriority(priority)
        .setOngoing(ongoing)
        .setSilent(silent)
        .addAction(R.drawable.logo_android_notification, "Pause", pausePendingIntent)
        .addAction(R.drawable.logo_android_notification, "Stop", stopPendingIntent)


    with(NotificationManagerCompat.from(context)) {
        notify(TIMER_NOTIFICATION_ID, builder.build())
    }
}