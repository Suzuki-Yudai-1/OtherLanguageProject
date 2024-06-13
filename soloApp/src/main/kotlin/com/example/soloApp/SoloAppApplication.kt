package com.example.soloApp

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class SoloAppApplication

fun main(args: Array<String>) {
	runApplication<SoloAppApplication>(*args)
}
