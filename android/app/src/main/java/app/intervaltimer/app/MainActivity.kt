package app.capacitorstarter.app

import android.os.Bundle
import app.capacitorstarter.app.plugins.CapacitorPluginTimerNotification
import com.getcapacitor.BridgeActivity

class MainActivity : BridgeActivity() {
    public override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        registerPlugin(CapacitorPluginTimerNotification::class.java)
    }
}