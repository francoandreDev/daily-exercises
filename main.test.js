import { describe, expect, test } from 'vitest'

function sum(a, b) {
    return a + b
}

describe("Test are function and running now", () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3)
    })
})

class Timer {
    #time;
    #adding;
    #limit;
    constructor(limit) {
        this.#time = 0
        this.#limit = limit
        this.#adding = 0
    }

    setCurrentLimit(limit) {
        this.#limit = limit
    }

    getCurrentTime() {
        return this.#time
    }

    increment(amount = 1) {
        (this.#time + amount >= this.#limit) ? this.addition(amount) :
            this.#time += amount
    }

    addition(amount) {
        this.#time = this.#limit % amount - 1
        this.#adding += this.limit / amount - 1
    }
}

const maxTimer = { seconds: 60, minutes: 60, hours: 24 }

describe("Class Timer", () => {
    test('Seconds', () => {
        const seconds = new Timer(maxTimer.seconds)
        expect(seconds.getCurrentTime()).toBe(0)
        seconds.increment()
        expect(seconds.getCurrentTime()).toBe(1)
        seconds.increment(maxTimer.seconds - 1)
        expect(seconds.getCurrentTime()).toBe(0)
    })
    test('Minutes', () => {
        const minutes = new Timer(maxTimer.minutes)
        expect(minutes.getCurrentTime()).toBe(0)
        minutes.increment()
        expect(minutes.getCurrentTime()).toBe(1)
        minutes.increment(maxTimer.minutes - 1)
        expect(minutes.getCurrentTime()).toBe(0)
    })
    test('Hours', () => {
        const hours = new Timer(maxTimer.hours)
        expect(hours.getCurrentTime()).toBe(0)
        hours.increment()
        expect(hours.getCurrentTime()).toBe(1)
        hours.increment(maxTimer.hours - 1)
        expect(hours.getCurrentTime()).toBe(0)
    })
})
