const toggle = document.querySelector(".toggle");
const toggleSwitch = document.querySelector(".toggle-switch");

toggleSwitch.addEventListener("mousedown", function(){
    toggle.classList.toggle("toggleOn");
})