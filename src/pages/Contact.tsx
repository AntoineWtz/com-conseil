import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
    return (
        <MainLayout>
            <section className="mt-8">
                <ContactForm />
            </section>
        </MainLayout>
    );
};

export default Contact;
