import Link from 'next/link';
import { ReactNode } from 'react';

type DefaultLayoutProps = {
    children: ReactNode;
};

export default function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="px-6 py-4 sm:px-12 sm:py-6 bg-gray-100 border-b">
                <Link href="/" className="font-medium text-blue-500 hover:underline">
                    ↤ Home
                </Link>
            </nav>
            <main className="flex-grow flex flex-col justify-start items-center p-6 sm:p-12 md:p-16 bg-gray-200">
                {children}
            </main>
        </div>
    );
}
