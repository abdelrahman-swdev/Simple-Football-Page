let toggle1 = document.querySelector(".toggle");
let showcase = document.querySelector('.showcase');
let toggle2 = document.querySelector(".toggle2");

toggle1.addEventListener('click',  ()=>{
    showcase.classList.toggle('active');
    toggle1.style.display = "none";
    toggle2.style.display = "block"
});
toggle2.addEventListener('click',  ()=>{
    showcase.classList.toggle('active');
    toggle1.style.display = "block";
    toggle2.style.display = "none"
})