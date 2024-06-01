import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaTools, FaNewspaper, FaUserAlt, FaEnvelope, FaUserLock } from 'react-icons/fa';

const MainLayout: React.FC = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-[#344697] text-white p-4 flex justify-between items-center">
                <div className="text-lg font-bold">
                    <Link to="/">Logo</Link>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="flex items-center"><FaHome className="mr-1" />Accueil</Link></li>
                        <li><Link to="/about" className="flex items-center"><FaInfoCircle className="mr-1" />About</Link></li>
                        <li><Link to="/skills" className="flex items-center"><FaTools className="mr-1" />Skills</Link></li>
                        <li><Link to="/news" className="flex items-center"><FaNewspaper className="mr-1" />News</Link></li>
                        <li><Link to="/tools" className="flex items-center"><FaTools className="mr-1" />Tools</Link></li>
                        <li><Link to="/contact" className="flex items-center"><FaEnvelope className="mr-1" />Contact</Link></li>
                        <li><Link to="/login" className="flex items-center"><FaUserLock className="mr-1" />Espace Client</Link></li>
                    </ul>
                </nav>
            </header>
            <main className="flex-grow p-4">
                {children}
            </main>
            <footer className="bg-[#344697] text-white p-4 text-center">
                &copy; 2024 My Accounting Firm
            </footer>
        </div>
    );
};

export default MainLayout;
