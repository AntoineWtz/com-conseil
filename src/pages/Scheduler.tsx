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
                        className="m-4 w-full shadow-lg p-4 rounded-lg"
                    />
                    {selectedDate && (
                        <p className="text-xl text-[#344697] font-bold">
                            {selectedDate.toLocaleDateString()}
                        </p>
                    )}
                </div>
            </div>
        </MainLayout>
    );
};

export default Scheduler;
