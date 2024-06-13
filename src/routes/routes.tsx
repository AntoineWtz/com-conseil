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

import RendementVersementsConstants from '../pages/simulators/RendementVersementsConstants';
import RendementCapital from '../pages/simulators/RendementCapital';
import ValeurVersements from '../pages/simulators/ValeurVersements';
import ValeurCapital from '../pages/simulators/ValeurCapital';

import CapitalEmprunte from '../pages/simulators/CapitalEmprunte';
import CalculDuree from '../pages/simulators/CalculDuree';
import CalculVersementPeriodique from '../pages/simulators/CalculVersementPeriodique';
import CalculTaux from '../pages/simulators/CalculTaux';

import CalculLoyers from '../pages/simulators/CalculLoyers';
import CalculCreditBailTaux from '../pages/simulators/CalculCreditBailTaux';
import CalculCreditBailDuree from '../pages/simulators/CalculCreditBailDuree';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/simulators" element={<Simulators />} />

                <Route path="/simulator/1" element={<RendementVersementsConstants />} />
                <Route path="/simulator/2" element={<RendementCapital />} />
                <Route path="/simulator/3" element={<ValeurVersements />} />
                <Route path="/simulator/4" element={<ValeurCapital />} />

                <Route path="/simulator/5" element={<CapitalEmprunte />} />
                <Route path="/simulator/6" element={<CalculDuree />} />
                <Route path="/simulator/7" element={<CalculVersementPeriodique />} />
                <Route path="/simulator/8" element={<CalculTaux />} />

                <Route path="/simulator/9" element={<CalculLoyers />} />
                <Route path="/simulator/10" element={<CalculCreditBailTaux />} />
                <Route path="/simulator/11" element={<CalculCreditBailDuree />} />

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
