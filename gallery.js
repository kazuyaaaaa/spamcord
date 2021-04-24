const galleryImage = document.getElementById("galleryImage");
const animateAttribute = "animate__animated animate__bounceIn";

function removeActive() {
    $('li.active').removeClass('active');
}

function setActive($element) {
    document.getElementById($element).setAttribute("class", "active");
}

function fadeIn(el) {
    el.style.opacity = 0;
    var tick = function () {
        el.style.opacity = +el.style.opacity + 0.08;
        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
    };
    tick();
}


removeActive();
setActive('btnDashboard');

document.getElementById('gallery').addEventListener('click', function () {
    fadeIn(galleryImage);
});

document.getElementById('btnDashboard').addEventListener('click', function () {
    removeActive();
    setActive(this.id);
    galleryImage.setAttribute("src", "assets/img/gui/dashboard_2.png");
});

document.getElementById('btnMessage').addEventListener('click', function () {
    removeActive();
    setActive(this.id);
    galleryImage.setAttribute("src", "assets/img/gui/message.png");
});

document.getElementById('btnServer').addEventListener('click', function () {
    removeActive();
    setActive(this.id);
    galleryImage.setAttribute("src", "assets/img/gui/server.png");
});

document.getElementById('btnTokens').addEventListener('click', function () {
    removeActive();
    setActive(this.id);
    galleryImage.setAttribute("src", "assets/img/gui/tokens.png");
});

document.getElementById('btnProxies').addEventListener('click', function () {
    removeActive();
    setActive(this.id);
    galleryImage.setAttribute("src", "assets/img/gui/proxies.png");
});