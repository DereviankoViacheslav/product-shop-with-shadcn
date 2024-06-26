import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-main' });

export const metadata: Metadata = {
    title: 'Product shop - with shadcn',
    description: 'Product shop - with shadcn',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    inter.variable,
                )}
            >
                {children}
            </body>
        </html>
    );
}
