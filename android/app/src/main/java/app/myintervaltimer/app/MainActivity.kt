package app.myintervaltimer.app

import android.os.Bundle
import app.myintervaltimer.app.plugins.TimerNotification.CapacitorTimerNotification
import app.myintervaltimer.app.plugins.TimerNotification.createTimerNotificationChannel
import com.getcapacitor.BridgeActivity


class MainActivity : BridgeActivity() {
    public override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        createTimerNotificationChannel()
        registerPlugin(CapacitorTimerNotification::class.java)
    }
}