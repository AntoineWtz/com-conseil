import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import carousel1 from '../assets/images/carousel-1.jpg';
import carousel2 from '../assets/images/carousel-2.jpg';
import carousel3 from '../assets/images/carousel-3.jpg';

const carouselImages = [
    { src: carousel1, title: "SOYEZ ENTREPRENEUR !", description: "Nous sommes à vos côtés, tel un équipage, pour vous accompagner dans la réalisation de vos projets." },
    { src: carousel2, title: "BOOSTEZ VOTRE RENTABILITÉ !", description: "Nous sommes à vos côtés, tel un coach, pour vous aider dans vos décisions." },
    { src: carousel3, title: "GUIDEZ VOS EQUIPES VERS LE SUCCÈS !", description: "Nous sommes à vos côtés, tel un guide, pour vous orienter dans la gestion de vos ressources humaines." },
];

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-96 overflow-hidden">
            <AnimatePresence>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <img src={carouselImages[currentIndex].src} alt={`Carousel ${currentIndex}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#344697] bg-opacity-60 flex flex-col justify-center items-center text-white">
                        <h4 className="text-3xl font-bold">{carouselImages[currentIndex].title}</h4>
                        <p className="text-lg">{carouselImages[currentIndex].description}</p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Carousel;
