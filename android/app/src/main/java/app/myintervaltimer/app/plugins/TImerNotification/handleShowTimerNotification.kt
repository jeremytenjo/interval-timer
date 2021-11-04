package app.myintervaltimer.app.plugins.TimerNotification

import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import app.myintervaltimer.app.R

fun handleShowTimerNotification(context: Context, timeRemaining: String? = "0:00", workoutType: String? = "Workout", isPaused: Boolean? = true) {
    val CHANNEL_ID = context.getString(R.string.timer_notification_channel_id)
    val TIMER_NOTIFICATION_ID = R.integer.timer_notification_id
    val smallIcon = R.drawable.logo_android_notification
    val title = "Timer is running"
    val text = "Current mode: ${workoutType} time remaining: ${timeRemaining}"
    val priority = NotificationCompat.PRIORITY_DEFAULT
    val ongoing = true
    val silent = true

    fun createPendingIntent(action: String): PendingIntent? {
        val intent = Intent(
            context,
            TimerNotificationReceiver::class.java
        )
        intent.action = action
        return PendingIntent.getBroadcast(context, 0, intent, 0)
    }

    val pausePendingIntent = createPendingIntent( "pause")
    val stopPendingIntent = createPendingIntent( "stop")

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