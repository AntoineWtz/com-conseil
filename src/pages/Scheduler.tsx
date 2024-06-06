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
            <div className="container mx-auto py-4">
                <h1 className="text-2xl font-bold mb-4">Scheduler</h1>
                <div className="flex flex-col items-center">
                    <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                        className="mb-4"
                    />
                    {selectedDate && (
                        <p className="text-lg">
                            Selected Date: {selectedDate.toLocaleDateString()}
                        </p>
                    )}
                </div>
            </div>
        </MainLayout>
    );
};

export default Scheduler;
