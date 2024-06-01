import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Tools: React.FC = () => {
    return (
        <MainLayout>
            <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Outils Utiles</h2>
                <ul className="list-disc pl-6">
                    <li>Simulateur de placement</li>
                    <li>Calculateur d'emprunt</li>
                    <li>Calculateur de crédit</li>
                    <li>Calculateur de congés payés</li>
                    {/* Ajouter plus d'outils */}
                </ul>
            </section>
            <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">FAQ</h2>
                {/* Ajouter la FAQ */}
            </section>
            <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Sites Recommandés</h2>
                <ul className="list-disc pl-6">
                    <li><a href="url" className="text-blue-500 hover:underline">Site 1</a></li>
                    <li><a href="url" className="text-blue-500 hover:underline">Site 2</a></li>
                    {/* Ajouter plus de sites */}
                </ul>
            </section>
            <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Échéancier de Date Comptable</h2>
                {/* Ajouter l'échéancier */}
            </section>
        </MainLayout>
    );
};

export default Tools;
