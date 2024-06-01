import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Skill } from '../types';

const skills: Skill[] = [
    { id: 1, name: 'Comptabilité', description: 'Gestion comptable et financière' },
    { id: 2, name: 'Conseil fiscal', description: 'Optimisation fiscale et conseils' },
    { id: 3, name: 'Audit', description: 'Audit des comptes et des processus' },
    { id: 4, name: 'Gestion', description: 'Gestion des ressources humaines' },
    { id: 5, name: 'Conseil juridique', description: 'Conseils juridiques et contentieux' },
    { id: 6, name: 'Conseil en gestion', description: 'Conseils en gestion et en organisation' },
    { id: 7, name: 'Conseil en investissement', description: 'Conseils en investissement et en financement' },
    { id: 8, name: 'Conseil en stratégie', description: 'Conseils en stratégie et en développement' },
    { id: 9, name: 'Conseil en marketing', description: 'Conseils en marketing et en communication' },
    { id: 10, name: 'Conseil en informatique', description: 'Conseils en informatique et en digitalisation' },
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
