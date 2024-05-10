import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../../assets/vendors/carousel/img1.png'
import img2 from '../../../assets/vendors/carousel/img2.png'
import img3 from '../../../assets/vendors/carousel/img3.png'
import img4 from '../../../assets/vendors/carousel/img4.png'
import img5 from '../../../assets/vendors/carousel/img5.png'

function AutoPlay() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 500,
        cssEase: "linear"
    };
    return (
        <div className="slider-container">
        <Slider {...settings}>
            <div className="px-6">
                <img src={img1} alt="" />
            </div>
            <div className="px-6">
                <img src={img2} alt="" />
            </div>
            <div className="px-6">
                <img src={img3} alt=""/>
            </div>
            <div className="px-6">
                <img src={img4} alt=""/>
            </div>
            <div className="px-6">
                <img src={img5} alt=""/>
            </div>
        </Slider>
        </div>
    );
}

export default AutoPlay;
