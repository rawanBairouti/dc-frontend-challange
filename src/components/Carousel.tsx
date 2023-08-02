import React, { useState } from 'react';
import './Carousel.css';
import Icon from './Icon';

interface CarouselProps {
    images?: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!images) return null;

    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex(
            (currentImageIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className='carousel'>
            <img src={images[currentImageIndex]} alt='carousel' />
            <div className='buttons'>
                <button onClick={prevImage}>
                    <Icon icon='chevronLeft' />
                </button>
                <button onClick={nextImage}>
                    <Icon icon='chevronRight' />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
