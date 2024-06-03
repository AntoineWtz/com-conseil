import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import SkillCard from '../components/SkillCard';
import { getSkills } from '../services/skillService';
import { Skill } from '../types';


const Skills: React.FC = () => {

    const [skills, setSkills] = React.useState<Skill[]>([]);
    const [loadingSkills, setLoadingSkills] = React.useState<boolean>(true);

    useEffect(() => {
        getSkills().then(data => {
            setSkills(data);
            setLoadingSkills(false);
        });
    }, []);

    return (
        <MainLayout>
            <section className="mt-8">
                <h2 className="text-4xl text-[#344697] font-bold m-8 text-center">Nos Compétences</h2>
                <p className='m-12 text-xl text-center'>Nos équipes vous accompagnent dans de nombreux domaines d'expertise. Nos compétences variées vous permettent d'avoir un interlocuteur unique, engagé à vos côtés.</p>
                <div className="flex justify-evenly gap-4 p-8">
                    {loadingSkills ? (
                        <p>Chargement des compétences...</p>
                    ) : (
                        skills.map(skill => (
                            <SkillCard
                                key={skill.id}
                                title={skill.name}
                                description={skill.description}
                                imageUrl={skill.imageUri || ''}
                            />
                        ))
                    )}
                </div>
            </section>
        </MainLayout>
    );
};

export default Skills;
