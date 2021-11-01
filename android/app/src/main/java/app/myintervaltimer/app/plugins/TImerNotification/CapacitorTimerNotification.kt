package app.myintervaltimer.app.plugins.TimerNotification

import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin
import com.getcapacitor.PluginHandle
import com.getcapacitor.Bridge


@CapacitorPlugin(name = "CapacitorTimerNotification")
class CapacitorTimerNotification : Plugin() {
    private var staticBridge: Bridge? = null

    override fun load() {
        super.load()
        println("----")
        staticBridge = bridge
        println("staticBridge $staticBridge")
    }

    @PluginMethod
    fun showTimerNotification(call: PluginCall) {
        val timeRemaining = call.getString("timeRemaining")
        val workoutType = call.getString("workoutType")

        handleShowTimerNotification(context, timeRemaining, workoutType)
        call.resolve()
    }

    fun getLocalNotificationsInstance(): CapacitorTimerNotification? {
//        TODO fix staticBridge
        println("getLocalNotificationsInstance")
        println("staticBridge $staticBridge")

        if (staticBridge != null && staticBridge!!.getWebView() != null) {
            println("1111")

            val handle: PluginHandle = staticBridge!!.getPlugin("CapacitorTimerNotification") ?: return null
            return handle.instance as CapacitorTimerNotification
        }
        return null
    }

    fun triggerListener(listenerName: String) {
        println("triggerListener")

        val capacitorTimerNotification: CapacitorTimerNotification? =
            CapacitorTimerNotification().getLocalNotificationsInstance()

        println(capacitorTimerNotification)

        if (capacitorTimerNotification != null) {
            capacitorTimerNotification.notifyListeners(
                listenerName,
                JSObject()
            )
        }
    }



    @PluginMethod
    fun removeNotification(call: PluginCall) {
        handleRemoveTimerNotification(context)
        call.resolve()
    }
}