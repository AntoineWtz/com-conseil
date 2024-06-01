import React from 'react';
import { motion } from 'framer-motion';

const Carousel: React.FC = () => {
    return (
        <div className="carousel-container">
            <motion.div className="carousel" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {/* Images et phrases attractives */}
            </motion.div>
        </div>
    );
};

export default Carousel;
