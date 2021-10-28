package app.myintervaltimer.app.plugins.TimerNotification

import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin

@CapacitorPlugin(name = "CapacitorTimerNotification")
class CapacitorTimerNotification : Plugin() {
    val notificationId = 101

    @PluginMethod
    fun showTimerNotification(call: PluginCall) {
        val timeRemaining = call.getString("timeRemaining")
        val workoutType = call.getString("workoutType")

        handleShowTimerNotification(context, timeRemaining, workoutType)
        call.resolve()
    }

    @PluginMethod
    fun removeNotification(call: PluginCall) {
        handleRemoveTimerNotification(context)
        call.resolve()
    }
}