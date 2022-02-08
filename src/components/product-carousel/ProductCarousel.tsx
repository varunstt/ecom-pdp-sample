import { useEffect, useState } from 'react';
import Swipe from 'react-easy-swipe';
import './ProductCarousel.styles.scss';
import LazyLoad from 'react-lazyload';

/* Carousel using Tailwind css - refference added in readme.md 
    Logic work with hidding or non active images, and showing only the active image with css
*/
export const ProductCarousel = ({
    imageArray,
}: {
    imageArray: Array<string>;
}) => {
    /* prop - imageArray is an array of image urls */
    const [currentSlide, setCurrentSlide] = useState(0);
    /* state - currentSlide to hold current index position of slider */
    const [paused, setPaused] = useState(false);
    /* state - paused to stop auto/ infinite scroll when user is swipping */
    useEffect(() => {
        /* setInterval logic to auto/infinite scroll/ swipe horizontally */
        const interval = setInterval(() => {
            if (paused === false) {
                let newSlide =
                    currentSlide === imageArray.length - 1
                        ? 0
                        : currentSlide + 1;
                /* Change to next slide by incremting current slide or changing it back to initial posistion '0' index */
                setCurrentSlide(newSlide);
            }
        }, 3000);
        return () => clearInterval(interval);
    });

    const nextSlide = () => {
        let newSlide =
            currentSlide === imageArray.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    };

    const prevSlide = () => {
        let newSlide =
            currentSlide === 0 ? imageArray.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    };
    return (
        <>
            <div className='carousel-wrapper w-full flex justify-center overflow-hidden'>
                {/* Swipe functionality added on top of images */}
                <Swipe
                    onSwipeLeft={() => nextSlide()}
                    onSwipeRight={() => prevSlide()}
                >
                    {imageArray.map((slide, index) => {
                        return (
                            /* Lazy load images */
                            <LazyLoad>
                                <img
                                    src={slide}
                                    alt='This is a carousel slide'
                                    key={index}
                                    className={
                                        'carousel-image' +
                                        (index === currentSlide
                                            ? ' block w-full h-auto object-cover'
                                            : ' hidden')
                                    }
                                    onMouseEnter={() => setPaused(true)}
                                    onMouseLeave={() => setPaused(false)}
                                />
                            </LazyLoad>
                        );
                    })}
                </Swipe>
            </div>
            <div className='w-full flex justify-center '>
                {imageArray.map((element, index) => {
                    return (
                        <div
                            className={
                                index === currentSlide
                                    ? 'h-0.5 w-4 bg-gray-900 rounded-full mx-2 my-3 cursor-pointer'
                                    : 'h-0.5 w-4 bg-gray-300 rounded-full mx-2 my-3 cursor-pointer'
                            }
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                        ></div>
                    );
                })}
                {/* Pagination/ paging dashed lines */}
            </div>
        </>
    );
};
