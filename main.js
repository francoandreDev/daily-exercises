//* DOM

//? when users clicks on links from header nav, header input hidden the nav-menu
hideMenuOnClickLinks()

function hideMenuOnClickLinks() {
    const [...anchorsMenu] = document.querySelectorAll("header nav a")
    const inputCheckMenu = document.querySelector("header input#burger")

    //? get click event from all anchors in nav-menu, then hide nav-menu
    //? when users click any link inside of itself

    anchorsMenu.forEach(anchor => {
        anchor.addEventListener("click", () => {
            inputCheckMenu.checked = false
        })
    })

}

//* classes

//? class to manage the measures times

export class Timer {
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

//? define measures limits for class time

export const maxTimer = { seconds: 60, minutes: 60, hours: 24 }
