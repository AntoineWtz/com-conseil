import React from 'react';
import { FaHome, FaInfoCircle, FaStar, FaTools, FaNewspaper, FaUserAlt, FaEnvelope, FaUserLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-[#344697] text-white p-4 flex justify-around items-center">
                <div className="text-lg font-bold">
                    <Link to="/">
                        <img src="../assets/images/com_conseil_logo.png" alt="Com Conseil" className="h-8" />
                    </Link>
                </div>
                <nav className="space-x-12">
                    <Link to="/" className="hover:underline">
                        <FaHome className="inline-block mr-1" /> Accueil
                    </Link>
                    <Link to="/about" className="hover:underline">
                        <FaInfoCircle className="inline-block mr-1" /> Notre ADN
                    </Link>
                    <Link to="/skills" className="hover:underline">
                        <FaStar className="inline-block mr-1" /> Compétences
                    </Link>
                    <Link to="/news" className="hover:underline">
                        <FaNewspaper className="inline-block mr-1" /> Actualités
                    </Link>
                    <Link to="/tools" className="hover:underline">
                        <FaTools className="inline-block mr-1" /> Outils
                    </Link>
                    <Link to="/contact" className="hover:underline">
                        <FaEnvelope className="inline-block mr-1" /> Contact
                    </Link>
                    <Link to="/login" className="hover:underline">
                        <FaUserLock className="inline-block mr-1" /> Espace Client
                    </Link>
                </nav>
            </header>
            <main className="flex-grow container mx-auto p-4">
                {children}
            </main>
            <footer className="bg-[#344697] text-white p-4 text-center">
                &copy; 2024 Com Conseil. Tous droits réservés.
            </footer>
        </div>
    );
};

export default MainLayout;
