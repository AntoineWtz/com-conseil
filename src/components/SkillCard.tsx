import React from 'react';

interface SkillCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="max-w-sm rounded-xl bg-blue-100 overflow-hidden shadow-lg m-4">
            <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-[#344697] text-xl mb-2">{title}</div>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};

export default SkillCard;
