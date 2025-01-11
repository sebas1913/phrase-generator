"use client";

import { useState } from "react";

export default function Home() {
    const [phrase, setPhrase] = useState('');

    const handlePhrase = async () => {
        try {
            const response = await fetch('/api/get');

            if (!response.ok) {
                throw new Error('Failed to fetch');
            }

            const data = await response.json();
            setPhrase(data.phrase);

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#254443] text-gray-800">
            <h1 className="text-4xl font-extrabold mb-6 text-[#56EAAC]">
                Phrase generator challenge
            </h1>
            <div className="flex items-center space-x-4 w-[500px] justify-between">
                <p className="text-base font-normal text-[#56EAAC] truncate">
                    {phrase}
                </p>
                <button
                    onClick={handlePhrase}
                    className="font-bold px-3 py-1 bg-[#56EAAC] text-[#254443] rounded-md text-sm"
                >
                    Buscar
                </button>
            </div>
        </div>
    );
}
