import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Carousel from '../components/Carousel';
import logo2 from '../assets/images/com_conseil_logo2.jpg';
import ContactForm from '../components/ContactForm';
import Skills from './Skills';

const Home: React.FC = () => {
    return (
        <MainLayout>
            <Carousel />
            <section className="mt-8">
                <h2 className="text-4xl text-[#344697] font-bold mb-4">Bienvenue chez C&C Com'Conseil</h2>
                <div className='flex'>
                    <p className='mt-12 text-lg'>Le cabinet C&C Com' Conseil est une société d'expertise comptable implantée à Milly la Forêt, dans l'Essonne en région île de France. Nous sommes inscrits à l'ordre des experts comptables.<br /><br />
                        Le cabinet est administré par Claudia Patricio Pires et Cyril Herbillon, accompagnés par une équipe de collaborateurs à votre écoute pour vous conseiller, vous développer et vous organiser en matière comptable, fiscale, juridique et sociale.<br /><br />
                        La priorité de notre cabinet : être au plus proche de vous et vos attentes dans les missions que vous nous confirez !<br /><br />
                        À très vite chez C&C Com' Conseil !</p>
                    <img src={logo2} alt="Com Conseil" className="h-64 m-12" />
                </div>
                <h3 className="text-3xl text-[#344697] font-bold mb-4">Découvrez nos compétences</h3>
                {/* pour chaque Skills[] enregistrés afficher le titre et l'image sous le format SkillCard */}

                <h3 className="text-3xl text-[#344697] font-bold mb-4">Les actualités C&C</h3>
                {/* Appel des objets Article[] sous format cards */}

                <h3 className="text-3xl text-[#344697] font-bold mb-4">Nous contacter</h3>
                <ContactForm />
            </section>
        </MainLayout>
    );
};

export default Home;
