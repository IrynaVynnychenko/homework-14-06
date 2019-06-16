let krug = document.querySelector(".krug");
let body = document.querySelector("body");
let kvadrat = document.querySelectorAll(".kradrat");

const move = function(e) {
    // console.log(krug.getBoundingClientRect());

    if (e.clientX < 50) {
        krug.style.left = '0px';
    } else if (e.clientX > 730) {
        krug.style.left = '680px';
    } else {
        krug.style.left = e.pageX - e.layerX + (e.layerX - krug.clientWidth / 2) + 'px';
    }

    if (e.layerY < 50) {
        krug.style.top = '0px';

    } else if (e.pageY > 440) {
        krug.style.top = '229px';
    } else {
        krug.style.top = e.pageY - 164 - e.layerY + (e.layerY - krug.clientHeight / 2) + 'px';
    }
};

krug.addEventListener('mousedown', function() {
    krug.addEventListener('mousemove', move)
});

krug.addEventListener('mouseup', function() {
    krug.removeEventListener('mousemove', move)
});