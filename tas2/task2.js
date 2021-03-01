let button = document.querySelector('.js-btn').addEventListener('click',()=>{
    let w = window.screen.width
    let h = window.screen.height 
    let x = document.getElementById("browser-text");
    x.innerHTML = "Размеры экрана,ширина: " + w + ", высота: " + h + ".";
})

