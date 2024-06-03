import React from 'react';
import MainLayout from '../layouts/MainLayout';
import logo2 from '../assets/images/com_conseil_logo2.jpg';
import logo3 from '../assets/images/com_conseil_logo3.jpg';

const About: React.FC = () => {
    return (
        <MainLayout>
            <section className="mt-8">
                <h2 className="text-4xl text-[#344697] font-bold mb-4">Notre ADN</h2>
                <div className='flex'>
                    <p className='mt-12 text-lg'>« Notre souhait est de créer le cabinet de demain  et d’apporter une qualité de services et une réactivité accrues à vos besoins.<br /><br />
                        En accord avec nos valeurs Proximité, Partage et Esprit d’équipe.<br /><br />
                        Pour cela notre équipe est dotée de toutes les nouvelles technologies et logiciels mis à la disposition de notre profession afin de dématérialiser l’intégralité de vos dossiers. Cette organisation nous permet d’être au plus près de la  gestion au quotidien de votre entreprise.<br /><br />
                        Pour C&C Com’Conseil, vous êtes un client unique que l’on souhaite accompagner  et conseiller dans les moments importants de votre entreprise et/ ou de votre vie en prenant le temps de vous écouter »
                    </p>
                    <img src={logo2} alt="logo2" className="h-64 m-12" />
                </div>
                <h3 className="text-3xl text-[#344697] font-bold mt-4">Les avantages C&C Com' Conseil : la mise à disposition d'une plateforme collaborative aux clients</h3>
                <div>
                    <p className='mt-12 mb-4 text-2xl text-[#344697]'>Mise à disposition d’un plateforme collaborative aux clients</p>
                    <iframe className="w-full" width="560" height="315" src="https://www.youtube.com/embed/TX1CGuaR-MY?si=U8BnAvmanA8uks3m" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>
                <div>
                    <p className='mt-12 text-2xl text-[#344697]'> L'équipe C&C Com' Conseil</p>
                    <div>
                        <div className="flex flex-row justify-evenly items-center mt-8">
                            <div className='flex flex-col items-center bg-blue-100 text-center text-blue-800 p-6 rounded-lg shadow-md'>
                                <img src={logo3} alt="logo" className="w-60 h-60 rounded" />
                                <h3 className='font-bold m-2'>Claudia PATRICIO PIRES</h3>
                                <p>Expert-comptable</p>
                            </div>
                            <div className='flex flex-col items-center bg-blue-100 text-center text-blue-800 p-6 rounded-lg shadow-md'>
                                <img src={logo2} alt="logo" className="w-60 h-60 rounded" />
                                <h3 className='font-bold m-2'>Patrice DURAND</h3>
                                <p>Directeur de Mission</p>
                            </div>
                            <div className='flex flex-col items-center bg-blue-100 text-center text-blue-800 p-6 rounded-lg shadow-md'>
                                <img src={logo3} alt="logo" className="w-60 h-60 rounded" />
                                <h3 className='font-bold m-2'>Romain JOUAULT</h3>
                                <p>Assistant Comptable</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default About;
