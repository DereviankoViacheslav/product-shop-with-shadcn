import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login',
    description: 'Login page',
};

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main>{children}</main>;
}
