import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Login: React.FC = () => {
    return (
        <MainLayout>
            <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Espace Client</h2>
                <form className="grid grid-cols-1 gap-4">
                    <input type="text" placeholder="Nom d'utilisateur" className="border p-2 rounded" />
                    <input type="password" placeholder="Mot de passe" className="border p-2 rounded" />
                    <button type="submit" className="bg-[#208DB2] hover:bg-[#344697] text-white p-2 rounded duration-200">Se connecter</button>
                </form>
            </section>
        </MainLayout>
    );
};

export default Login;
