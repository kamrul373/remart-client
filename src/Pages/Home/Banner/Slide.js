import React from 'react';
import "./slide.css";

const Slide = ({ slide }) => {
    return (
        <div id={`slide${slide.id}`} className="carousel-item relative w-full min-h-[550px] bg-cover home-slide" style={{ backgroundImage: `url(${slide.img})` }}>
            <div className="banner-image " >
                {/* <img src={slide.img} className="w-full" alt="banner" /> */}
            </div>
            <div className={`banner-content absolute top-[30%] ${slide.position === "left" ? "left-5" : "right-5"}  px-10  `}

            >
                <h2 className='lg:text-6xl text-2xl font-bold'>{slide.title}</h2>
                <p className='lg:text-xl text-lg mt-2'>{slide.subTitle}</p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 md:left-5 md:right-5 md:top-1/2 top-[60%] left-1 right-1">
                <a href={`#slide${slide.prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${slide.next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default Slide;