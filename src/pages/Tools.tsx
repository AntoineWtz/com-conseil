import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Tool } from '../types';

const tools: Tool[] = [
    { id: 1, name: 'Calculatrice TVA', description: 'Outil pour calculer la TVA.', link: '#' },
    // Ajouter d'autres outils
];

const Tools: React.FC = () => {
    return (
        <MainLayout>
            <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Nos Outils</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tools.map(tool => (
                        <div key={tool.id} className="border p-4 rounded shadow-md">
                            <h3 className="text-xl font-bold">{tool.name}</h3>
                            <p className="text-gray-600">{tool.description}</p>
                            <a href={tool.link} className="text-blue-500 hover:underline">Voir plus</a>
                        </div>
                    ))}
                </div>
            </section>
        </MainLayout>
    );
};

export default Tools;
