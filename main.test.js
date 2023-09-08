import { describe, expect, test } from 'vitest'
import { Timer, maxTimer } from './main'

//? testing class-timer && object maxTimer

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
