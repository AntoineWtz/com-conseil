import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSkills } from '../services/skillService';
import { Skill } from '../types';
import MainLayout from '../layouts/MainLayout';

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
            <div className="flex flex-col items-center mt-8">
                <h2 className="text-4xl font-bold text-[#344697] mb-4">{skill.name}</h2>
                <img className="w-full h-64 object-cover mb-4" src={skill.imageUri} alt={skill.name} />
                <p className="text-lg text-center">{skill.description}</p>
            </div>
        </MainLayout>
    );
};

export default SkillDetail;
