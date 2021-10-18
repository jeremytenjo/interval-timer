package app.intervaltimer.app

import android.os.Bundle
import app.intervaltimer.app.plugins.CapacitorPluginExample
import com.getcapacitor.BridgeActivity

class MainActivity : BridgeActivity() {
    public override fun onCreate(savedInstanceState: Bundle?) {
        println("hello from android!!!!!!!!!!!!!!!")
        super.onCreate(savedInstanceState)
        registerPlugin(CapacitorPluginExample::class.java)
    }
}