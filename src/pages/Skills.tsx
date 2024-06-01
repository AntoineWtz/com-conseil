import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Skill } from '../types';

const skills: Skill[] = [
    { id: 1, name: 'Comptabilité', description: 'Gestion comptable et financière' },
    { id: 2, name: 'Conseil fiscal', description: 'Optimisation fiscale et conseils' },
    // Ajouter d'autres compétences
];

const Skills: React.FC = () => {
    return (
        <MainLayout>
            <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Nos Compétences</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skills.map(skill => (
                        <div key={skill.id} className="border p-4 rounded shadow-md">
                            <h3 className="mt-2 text-xl font-bold">{skill.name}</h3>
                            <p className="mt-1 text-gray-600">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </MainLayout>
    );
};

export default Skills;
