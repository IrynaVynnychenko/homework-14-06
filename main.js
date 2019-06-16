let krug = document.querySelector('.krug ');
let kvadrat = document.querySelector('.kvadrat');
let positionMouseX = null;
let positionMouseY = null;
let body = document.querySelector('body');

const move = function(e) {
    let kvadratArrea = kvadrat.getBoundingClientRect();
    let kvadratX = kvadratArrea.left;
    let kvadratY = kvadratArrea.top;
    let kvadratH = kvadratArrea.height;
    let kvadratW = kvadratArrea.width;

    let krugArrea = krug.getBoundingClientRect();
    let krugX = krugArrea.left;
    let krugY = krugArrea.top;
    let krugW = krugArrea.width;
    let krugH = krugArrea.height;

    let krugInArreaX = krugX - kvadratX;
    let krugInArreaY = krugY - kvadratY;
    if (e.target == krug) {
        let positionMouseInArreaX = krugInArreaX - positionMouseX + e.layerX;
        if (positionMouseInArreaX > 0 && positionMouseInArreaX < kvadratW - krugW) {
            krug.style.left = positionMouseInArreaX + 'px';
        }
        let positionMouseInArreaY = krugInArreaY - positionMouseY + e.layerY;
        if (positionMouseInArreaY > 0 && positionMouseInArreaY < kvadratH - krugH) {
            krug.style.top = positionMouseInArreaY + 'px';
        }
    } else if (e.target == kvadrat) {
        console.log(krugInArreaX);
        console.log(positionMouseX);
        console.log(e.layerX);
        console.log('------------')
        let positionMouseInArreaX = e.layerX - positionMouseX;
        if (positionMouseInArreaX > 0 && positionMouseInArreaX < kvadratW - krugW) {
            krug.style.left = positionMouseInArreaX + 'px';
        }
        let positionMouseInArreaY = e.layerY - positionMouseY;
        if (positionMouseInArreaY > 0 && positionMouseInArreaY < kvadratH - krugH) {
            krug.style.top = positionMouseInArreaY + 'px';
        }
    }

};

krug.addEventListener('mousedown', function(e) {
    positionMouseX = e.layerX;
    positionMouseY = e.layerY;
    body.classList.add('grabing');
    kvadrat.addEventListener('mousemove', move);

});

krug.addEventListener('mouseup', function() {
    kvadrat.removeEventListener('mousemove', move);
    body.classList.remove('grabing');
});