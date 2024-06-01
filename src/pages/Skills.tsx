import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SkillCard from '../components/SkillCard';

const Skills: React.FC = () => {
    return (
        <MainLayout>
            <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Nos Compétences</h2>
                <p>Voici quelques-unes de nos compétences...</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <SkillCard title="Compétence 1" description="Description de la compétence 1" imageUrl="url1.jpg" />
                    <SkillCard title="Compétence 2" description="Description de la compétence 2" imageUrl="url2.jpg" />
                    <SkillCard title="Compétence 3" description="Description de la compétence 3" imageUrl="url3.jpg" />
                    <SkillCard title="Compétence 4" description="Description de la compétence 4" imageUrl="url4.jpg" />
                    <SkillCard title="Compétence 5" description="Description de la compétence 5" imageUrl="url5.jpg" />
                    <SkillCard title="Compétence 6" description="Description de la compétence 6" imageUrl="url6.jpg" />
                </div>
            </section>
        </MainLayout>
    );
};

export default Skills;
