import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import News from '../pages/News';
import Tools from '../pages/Tools';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import SkillDetail from '../pages/SkillDetail';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/news" element={<News />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/skill/:skillId" element={<SkillDetail />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
