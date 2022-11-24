import React from 'react';

const Slide = ({ slide }) => {
    return (
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
    );
};

export default Slide;