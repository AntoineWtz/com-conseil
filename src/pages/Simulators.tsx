import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { getSimulators, getCategories } from '../services/simulatorService';
import { Simulator } from '../types';
import SimulatorCard from '../components/SimulatorCard';

const Simulators: React.FC = () => {
    const [simulators, setSimulators] = useState<Simulator[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    useEffect(() => {
        Promise.all([getSimulators(), getCategories()]).then(([simulatorData, categoryData]) => {
            setSimulators(simulatorData);
            setCategories(categoryData);
            setLoading(false);
        });
    }, []);

    const filteredSimulators = selectedCategory
        ? simulators.filter(sim => sim.category === selectedCategory)
        : simulators;

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
                <h2 className="text-3xl font-bold mb-4 text-center">Nos Simulateurs</h2>
                <nav className="flex justify-center mb-8">
                    <ul className="flex space-x-4">
                        {categories.map(category => (
                            <li
                                key={category}
                                className={`cursor-pointer px-4 py-2 rounded ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredSimulators.map(simulator => (
                        <SimulatorCard key={simulator.id} simulator={simulator} />
                    ))}
                </div>
            </section>
        </MainLayout>
    );
};

export default Simulators;
