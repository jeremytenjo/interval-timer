package app.myintervaltimer.app.plugins.TimerNotification

import app.myintervaltimer.app.Globals
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin


@CapacitorPlugin(name = "CapacitorTimerNotification")
class CapacitorTimerNotification : Plugin() {
    override fun load() {
        super.load()
        val sharedData = Globals.instance
        class Lister: Globals(), Globals.Listeners {
            override fun onPause() {
                notifyListeners("onPauseTimer", JSObject())
            }
        }
        sharedData.value = Lister()
    }

    @PluginMethod
    fun showTimerNotification(call: PluginCall) {
        val timeRemaining = call.getString("timeRemaining")
        val workoutType = call.getString("workoutType")

        handleShowTimerNotification(context,timeRemaining, workoutType)
        call.resolve()
    }

    fun triggerListener(listenerName: String) {
        val sharedData = Globals.instance
        val listener = sharedData.value
        listener.onPause()
    }

    @PluginMethod
    fun removeNotification(call: PluginCall) {
        handleRemoveTimerNotification(context)
        call.resolve()
    }
}