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
        <div>
            <h1>Hola</h1>
            <button onClick={handlePhrase}>Search</button>
            <p>{phrase}</p>
        </div>
    );
}
