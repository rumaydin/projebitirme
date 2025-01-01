'use client'

import { useState, useEffect } from 'react';
import { IoChevronBack } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";

const Slider = () => {
    const images = [
        '/alev.jpg',
        '/jale_yilmabasar.jpg',
        '/burcak_bingol.jpg',
        '/atilla_cengiz_kilic.jpg',
        '/aysegul_turedi_ozen.jpg',
        '/hakkı_izzet.jpg',
        '/hamiye_colakoglu.jpg',
        '/salim_yasar.jpg',
        '/aygun_dincer.jpg',
        '/sadi_diren.jpg',
        '/nurdan_arslan.jpg',
        '/alev_demirkesen.jpg'
    ];
    const content = images.map(() => ({ description: 'Daha fazla bilgi' }));
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < images.length - 4 ? prevIndex + 1 : 0));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 4));
    };

    // Otomatik kaydırma için useEffect
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 4000); // 4 saniye

        return () => clearInterval(interval); // Temizlik işlemi
    }, []);

    return (
        <div className="flex justify-center items-center h-[60vh]">
            <div className="flex items-center justify-between w-full max-w-6xl p-4">
                <button
                    onClick={handlePrev}
                    className="p-2 border rounded-full focus:outline-none"
                    style={{ color: '#4B2E2E', borderColor: '#4B2E2E' }}
                >
                    <IoChevronBack className="size-6" />
                </button>
                <div className="flex overflow-hidden w-full">
                    {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
                        <div key={index} className="w-1/4 p-4 flex flex-col items-center">
                            <img
                                src={image}
                                alt={`Card ${index + 1}`}
                                className="w-auto h-40 rounded-lg object-cover"
                            />
                            <p
                                className="mt-2 text-sm"
                                style={{ color: '#4B2E2E' }}
                            >
                                {content[currentIndex + index]?.description}
                            </p>
                        </div>
                    ))}
                </div>
                <button
                    onClick={handleNext}
                    className="p-2 border rounded-full focus:outline-none"
                    style={{ color: '#4B2E2E', borderColor: '#4B2E2E' }}
                >
                    <GrFormNext className="size-6" />
                </button>
            </div>
        </div>
    );
};

export default Slider;