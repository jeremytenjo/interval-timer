package app.myintervaltimer.app.plugins

import android.content.Context
import androidx.core.app.NotificationManagerCompat

fun handleRemoveNotification(context: Context, notificationId: Int) {
    with(NotificationManagerCompat.from(context)) {
        cancel(notificationId)
    }
}