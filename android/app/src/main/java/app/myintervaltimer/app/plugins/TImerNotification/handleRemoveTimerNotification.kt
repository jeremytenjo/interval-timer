package app.myintervaltimer.app.plugins

import android.content.Context
import androidx.core.app.NotificationManagerCompat
import app.myintervaltimer.app.R

fun handleRemoveTimerNotification(context: Context) {
    val TIMER_NOTIFICATION_ID = R.integer.timer_notification_id

    with(NotificationManagerCompat.from(context)) {
        cancel(TIMER_NOTIFICATION_ID)
    }
}