'use strict';

const anchor = document.querySelector('footer a.mosaic--logo');
anchor.addEventListener('click', scrollToY, false);

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
})();

function scrollToY() {
    let scrollY = window.scrollY || document.documentElement.scrollTop;
    let scrollTargetY = 0;
    let speed = 200;
    let currentTime = 0;
    let time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

    function easeOutSine(pos) {
        if ((pos /= 0.5) < 1) {
            return 0.5 * Math.pow(pos, 5);
        }
        return 0.5 * (Math.pow((pos - 2), 5) + 2);
    }

    function tick() {
        currentTime += 1 / 60;

        let p = currentTime / time;
        let t = easeOutSine(p);

        if (p < 1) {
            requestAnimFrame(tick);
            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
        } else {
            window.scrollTo(0, scrollTargetY);
        }
    };

    tick();
};
