import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
const inter = Inter({
subsets: ['latin'],
variable: '--font-inter'
});
const playfair = Playfair_Display({
subsets: ['latin'],
variable: '--font-playfair'
});
export const metadata: Metadata = {
title: 'La Siesta | Experience Excellence',
description: 'Premium coffee experiences crafted to perfection',
icons: {
    icon: '/coffee/image.png',
    }
};
export default function RootLayout({

children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en" className={`${inter.variable} ${playfair.variable}`}>
<body>{children}</body>
</html>
);
}
