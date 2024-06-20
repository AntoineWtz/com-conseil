import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSkills } from '../services/skillService';
import { Skill } from '../types';
import MainLayout from '../layouts/MainLayout';
import ContactForm from '../components/ContactForm';

const SkillDetail: React.FC = () => {
    const { skillId } = useParams<{ skillId: string }>();
    const [skill, setSkill] = useState<Skill | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getSkills().then(data => {
            const foundSkill = data.find(skill => skill.id === parseInt(skillId || '0', 10));
            setSkill(foundSkill || null);
            setLoading(false);
        });
    }, [skillId]);

    if (loading) {
        return (
            <MainLayout>
                <div className="flex justify-center items-center h-screen">
                    <p>Chargement de la compétence...</p>
                </div>
            </MainLayout>
        );
    }

    if (!skill) {
        return (
            <MainLayout>
                <div className="flex justify-center items-center h-screen">
                    <p>Compétence non trouvée.</p>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="flex flex-col items-center mb-8">
                <img className="w-full h-36 lg:h-64 opacity-60 object-cover mb-4" src={skill.imageUri} alt={skill.name} />
                <h2 className="text-2xl lg:text-4xl font-bold text-[#344697] mb-4 text-center">{skill.name}</h2>
                <h3 className="text-xl text-[#208DB2] lg:text-2xl font-semibold mt-4 mb-4 ">Présentation</h3>
                <p className="lg:text-lg text-justify w-2/3">{skill.description}</p>
                <h3 className="text-xl text-[#208DB2] lg:text-2xl font-semibold mt-8 mb-4">Nos missions</h3>
                <ul className="list-disc w-2/3 lg:w-1/3 text-left mx-auto">
                    {skill.missions?.map((mission, index) => (
                        <li key={index} className="lg:text-lg mb-2">{mission}</li>
                    ))}
                </ul>
            </div>
            <h3 className="text-2xl lg:text-3xl font-cardo text-[#344697] font-bold mt-20 text-center">Nous contacter</h3>
            <div className='m-4'>
                <ContactForm />
            </div>
        </MainLayout>

    );
};

export default SkillDetail;
