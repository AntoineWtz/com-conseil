import { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaHeart, FaStar, FaTools, FaNewspaper, FaEnvelope, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/images/com_conseil_logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white text-[#344697] p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
            <div>
                <Link to="/">
                    <img src={logo} alt="Com Conseil" className="h-10 lg:h-20" />
                </Link>
            </div>
            <div className="lg:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none z-50">
                    {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                </button>
            </div>
            <nav className={`lg:flex lg:items-center lg:space-x-12 ${isMenuOpen ? 'fixed top-0 right-0 bg-white bg-opacity-95 z-40 flex flex-col items-center space-y-4 p-4 shadow-lg mt-16' : 'hidden lg:flex'}`}>
                <Link to="/" className="flex items-center text-lg hover:text-[#208DB2] duration-200" onClick={() => setIsMenuOpen(false)}>
                    <FaHome className="mr-2" />Accueil
                </Link>
                <Link to="/about" className="flex items-center text-lg hover:text-[#208DB2] duration-200" onClick={() => setIsMenuOpen(false)}>
                    <FaHeart className="mr-2" />Notre ADN
                </Link>
                <Link to="/skills" className="flex items-center text-lg hover:text-[#208DB2] duration-200" onClick={() => setIsMenuOpen(false)}>
                    <FaStar className="mr-2" />Nos Compétences
                </Link>
                <Link to="/tools" className="flex items-center text-lg hover:text-[#208DB2] duration-200" onClick={() => setIsMenuOpen(false)}>
                    <FaTools className="mr-2" />Outils
                </Link>
                {/* <Link to="/news" className="flex items-center text-lg hover:text-[#208DB2] duration-200" onClick={() => setIsMenuOpen(false)}>
                    <FaNewspaper className="mr-2" />Actualités
                </Link> */}
                <Link to="/contact" className="flex items-center text-lg hover:text-[#208DB2] duration-200" onClick={() => setIsMenuOpen(false)}>
                    <FaEnvelope className="mr-2" />Contact
                </Link>
                <Link to="/login" className="flex items-center text-white text-lg bg-[#344697] px-4 py-2 rounded-xl hover:bg-[#208DB2] duration-200" onClick={() => setIsMenuOpen(false)}>
                    <FaUser className="mr-2" />Espace Client
                </Link>
            </nav>
        </header>
    );
}

export default Header;
