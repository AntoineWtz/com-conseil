import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { getSimulators } from '../services/simulatorService';
import { Simulator } from '../types';
import SimulatorCard from '../components/SimulatorCard';

const Simulators: React.FC = () => {
    const [simulators, setSimulators] = useState<Simulator[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getSimulators().then(data => {
            setSimulators(data);
            setLoading(false);
        });
    }, []);

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {simulators.map(simulator => (
                        <SimulatorCard key={simulator.id} simulator={simulator} />
                    ))}
                </div>
            </section>
        </MainLayout>
    );
};

export default Simulators;
