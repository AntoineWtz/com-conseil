import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { getLinks } from '../services/linkService';
import { Link } from '../types';

const UsefulLinks: React.FC = () => {
    const links = getLinks();
    const categories = Object.keys(links);
    const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

    return (
        <MainLayout>
            <section className="mt-8">
                <h2 className="text-3xl font-cardo text-[#344697] font-bold mb-4 text-center">Sites Utiles</h2>
                <div className="flex justify-center mb-8">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 mx-2 border-b-2 ${activeCategory === category ? 'border-[#344697] text-[#344697] font-bold' : 'border-transparent'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="w-3/4 mx-auto">
                    {links[activeCategory].map((link: Link, index: number) => (
                        <div key={index} className="border p-4 rounded shadow-md mb-4">
                            <img src={link.image} alt={link.name} className="fit-content" />
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-lg font-semibold">
                                {link.name}
                            </a>
                            <p className="mt-2">{link.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </MainLayout>
    );
};

export default UsefulLinks;
