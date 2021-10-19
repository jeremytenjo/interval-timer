package app.myintervaltimer.app.plugins

import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin

@CapacitorPlugin(name = "CapacitorTimerNotification")
class CapacitorTimerNotification : Plugin() {
    @PluginMethod
    fun echo(call: PluginCall) {
        println("hello from android!")
        
        val value = call.getString("value")
        val result = JSObject()

        result.put("value", value)
        result.put("source", "hello from android!")

        call.resolve(result)
    }
}