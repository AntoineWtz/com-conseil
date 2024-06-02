import React from 'react';
import { motion } from 'framer-motion';
import carousel1 from '../assets/images/carousel-1.jpg';
import carousel2 from '../assets/images/carousel-2.jpg';
import carousel3 from '../assets/images/carousel-3.jpg';

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
                    <img src={carousel1} alt="Carousel 1" />
                    <span>
                        <h4>SOYEZ ENTREPRENEUR !</h4>
                        <p>Nous sommes à vos côtés, tel un équipage, pour vous accompagner dans la réalisation de vos projets.</p>
                    </span>
                </div>
                <div className="min-w-full">
                    <img src={carousel2} alt="Carousel 2" />
                    <span>
                        <h4>BOOSTEZ VOTRE RENTABILITÉ !</h4>
                        <p>Nous sommes à vos côtés, tel un coach, pour vous aider dans vos décisions.</p>
                    </span>
                </div>
                <div className="min-w-full">
                    <img src={carousel3} alt="Carousel 3" />
                    <span>
                        <h4>GUIDEZ VOS EQUIPES VERS LE SUCCÈS !</h4>
                        <p>Nous sommes à vos côtés, tel un guide, pour vous orienter dans la gestion de vos ressources humaines </p>
                    </span>
                </div>
            </motion.div>
        </div>
    );
};

export default Carousel;
