function hideMenuOnClickLinks() {
    const [...anchorsMenu] = document.querySelectorAll("header aside a")
    const inputCheckMenu = document.querySelector("header input#burger")

    anchorsMenu.forEach(anchor => {
        anchor.addEventListener("click", () => {
            inputCheckMenu.checked = false
        })
    })

}