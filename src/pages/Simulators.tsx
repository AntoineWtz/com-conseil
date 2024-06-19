import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { getSimulators, getCategories } from '../services/simulatorService';
import { Simulator } from '../types';
import SimulatorCard from '../components/SimulatorCard';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTh, FaMoneyBillWave, FaChartBar, FaCreditCard, FaCalendarAlt, FaWrench } from 'react-icons/fa';

const Simulators: React.FC = () => {
    const [simulators, setSimulators] = useState<Simulator[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>('Tous');

    useEffect(() => {
        Promise.all([getSimulators(), getCategories()]).then(([simulatorData, categoryData]) => {
            setSimulators(simulatorData);
            setCategories(['Tous', ...categoryData]);
            setLoading(false);
        });
    }, []);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
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
                <div className="flex justify-center mb-8">
                    {categories.map(category => (
                        <motion.button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-4 py-2 mx-2 border-b-2 ${selectedCategory === category ? 'border-[#344697] text-[#344697] font-bold' : 'border-transparent text-gray-500'}`}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className={`text-sm lg:text-base cursor-pointer rounded-full flex items-center space-x-2`}>
                                {categoryIcons[category]}
                                <span>{category}</span>
                            </div>
                        </motion.button>
                    ))}
                </div>
                <div className="w-11/12 md:w-4/5 mx-auto">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={selectedCategory}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.2 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full sm:w-3/4 mx-auto"
                        >
                            {filteredSimulators.map(simulator => (
                                <motion.div
                                    key={simulator.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <SimulatorCard key={simulator.id} simulator={simulator} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </MainLayout>
    );
};

export default Simulators;
