import React from 'react';
import { FaEnvelope, FaFacebook, FaLinkedin, FaPhone } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#344697] text-white p-6 text-center sticky bottom-0 z-50">
            <div className="flex justify-center space-x-6">
                <a href="https://www.facebook.com" className="hover:text-blue-300 duration-300">
                    <FaFacebook size={24} />
                </a>
                <a href="https://www.linkedin.com" className="hover:text-blue-300 duration-300">
                    <FaLinkedin size={24} />
                </a>
                <a href="tel:+330123456789" className="hover:text-blue-300 duration-300">
                    <FaPhone size={24} />
                </a>
                <a href="mailto:cabinet@cccomconseil.com" className="hover:text-blue-300 duration-300">
                    <FaEnvelope size={24} />
                </a>
            </div>
            <p className="mt-4 text-xs">© 2023 C&C Com' Conseil. Tous droits réservés.</p>
        </footer>
    );
}

export default Footer;
