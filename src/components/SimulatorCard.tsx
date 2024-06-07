import React from 'react';
import { Link } from 'react-router-dom';
import { Simulator } from '../types';
import { getCategoryColor } from '../services/simulatorService';

interface SimulatorCardProps {
    simulator: Simulator;
}

const SimulatorCard: React.FC<SimulatorCardProps> = ({ simulator }) => {
    const bgColor = getCategoryColor(simulator.category);

    return (
        <Link
            to={`/simulator/${simulator.id}`}
            className="group border lg:h-36 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-95 flex flex-col justify-center items-center text-center"
            style={{ backgroundColor: bgColor }}
        >
            <h3 className="lg:text-2xl font-bold mb-2">{simulator.name}</h3>
        </Link>
    );
};

export default SimulatorCard;
