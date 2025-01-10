import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
    title: "Phrase Generator Challenge",
    description: "Sebastián Osorno Castrillón",
};

const poppins = Poppins({ subsets: ["latin"], weight: "500" })

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={poppins.className}
            >
                {children}
            </body>
        </html>
    );
}
