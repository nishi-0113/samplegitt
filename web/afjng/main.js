let nav = document.querySelector("#header");
let btn = document.querySelector(".toggle_btn");
let mask = document.querySelector("#mask");

btn.onclick = () => {
    nav.classList.toggle("open");
};

mask.onclick = () => {
    nav.classList.toggle("open");
};


const swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    loop: true,
    pagination: {
        el: ".swiper-pagination"

    }
});


window.addEventListener("load", function () {
    const target = document.querySelectorAll('.fadein')
    const targetArray = Array.prototype.slice.call(target);
    const options = {
        root: null,
        rootMargin: '0px 0px',
        threshold: 0.2
    };
    const observer = new IntersectionObserver(callback, options)
    targetArray.forEach(function (tgt) {
        observer.observe(tgt)
    });

    function callback(entries) {
        entries.forEach(function (entry) {
            const target = entry.target;
            if (entry.isIntersecting && !target.classList.contains('is-active')) {
                target.classList.add('is-active');
            }
        });
    };
});    