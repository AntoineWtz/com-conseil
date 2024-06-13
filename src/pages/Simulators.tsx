import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { getSimulators, getCategories } from '../services/simulatorService';
import { Simulator } from '../types';
import SimulatorCard from '../components/SimulatorCard';
import { FaTh, FaMoneyBillWave, FaChartBar, FaCreditCard, FaCalendarAlt, FaWrench } from 'react-icons/fa';

const Simulators: React.FC = () => {
    const [simulators, setSimulators] = useState<Simulator[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>('Tous');
    const [fade, setFade] = useState<boolean>(false);

    useEffect(() => {
        Promise.all([getSimulators(), getCategories()]).then(([simulatorData, categoryData]) => {
            setSimulators(simulatorData);
            setCategories(['Tous', ...categoryData]);
            setLoading(false);
        });
    }, []);

    const handleCategoryChange = (category: string) => {
        setFade(true);
        setTimeout(() => {
            setSelectedCategory(category);
            setFade(false);
        }, 300);
    };

    const filteredSimulators = selectedCategory && selectedCategory !== 'Tous'
        ? simulators.filter(sim => sim.category === selectedCategory)
        : simulators;

    const categoryIcons: { [key: string]: JSX.Element } = {
        'Tous': <FaTh />,
        'Placement': <FaMoneyBillWave />,
        'Emprunts': <FaChartBar />,
        'Crédit-Bail': <FaCreditCard />,
        'Congés payés': <FaCalendarAlt />,
        'Autres': <FaWrench />
    };

    if (loading) {
        return (
            <MainLayout>
                <div className="flex justify-center items-center h-screen">
                    <p>Chargement des simulateurs...</p>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <section className="mt-8">
                <h2 className="text-3xl font-cardo text-[#344697] font-bold mb-4 text-center">Nos Simulateurs</h2>
                <nav className="flex flex-wrap justify-center mt-8 mb-8">
                    <ul className="flex flex-wrap justify-center space-x-2">
                        {categories.map(category => (
                            <li
                                key={category}
                                className={`font-bold text-sm lg:text-base cursor-pointer mb-2 px-4 py-2 rounded-full flex items-center space-x-2 ${selectedCategory === category ? 'bg-[#344697] text-white' : ''} text-[#344697] hover:bg-blue-200 transition-colors duration-300`}
                                onClick={() => handleCategoryChange(category)}
                            >
                                {categoryIcons[category]}
                                <span>{category}</span>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full sm:w-3/4 mx-auto transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                    {filteredSimulators.map(simulator => (
                        <SimulatorCard key={simulator.id} simulator={simulator} />
                    ))}
                </div>
            </section>
        </MainLayout>
    );
};

export default Simulators;
