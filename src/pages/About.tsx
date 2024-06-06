import React from 'react';
import MainLayout from '../layouts/MainLayout';
import logo2 from '../assets/images/com_conseil_logo2.jpg';
import logo3 from '../assets/images/com_conseil_logo3.jpg';

const About: React.FC = () => {
    return (
        <MainLayout>
            <section className="mt-12 px-4">
                <h2 className="text-4xl font-cardo text-[#344697] font-bold text-center">Notre ADN</h2>
                <div className='flex flex-col lg:flex-row justify-evenly items-center'>
                    <p className='mt-12 text-justify lg:text-lg lg:w-1/2  lg:text-left'>
                        « Notre souhait est de créer le cabinet de demain et d’apporter une qualité de services et une réactivité accrues à vos besoins.<br /><br />
                        En accord avec nos valeurs Proximité, Partage et Esprit d’équipe.<br /><br />
                        Pour cela notre équipe est dotée de toutes les nouvelles technologies et logiciels mis à la disposition de notre profession afin de dématérialiser l’intégralité de vos dossiers. Cette organisation nous permet d’être au plus près de la gestion au quotidien de votre entreprise.<br /><br />
                        Pour C&C Com’Conseil, vous êtes un client unique que l’on souhaite accompagner et conseiller dans les moments importants de votre entreprise et/ou de votre vie en prenant le temps de vous écouter. »
                    </p>
                    <img src={logo2} alt="logo2" className="lg:h-64 lg:m-12 h-0" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-cardo text-[#344697] font-bold mt-12 mb-12 lg:m-20 text-center">Mise à disposition d'une plateforme collaborative</h3>
                <div className="relative pt-[40%] h-0">
                    <iframe
                        className="absolute top-0 left-0 w-full lg:h-full aspect-video rounded-xl"
                        src="https://www.youtube.com/embed/TX1CGuaR-MY?si=U8BnAvmanA8uks3m"
                        title="C&C Com' Conseil - Plateforme Collaborative"
                        allow="encrypted-media; web-share">
                    </iframe>
                </div>
                <div className='mt-24'>
                    <p className="text-2xl lg:text-3xl font-cardo text-[#344697] font-bold lg:m-20 text-center mb-12">L'équipe C&C Com' Conseil</p>
                    <div className="flex flex-col md:flex-row justify-evenly items-center">
                        <div className='flex flex-col items-center bg-blue-100 text-center text-blue-800 p-6 rounded-lg shadow-md mb-12'>
                            <img src={logo3} alt="logo" className="w-60 h-60 rounded" />
                            <h3 className='font-bold m-2'>Claudia PATRICIO PIRES</h3>
                            <p>Expert-comptable</p>
                        </div>
                        <div className='flex flex-col items-center bg-blue-100 text-center text-blue-800 p-6 rounded-lg shadow-md mb-12'>
                            <img src={logo2} alt="logo" className="w-60 h-60 rounded" />
                            <h3 className='font-bold m-2'>Cyril Herbillon</h3>
                            <p>Directeur de Mission</p>
                        </div>
                        <div className='flex flex-col items-center bg-blue-100 text-center text-blue-800 p-6 rounded-lg shadow-md mb-12'>
                            <img src={logo3} alt="logo" className="w-60 h-60 rounded" />
                            <h3 className='font-bold m-2'>Romain JOUAULT</h3>
                            <p>Assistant Comptable</p>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default About;
