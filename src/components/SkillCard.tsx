import React from 'react';

interface SkillCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="max-w-52 rounded-xl bg-blue-100 overflow-hidden shadow-lg m-4">
            <img className="w-full h-40 object-cover hover:scale-105 duration-300" src={imageUrl} alt={title} />
            <div className="px-4 py-4">
                <div className="font-bold text-[#344697] text-xl text-center">{title}</div>
            </div>
        </div>
    );
};

export default SkillCard;
