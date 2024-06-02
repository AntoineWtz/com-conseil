import React from 'react';
import { FaHome, FaInfoCircle, FaStar, FaTools, FaNewspaper, FaUserAlt, FaEnvelope, FaUserLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/images/com_conseil_logo.png';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="text-[#344697] p-4 flex justify-around items-center">
                <div>
                    <Link to="/">
                        <img src={logo} alt="Com Conseil" className="h-20" />
                    </Link>
                </div>
                <nav className="space-x-12 text-md font-bold">
                    <Link to="/" className="hover:text-[#208DB2] duration-200">
                        <FaHome className="inline-block mr-1" /> Accueil
                    </Link>
                    <Link to="/about" className="hover:text-[#208DB2] duration-200">
                        <FaInfoCircle className="inline-block mr-1" /> Notre ADN
                    </Link>
                    <Link to="/skills" className="hover:text-[#208DB2] duration-200">
                        <FaStar className="inline-block mr-1" /> Compétences
                    </Link>
                    <Link to="/news" className="hover:text-[#208DB2] duration-200">
                        <FaNewspaper className="inline-block mr-1" /> Actualités
                    </Link>
                    <Link to="/tools" className="hover:text-[#208DB2] duration-200">
                        <FaTools className="inline-block mr-1" /> Outils
                    </Link>
                    <Link to="/contact" className="hover:text-[#208DB2] duration-200">
                        <FaEnvelope className="inline-block mr-1" /> Contact
                    </Link>
                    <Link to="/login" className="hover:text-[#208DB2] duration-200">
                        <FaUserLock className="inline-block mr-1" /> Espace Client
                    </Link>
                </nav>
            </header>
            <main className="flex-grow container mx-auto p-4">
                {children}
            </main>
            <footer className="text-[#344697] p-4 text-center">
                &copy; 2024 Com Conseil. Tous droits réservés.
            </footer>
        </div>
    );
};

export default MainLayout;
