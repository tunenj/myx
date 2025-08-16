"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";

export default function TopBar() {
    const [showDateInput, setShowDateInput] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<string>(
        new Date().toISOString().split("T")[0]
    );

    const icons: string[] = [
        "/icons/Vector.png",
        "/icons/Budgeting.png",
        "/icons/calendar.png",
        "/icons/message-notif.png",
        "/icons/Profile.png",
    ];

    const handleCalendarClick = (): void => {
        setShowDateInput(true);
    };

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setSelectedDate(e.target.value);
        setShowDateInput(false); // close modal after selecting
    };

    return (
        <header className="bg-black text-white flex items-center justify-between w-full h-[82px]">
            {/* Logo Section */}
            <div className="flex items-center mx-[28px]">
                <Image
                    src="/icons/Myxellia.png"
                    alt="Company Logo"
                    width={153.23}
                    height={26}
                    priority
                />
            </div>

            {/* Icons Section */}
            <div className="flex items-center gap-6 mx-[28px]">
                {icons.map((icon, index) => (
                    <div
                        key={index}
                        className="cursor-pointer hover:opacity-80"
                        onClick={index === 2 ? handleCalendarClick : undefined}
                    >
                        <Image
                            src={icon}
                            alt={`icon-${index}`}
                            width={32}
                            height={32}
                        />
                    </div>
                ))}
            </div>

            {/* Calendar Modal */}
            {showDateInput && (
                <div className="fixed inset-0 bg-black/50 top-20 flex justify-end items-start p-4 z-50">
                    <div className="bg-white w-80 rounded-2xl p-4 shadow-lg animate-slide-up">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-lg font-semibold text-black">Select Date</h2>
                            <button
                                onClick={() => setShowDateInput(false)}
                                className="text-gray-600 hover:text-black"
                            >
                                ✕
                            </button>
                        </div>
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                        />
                    </div>
                </div>
            )}
        </header>
    );
}
