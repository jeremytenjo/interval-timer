package app.myintervaltimer.app

import android.os.Bundle
import app.myintervaltimer.app.plugins.CapacitorTimerNotification
import com.getcapacitor.BridgeActivity


class MainActivity : BridgeActivity() {
    public override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        registerPlugin(CapacitorTimerNotification::class.java)
    }
}