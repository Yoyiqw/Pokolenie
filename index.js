const btn = document.querySelector(".header__btn")
const list = document.querySelector(".header__list")


btn.addEventListener("click", function() {
    btn.classList.toggle("open")
    console.log("vdsad");
    list.classList.toggle("menu")
})

console.log(btn);