package app.myintervaltimer.app

open class Globals {
    interface Listeners {
        fun triggerListener(listenerName: String)
    }

    lateinit var value: Listeners

    companion object {
        // Getter-Setters
        var instance = Globals()
    }
}