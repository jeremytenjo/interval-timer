package app.capacitorstarter.app.plugins

import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin

@CapacitorPlugin(name = "TimerNotification")
class CapacitorPluginTimerNotification : Plugin() {
    @PluginMethod
    fun echo(call: PluginCall) {
        val value = call.getString("value")
        val ret = JSObject()
        ret.put("value", value)
        ret.put("source", "hello from android!")
        println("hello from android!")
        call.resolve(ret)
    }
}