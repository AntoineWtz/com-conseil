import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Carousel from '../components/Carousel';
import logo2 from '../assets/images/com_conseil_logo2.jpg';
import ContactForm from '../components/ContactForm';
import SkillCard from '../components/SkillCard';
import { getSkills } from '../services/skillService';
import { Skill } from '../types';

const Home: React.FC = () => {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [loadingSkills, setLoadingSkills] = useState<boolean>(true);

    useEffect(() => {
        getSkills().then(data => {
            setSkills(data);
            setLoadingSkills(false);
        });
    }, []);

    return (
        <MainLayout>
            <Carousel />
            <section className="lg:mt-8 mb-8 flex flex-col items-center">
                <h2 className="text-2xl lg:text-4xl font-cardo text-[#344697] font-bold text-center">Bienvenue chez C&C Com'Conseil</h2>
                <div className="flex flex-col lg:flex-row justify-evenly items-center m-8">
                    <p className="lg:mt-12 lg:text-xl lg:w-1/2 text-justify lg:text-left">
                        Le cabinet C&C Com' Conseil est une société d'expertise comptable implantée à Milly la Forêt, dans l'Essonne en région île de France. Nous sommes inscrits à l'ordre des experts comptables.<br /><br />
                        Le cabinet est administré par Claudia Patricio Pires et Cyril Herbillon, accompagnés par une équipe de collaborateurs à votre écoute pour vous conseiller, vous développer et vous organiser en matière comptable, fiscale, juridique et sociale.<br /><br />
                        La priorité de notre cabinet : être au plus proche de vous et vos attentes dans les missions que vous nous confirez !<br /><br />
                        À très vite chez C&C Com' Conseil !
                    </p>
                    <img src={logo2} alt="Com Conseil" className="lg:h-64 m-4 h-24" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-cardo text-[#344697] font-bold mb-4 text-center">Découvrez nos compétences</h3>
                <div className="flex flex-wrap justify-center gap-4 p-4">
                    {loadingSkills ? (
                        <p>Chargement des compétences...</p>
                    ) : (
                        skills.map(skill => (
                            <SkillCard
                                key={skill.id}
                                id={skill.id}
                                title={skill.name}
                                description={skill.description}
                                imageUrl={skill.imageUri || ''}
                            />
                        ))
                    )}
                </div>
                <h3 className="text-2xl lg:text-3xl font-cardo text-[#344697] font-bold mt-20 text-center">Nous contacter</h3>
                <div className='m-4'>
                    <ContactForm />
                </div>
            </section>
        </MainLayout>
    );
};

export default Home;
