import React from 'react'
import Slider from 'react-slick'


const MyCarousel = ({images, title}) => {

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: images.length-0.01,
    slidesToScroll: 1,
    initialSlide: 0,
    className: 'flex items-center justify-center pb-8',
    arrows: false,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.99,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.99,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.99,
        }
      }
    ]
  };

  return (
    <>
      <h1 className='flex justify-center items-center pb-5 text-2xl font-bold'>{title}</h1>
      <Slider {...settings}>
        {images.map(({src, title, id}) => (
          <div key={id}>
            <img className='mx-auto w-32 h-32' src={src} alt={title} />
          </div>
        ))}
      </Slider>
    </>
  );
}

export default MyCarousel;