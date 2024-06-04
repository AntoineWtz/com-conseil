import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ContactForm from '../components/ContactForm';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import logo3 from '../assets/images/com_conseil_logo3.jpg';
import cabinet1 from '../assets/images/cabinet1.jpg';
import cabinet2 from '../assets/images/cabinet2.jpg';

const Contact: React.FC = () => {
    return (
        <MainLayout>
            <section className="mt-8 mb-8">
                <h2 className="text-3xl font-bold text-blue-800 text-center">Contactez nos experts</h2>
                <div>
                    <div className="flex flex-row justify-evenly items-center mt-8">
                        <div className='flex flex-col items-center bg-blue-100 text-center text-blue-800 p-6 rounded-lg shadow-md'>
                            <img src={logo3} alt="logo" className="w-60 h-60 rounded" />
                            <h3 className='font-bold m-2'>Claudia PATRICIO PIRES</h3>
                            <div>
                                <FaPhone className="inline-block mr-2" />
                                <a href="tel:+330184180980">01 84 18 09 80</a>
                            </div>
                            <div>
                                <FaEnvelope className="inline-block mr-2" />
                                <a href="mailto:" className="hover:underline">c.patriciopires@cccomconseil.com </a>
                            </div>
                        </div>
                        <div className='flex flex-col items-center bg-blue-100 text-center text-blue-800 p-6 rounded-lg shadow-md'>
                            <img src={logo3} alt="logo" className="w-60 h-60 rounded" />
                            <h3 className='font-bold m-2'>Cyril Herbillon</h3>
                            <div>
                                <FaPhone className="inline-block mr-2" />
                                <a href="tel:+330184180980">01 84 18 09 80</a>
                            </div>
                            <div>
                                <FaEnvelope className="inline-block mr-2" />
                                <a href="mailto:" className="hover:underline">c.herbillon@cccomconseil.com </a>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-blue-800 mt-16 text-center">Cabinets</h2>
                <div>
                    <div className='flex flex-row justify-evenly p-8'>
                        <img src={cabinet1} alt="cabinet1" className="m-4 rounded-lg shadow-md" />
                        <img src={cabinet2} alt="cabinet2" className="m-4 rounded-lg shadow-md" />
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-blue-800 mt-8 text-center">Nous trouver</h2>
                <div>

                </div>
                <h2 className="text-3xl font-bold text-blue-800 mt-8 text-center">Formulaire</h2>
                <ContactForm />
            </section>
        </MainLayout>
    );
};

export default Contact;
