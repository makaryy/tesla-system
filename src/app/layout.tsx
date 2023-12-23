import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "../components/shared/Nav";
import { twMerge } from "tailwind-merge";
import Footer from "@/components/shared/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pl">
            <body className={twMerge(montserrat.className, "min-h-screen flex flex-col items-stretch")}>
                <Nav />
                <main className="flex flex-col items-stretch flex-grow w-full gap-8 lg:gap-16">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
