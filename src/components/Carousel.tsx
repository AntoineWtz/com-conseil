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
                {/* Add your images and phrases here */}
                <div className="min-w-full">
                    <img src="https://via.placeholder.com/1200x400" alt="Carousel 1" />
                </div>
                <div className="min-w-full">
                    <img src="https://via.placeholder.com/1200x400" alt="Carousel 2" />
                </div>
                <div className="min-w-full">
                    <img src="https://via.placeholder.com/1200x400" alt="Carousel 3" />
                </div>
            </motion.div>
        </div>
    );
};

export default Carousel;
