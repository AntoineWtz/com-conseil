import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Contact: React.FC = () => {
    return (
        <MainLayout>
            <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Contact</h2>
                <form className="grid grid-cols-1 gap-4">
                    <input type="text" placeholder="Nom" className="border p-2 rounded" />
                    <input type="email" placeholder="Email" className="border p-2 rounded" />
                    <textarea placeholder="Message" className="border p-2 rounded"></textarea>
                    <button type="submit" className="bg-[#344697] text-white p-2 rounded">Envoyer</button>
                </form>
            </section>
        </MainLayout>
    );
};

export default Contact;
