import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Strona nie istnieje",
    robots: { index: false, follow: false }
};

const NotFound = () => {
    return (
        <main className="h-[calc(100vh-292px)] lg:h-[calc(100vh-185px)] flex items-center justify-center">
            <p className="text-xl text-center">
                <span className="block">Strona nie istnieje</span>
                <Link href="/" className="text-primary-200 hover:underline">
                    powróć do Strony Głównej
                </Link>
            </p>
        </main>
    );
};

export default NotFound;
