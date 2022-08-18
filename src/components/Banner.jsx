import React from 'react'
import Banner1 from '../assets/images/slider/banner1.jpg'
import Banner2 from '../assets/images/slider/banner2.jpg'
import Banner3 from '../assets/images/slider/banner3.jpg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import '../scss/index.scss'

const Banner = () => {

    const NextArrow = ({onClick}) => {
        return (
            <div className='control-btn' onClick={onClick}>
                <button className='next'>
                    <i class="fa-solid fa-angle-right"></i>
                </button>
            </div>
        )
    }

    const PrevArrow = ({onClick}) => {
       return (
        <div className='control-btn' onClick={onClick}>
            <button className='prev'>
                <i class="fa-solid fa-angle-left"></i>
            </button>
        </div>
       )
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true
      }

  return (
    <div className='banner'>
        <Slider {...settings}>
            <img className='banner-img' src={Banner1} alt="" />
            <img className='banner-img' src={Banner2} alt="" />
            <img className='banner-img' src={Banner3} alt="" />
        </Slider>
    </div>
  )
}

export default Banner