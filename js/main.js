const btn = document.querySelector(".btn-three"),
    body = document.querySelector('body');

btn.addEventListener('click', () => {
    if (body.className === '') {
        body.classList.add('dark')
    } else body.className = ''
})
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        "@1.50": {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});