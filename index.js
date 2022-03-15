const toggle = document.querySelector(".toggle");
const toggleSwitch = document.querySelector(".toggle-switch");

const bulb = document.querySelector(".bulb-container");

toggleSwitch.addEventListener("mousedown", function(){
    toggle.classList.toggle("toggleOn");
    bulb.classList.toggle("bulb-container-on")
})