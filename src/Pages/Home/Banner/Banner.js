import React from 'react';
import slide1 from "../../../assets/img/sliders/slider-1.jpg"
import slide2 from "../../../assets/img/sliders/slider-2.png"
import slide3 from "../../../assets/img/sliders/slider-3.png"
import slide4 from "../../../assets/img/sliders/slider-4.png"

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
                    sliders.map(slide => <>
                        <div id={`slide${slide.id}`} className="carousel-item relative w-full">
                            <div className="banner-image">
                                <img src={slide.img} className="w-full" alt="banner" />
                            </div>
                            <div className={`banner-content absolute top-[30%] ${slide.position}-5  px-5`}>
                                <h2 className='lg:text-6xl font-bold'>{slide.title}</h2>
                                <p className='lg:text-xl mt-2'>{slide.subTitle}</p>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 md:left-5 md:right-5 md:top-1/2 top-[60%] left-1 right-1">
                                <a href={`#slide${slide.prev}`} className="btn btn-circle">❮</a>
                                <a href={`#slide${slide.next}`} className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Banner;