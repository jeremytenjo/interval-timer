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

        // add notifyListeners globally in order to use it in broadcast receivers
        val sharedData = Globals.instance
        class Lister: Globals(), Globals.Listeners {
            override fun triggerListener(listenerName: String) {
                notifyListeners(listenerName, JSObject())
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

    @PluginMethod
    fun removeNotification(call: PluginCall) {
        handleRemoveTimerNotification(context)
        call.resolve()
    }
}