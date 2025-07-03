import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.gallery-swiper', {
        modules: [Navigation],
        breakpoints: {
            374: {
                slidesPerView: 1.3,
                spaceBetween: 10,
            },
            1439: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
        },
        slidesPerView: 'auto',
        loop: true,
        slideClass: 'gallery-swiper-slide',
        wrapperClass: 'gallery-swiper-wrapper',
        direction: 'horizontal',

        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        },
    });
});