import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import { twMerge } from "tailwind-merge";
import Footer from "@/components/Footer";
import HomeHero from "./HomeHero";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pl">
            <body className={twMerge(montserrat.className)}>
                <Nav />
                <main className="flex flex-col items-stretch w-full gap-8 lg:gap-16">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
