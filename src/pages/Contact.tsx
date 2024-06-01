import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
    return (
        <MainLayout>
            <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Contact</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Cards des employés */}
                    <div className="border p-4 rounded shadow-md">
                        <img src="https://via.placeholder.com/150" alt="Employé 1" className="w-full h-48 object-cover" />
                        <h3 className="mt-2 text-xl font-bold">Employé 1</h3>
                        <p className="mt-1 text-gray-600">Titre du poste</p>
                        <p className="mt-1 text-gray-600">Email: email1@example.com</p>
                        <p className="mt-1 text-gray-600">Téléphone: +33 1 23 45 67 89</p>
                    </div>
                    <div className="border p-4 rounded shadow-md">
                        <img src="https://via.placeholder.com/150" alt="Employé 2" className="w-full h-48 object-cover" />
                        <h3 className="mt-2 text-xl font-bold">Employé 2</h3>
                        <p className="mt-1 text-gray-600">Titre du poste</p>
                        <p className="mt-1 text-gray-600">Email: email2@example.com</p>
                        <p className="mt-1 text-gray-600">Téléphone: +33 1 23 45 67 89</p>
                    </div>
                    <div className="border p-4 rounded shadow-md">
                        <img src="https://via.placeholder.com/150" alt="Employé 3" className="w-full h-48 object-cover" />
                        <h3 className="mt-2 text-xl font-bold">Employé 3</h3>
                        <p className="mt-1 text-gray-600">Titre du poste</p>
                        <p className="mt-1 text-gray-600">Email: email3@example.com</p>
                        <p className="mt-1 text-gray-600">Téléphone: +33 1 23 45 67 89</p>
                    </div>
                </div>
            </section>
            <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Nos Bureaux</h2>
                <div className="carousel-container overflow-hidden relative">
                    <div className="carousel flex">
                        <div className="min-w-full">
                            <img src="https://via.placeholder.com/1200x400" alt="Bureau 1" />
                        </div>
                        <div className="min-w-full">
                            <img src="https://via.placeholder.com/1200x400" alt="Bureau 2" />
                        </div>
                        <div className="min-w-full">
                            <img src="https://via.placeholder.com/1200x400" alt="Bureau 3" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Adresses</h2>
                <p>Siège social : 123 Rue Principale, 75001 Paris, France</p>
                <p>Bureau secondaire : 456 Rue Secondaire, 69002 Lyon, France</p>
            </section>
            <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Formulaire de Contact</h2>
                <ContactForm />
            </section>
        </MainLayout>
    );
};

export default Contact;
