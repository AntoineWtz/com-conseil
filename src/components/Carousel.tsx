import React from 'react';
import { motion } from 'framer-motion';

const Carousel: React.FC = () => {
    return (
        <div className="carousel-container overflow-hidden relative">
            <motion.div
                className="carousel flex"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="min-w-full">
                    <img src="../assets/images/carousel-1.jpg" alt="Carousel 1" />
                </div>
                <div className="min-w-full">
                    <img src="../assets/images/carousel-2.jpg" alt="Carousel 2" />
                </div>
                <div className="min-w-full">
                    <img src="../assets/images/carousel-3.jpg" alt="Carousel 3" />
                </div>
            </motion.div>
        </div>
    );
};

export default Carousel;
