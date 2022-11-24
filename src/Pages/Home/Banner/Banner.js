import React from 'react';
import slide1 from "../../../assets/img/sliders/slider-1.jpg"
import slide2 from "../../../assets/img/sliders/slider-2.png"
import slide3 from "../../../assets/img/sliders/slider-3.png"
import slide4 from "../../../assets/img/sliders/slider-4.png"
import Slide from './Slide';

const sliders = [
    {
        id: 1,
        img: slide1,
        prev: 4,
        next: 2,
        position: "left",
        title: "Best Laptops Deals",
        subTitle: "Our site is made to allow you to save some cash!",
    },
    {
        id: 2,
        img: slide2,
        prev: 1,
        next: 3,
        position: "right",
        title: "Take 15% off !",
        subTitle: "Get ready to take advantage of the deals",
    },
    {
        id: 3,
        img: slide3,
        prev: 2,
        next: 4,
        position: "left",
        title: "Best Resale Value",
        subTitle: "Enjoy the discounts whole season!",
    },
    {
        id: 4,
        img: slide4,
        prev: 3,
        next: 1,
        position: "right",
        title: " Premium Quality!",
        subTitle: "We ensure quality of used products",
    },
]

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                {
                    sliders.map(slide => <Slide
                        key={slide.id}
                        slide={slide}
                    ></Slide>)
                }
            </div>
        </div>
    );
};

export default Banner;