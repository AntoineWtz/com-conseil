import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaHeart, FaStar, FaTools, FaEnvelope, FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/com_conseil_logo.png';
import { getSkills } from '../services/skillService';
import { Skill } from '../types';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSkillsDropdownOpen, setIsSkillsDropdownOpen] = useState(false);
    const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
    const [isSkillsHovered, setIsSkillsHovered] = useState(false);
    const [isToolsHovered, setIsToolsHovered] = useState(false);
    const [skills, setSkills] = useState<Skill[]>([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        getSkills().then(data => setSkills(data));
    }, []);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (!isSkillsHovered) {
            const timer = setTimeout(() => {
                setIsSkillsDropdownOpen(false);
            }, 200);
            return () => clearTimeout(timer);
        }
    }, [isSkillsHovered]);

    useEffect(() => {
        if (!isToolsHovered) {
            const timer = setTimeout(() => {
                setIsToolsDropdownOpen(false);
            }, 200);
            return () => clearTimeout(timer);
        }
    }, [isToolsHovered]);

    const handleLinkClick = () => {
        if (isMobile) {
            setIsMenuOpen(false);
        }
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <header className="bg-white text-[#344697] p-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
            <div>
                <Link to="/">
                    <img src={logo} alt="Com Conseil" className="h-10 lg:h-20" />
                </Link>
            </div>
            <div className="lg:hidden">
                <button onClick={handleMenuToggle} className="focus:outline-none z-50">
                    {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                </button>
            </div>
            <nav className={`lg:flex lg:items-center lg:space-x-12 ${isMenuOpen ? 'fixed top-0 right-0 bg-white bg-opacity-95 z-40 flex flex-col items-center space-y-4 p-4 shadow-lg mt-16 w-full h-full' : 'hidden lg:flex'}`}>
                <Link to="/" className="flex items-center text-lg hover:text-[#208DB2] duration-200" onClick={handleLinkClick}>
                    <FaHome className="mr-2" />Accueil
                </Link>
                <Link to="/about" className="flex items-center text-lg hover:text-[#208DB2] duration-200" onClick={handleLinkClick}>
                    <FaHeart className="mr-2" />Notre ADN
                </Link>
                <div
                    className="relative flex items-center text-lg hover:text-[#208DB2] duration-200"
                    onMouseEnter={() => {
                        setIsSkillsDropdownOpen(true);
                        setIsSkillsHovered(true);
                    }}
                    onMouseLeave={() => setIsSkillsHovered(false)}
                >
                    <Link to="/skills" className="flex items-center">
                        <FaStar className="mr-2" />Nos Compétences
                    </Link>
                    {isSkillsDropdownOpen && !isMobile && (
                        <div
                            className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-lg z-30"
                            onMouseEnter={() => setIsSkillsHovered(true)}
                            onMouseLeave={() => setIsSkillsHovered(false)}
                        >
                            {skills.map(skill => (
                                <Link
                                    key={skill.id}
                                    to={`/skill/${skill.id}`}
                                    className="block px-4 py-2 text-[#344697] hover:bg-blue-100"
                                    onClick={handleLinkClick}
                                >
                                    {skill.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
                <div
                    className="relative flex items-center text-lg hover:text-[#208DB2] duration-200"
                    onMouseEnter={() => {
                        setIsToolsDropdownOpen(true);
                        setIsToolsHovered(true);
                    }}
                    onMouseLeave={() => setIsToolsHovered(false)}
                >
                    <Link to="/tools" className="flex items-center">
                        <FaTools className="mr-2" />Outils
                    </Link>
                    {isToolsDropdownOpen && !isMobile && (
                        <div
                            className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-lg z-30"
                            onMouseEnter={() => setIsToolsHovered(true)}
                            onMouseLeave={() => setIsToolsHovered(false)}
                        >
                            <Link
                                to="/simulators"
                                className="block px-4 py-2 text-[#344697] hover:bg-blue-100"
                                onClick={handleLinkClick}
                            >
                                Simulateurs
                            </Link>
                            <Link
                                to="/scheduler"
                                className="block px-4 py-2 text-[#344697] hover:bg-blue-100"
                                onClick={handleLinkClick}
                            >
                                Échéancier
                            </Link>
                            <Link
                                to="/useful-links"
                                className="block px-4 py-2 text-[#344697] hover:bg-blue-100"
                                onClick={handleLinkClick}
                            >
                                Liens Utiles
                            </Link>
                        </div>
                    )}
                </div>
                <Link to="/contact" className="flex items-center text-lg hover:text-[#208DB2] duration-200" onClick={handleLinkClick}>
                    <FaEnvelope className="mr-2" />Contact
                </Link>
                <Link to="/login" className="flex items-center text-white text-lg bg-[#344697] px-4 py-2 rounded-xl hover:bg-[#208DB2] duration-200" onClick={handleLinkClick}>
                    <FaUser className="mr-2" />Espace Client
                </Link>
            </nav>
        </header>
    );
};

export default Header;
