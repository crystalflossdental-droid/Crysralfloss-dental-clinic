import { Settings } from 'react-slick';

export const sliderSettings: Settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  pauseOnHover: true,
  fade: true,
  cssEase: 'ease-in-out',
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
        arrows: false,
      },
    },
  ],
};
