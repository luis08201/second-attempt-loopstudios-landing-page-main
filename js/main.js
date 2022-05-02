let menuBTN = document.getElementById("menuBTN");

menuBTN.addEventListener("click", () => {
    menuBTN.classList.add("active");

    let menuToggle = document.getElementById("menuToggle");
    menuToggle.classList.add("active");

    if(menuToggle.classList.contains("active")){
        let menuNavTopBTN = document.getElementById("menuNavTopBTN");

        menuNavTopBTN.addEventListener("click", () => {
            menuToggle.classList.remove("active");
              menuBTN.classList.remove("active");
        })
    }
})