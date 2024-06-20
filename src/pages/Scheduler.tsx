import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Scheduler: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    const handleDateChange: CalendarProps['onChange'] = (value) => {
        if (value instanceof Date) {
            setSelectedDate(value);
        } else if (Array.isArray(value) && value.length > 0 && value[0] instanceof Date) {
            setSelectedDate(value[0]);
        } else {
            setSelectedDate(null);
        }
    };

    return (
        <MainLayout>
            <div className="mt-8">
                <h1 className="text-3xl font-cardo text-[#344697] font-bold mb-4 text-center">Echéancier</h1>
                <div className="flex flex-col items-center">
                    <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                        className="w-full max-w-lg p-4 bg-white rounded-lg shadow-md"
                        tileClassName={({ date, view }) =>
                            view === 'month' && date.getDay() === 0 ? 'bg-red-500 text-white' : ''
                        }
                    />
                    {selectedDate && (
                        <p className="text-lg text-[#344697] font-bold mt-4">
                            {selectedDate.toLocaleDateString('fr-FR', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>
                    )}
                </div>
            </div>
        </MainLayout>
    );
};

export default Scheduler;
