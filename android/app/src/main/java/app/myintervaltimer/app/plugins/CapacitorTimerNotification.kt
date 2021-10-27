package app.myintervaltimer.app.plugins

import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin

@CapacitorPlugin(name = "CapacitorTimerNotification")
class CapacitorTimerNotification : Plugin() {
    @PluginMethod
    fun showTimerNotification(call: PluginCall) {
        val timeRemaining = call.getString("timeRemaining")
        val workoutType = call.getString("workoutType")
        val remove = call.getBoolean("false")
        val notificationId = 101

        if (remove == true) {
            handleRemoveNotification(context, notificationId)
            call.resolve()
        }

        handleShowNotification(context, notificationId, timeRemaining, workoutType)

        call.resolve()
    }
}