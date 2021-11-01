package app.myintervaltimer.app

import kotlin.reflect.KFunction

open class Globals public constructor() {
    interface Listeners {
        fun onPause()
    }

    lateinit var value: Listeners

    companion object {
        // Getter-Setters
        var instance = Globals()
    }
}