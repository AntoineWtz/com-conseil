import React from 'react';
import { Link } from 'react-router-dom';

const MainLayout: React.FC = ({ children }) => {
    return (
        <div>
            <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
                <div className="logo">
                    <Link to="/">Logo</Link>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/tools">Tools</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <main className="p-4">
                {children}
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                &copy; 2024 My Accounting Firm
            </footer>
        </div>
    );
};

export default MainLayout;
