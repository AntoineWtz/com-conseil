import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSimulatorById } from '../services/simulatorService';
import { Simulator } from '../types';
import MainLayout from '../layouts/MainLayout';

const SimulatorDetail: React.FC = () => {
    const { simulatorId } = useParams<{ simulatorId: string }>();
    const [simulator, setSimulator] = useState<Simulator | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getSimulatorById(parseInt(simulatorId || '0')).then(data => {
            setSimulator(data || null);
            setLoading(false);
        });
    }, [simulatorId]);

    if (loading) {
        return (
            <MainLayout>
                <div className="flex justify-center items-center h-screen">
                    <p>Chargement du simulateur...</p>
                </div>
            </MainLayout>
        );
    }

    if (!simulator) {
        return (
            <MainLayout>
                <div className="flex justify-center items-center h-screen">
                    <p>Simulateur non trouvé.</p>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <section className="mt-8">
                <h2 className="text-3xl font-bold mb-4 text-center">{simulator.name}</h2>
                <div className="flex flex-col items-center">
                    <p className="lg:text-lg text-justify w-2/3">{simulator.description}</p>
                    <h3 className="text-xl text-[#208DB2] lg:text-2xl font-semibold mt-8 mb-2">Formule</h3>
                    <p className="lg:text-lg text-justify w-2/3">{simulator.formula}</p>
                    <h3 className="text-xl text-[#208DB2] lg:text-2xl font-semibold mt-8 mb-2">Exemple</h3>
                    <p className="lg:text-lg text-justify w-2/3">{simulator.example}</p>
                </div>
            </section>
        </MainLayout>
    );
};

export default SimulatorDetail;
