import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Tools from '../pages/Tools';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Simulators from '../pages/Simulators';
import Scheduler from '../pages/Scheduler';
import UsefulLinks from '../pages/UsefulLinks';
import SkillDetail from '../pages/SkillDetail';

import CapitalEmprunte from '../pages/simulators/CapitalEmprunte';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/simulators" element={<Simulators />} />
                <Route path="/simulator/5" element={<CapitalEmprunte />} />
                <Route path="/scheduler" element={<Scheduler />} />
                <Route path="/useful-links" element={<UsefulLinks />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/skill/:skillId" element={<SkillDetail />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
