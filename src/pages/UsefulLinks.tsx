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
                <div className="w-11/12 md:w-2/3 mx-auto">
                    {links[activeCategory].map((link: Link, index: number) => (
                        <div key={index} className="flex flex-col md:flex-row items-center border p-4 rounded-lg shadow-md mb-4 transition-transform transform hover:scale-95 duration-300">
                            <img src={link.image} alt={link.name} className='h-36 w-36 object-contain md:mr-4 mb-2 md:mb-0' />
                            <div className="text-center md:text-left">
                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-lg font-semibold">
                                    {link.name}
                                </a>
                                <p className="mt-2">{link.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </MainLayout>
    );
};

export default UsefulLinks;
