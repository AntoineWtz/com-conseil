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
            <section className="mt-12">
                <h2 className="text-3xl font-bold font-cardo text-[#344697] text-center">Contactez nos experts</h2>
                <div className='mt-12'>
                    <div className="lg:flex lg:justify-evenly items-center">
                        <div className='flex flex-col items-center bg-blue-50 text-center text-[#344697] p-2 lg:p-6 rounded-lg shadow-md m-8'>
                            <img src={logo3} alt="logo" className="w-60 lg:h-60 rounded h-0" />
                            <h3 className='font-bold m-2'>Claudia PATRICIO PIRES</h3>
                            <div>
                                <FaPhone className="inline-block mr-2" />
                                <a href="tel:+330184180980">01 84 18 09 80</a>
                            </div>
                            <div>
                                <FaEnvelope className="inline-block mr-2" />
                                <a href="mailto:c.patriciopires@cccomconseil.com" className="hover:underline">c.patriciopires@cccomconseil.com</a>
                            </div>
                        </div>
                        <div className='flex flex-col items-center bg-blue-50 text-center text-[#344697] p-2 lg:p-6 rounded-lg shadow-md m-8'>
                            <img src={logo3} alt="logo" className="w-60 lg:h-60 rounded h-0" />
                            <h3 className='font-bold m-2'>David WIART</h3>
                            <div>
                                <FaPhone className="inline-block mr-2" />
                                <a href="tel:+330184180980">01 84 18 09 80</a>
                            </div>
                            <div>
                                <FaEnvelope className="inline-block mr-2" />
                                <a href="mailto:c.herbillon@cccomconseil.com" className="hover:underline">d.wiart@cccomconseil.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="text-3xl font-bold font-cardo text-[#344697] mt-16 text-center">Nos cabinets</h2>
                <div className='flex flex-col items-center lg:flex-row lg:justify-evenly p-8 text-center'>
                    <div className='bg-white rounded-lg shadow-md p-4 m-4 w-full lg:w-1/3 bg-blue-50'>
                        <img src={cabinet1} alt="cabinet1" className="rounded-lg shadow-md mb-4 w-full h-36 lg:h-64 object-cover" />
                        <h3 className='font-bold text-xl text-[#344697]'>Milly-la-Forêt</h3>
                        <p>7 rue du Camp Romain<br />91490 Milly-la-Forêt</p>
                        <div className="mt-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21192.63725290697!2d2.424946!3d48.3974134!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5ea996eba07e3%3A0xe5e7564e4bdeeb56!2s7%20Rue%20du%20Camp%20Romain%2C%2091490%20Milly-la-For%C3%AAt!5e0!3m2!1sfr!2sfr!4v1717585861032!5m2!1sfr!2sfr"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                title="Google Map Milly-la-Forêt"
                            ></iframe>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg shadow-md p-4 m-4 w-full lg:w-1/3 bg-blue-50'>
                        <img src={cabinet2} alt="cabinet2" className="rounded-lg shadow-md mb-4 w-full h-36 lg:h-64 object-cover" />
                        <h3 className='font-bold text-xl text-[#344697]'>Evry</h3>
                        <p>10 allée des Champs Elysées<br />91000 Evry</p>
                        <div className="mt-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.103412918593!2d2.421166676891722!3d48.62700311696164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5de10e44ae435%3A0x14f6d77546beae4b!2s10%20All.%20des%20Champs%20Elys%C3%A9es%2C%2091080%20%C3%89vry-Courcouronnes!5e0!3m2!1sfr!2sfr!4v1717585949366!5m2!1sfr!2sfr"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                title="Google Map Evry"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <h2 className="text-3xl font-bold font-cardo text-[#344697] mt-8 text-center">Formulaire</h2>
                <div className='m-4'>
                    <ContactForm />
                </div>
            </section>
        </MainLayout>
    );
};

export default Contact;
