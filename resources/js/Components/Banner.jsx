import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    {
        src: "/assets/banners/11.jpg",
        name: "Tibetan Singing Bowl",
        text: "Tibetan Singing Bowls are metal bowls used in meditation, sound therapy, and spiritual rituals. They produce resonating, harmonic tones when struck or rubbed. These sounds are believed to promote relaxation, reduce stress, and aid in healing by balancing energy, enhancing mental clarity, and aligning chakras for overall well-being.",
    },
    {
        src: "/assets/banners/22.jpg",
        name: "7Chakra Singing Bowl",
        text: "A 7 Chakra Singing Bowl is a set of seven bowls, each corresponding to one of the seven chakras in the body. These bowls are tuned to specific frequencies that align with each chakra, promoting energy balance and healing. The sound vibrations help clear blockages, improve emotional health, and restore harmony in the body and mind.",
    },
    {
        src: "/assets/banners/33.jpg",
        name: "Antique Singing Bowl",
        text: "An antique singing bowl is a traditional, handcrafted bowl, often made from a blend of metals like copper, tin, and iron, that produces soothing, harmonic sounds when struck or rubbed with a mallet. These bowls, typically several decades or centuries old, are valued for their craftsmanship, unique resonance, and spiritual significance, often used in meditation, sound therapy, and rituals to promote healing, balance, and tranquility.",
    },
];

export default function ImageBanner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="relative w-full flex-shrink-0">
                        <img
                            src={image.src}
                            alt={`Banner ${index + 1}`}
                            className="w-full h-full object-cover blur-sm"
                        />
                        {/* Background Text */}
                        {/* <div className="image-name-container"> */}
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 mt-[-440px] text-[26px] font-bold text-left text-white underline">
                            {image.name}
                        </div>
                        <div
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 mt-[-250px] text-[20px] font-bold text-left text-white font-[cursive] overflow-hidden"
                            style={{ width: "35%" }}
                        >
                            {image.text}
                        </div>

                        {/* </div> */}
                    </div>
                ))}
            </div>

            {/* Left Arrow */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
            >
                <ChevronLeft size={32} />
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
            >
                <ChevronRight size={32} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index ? "bg-black" : "bg-gray-500"
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
}
