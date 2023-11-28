import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pl">
            <body className={twMerge(montserrat.className)}>
                <Nav />

                <main className="flex flex-col items-stretch mx-auto">
                    <section className="flex flex-wrap gap-6 px-4 lg:px-20 py-6 justify-between items-center bg-fixed bg-cover bg-[url('/hero.jpg')] min-h-screen">
                        <div className="max-w-7xl mx-auto">
                            <h1 className="text-4xl lg:text-5xl text-bg-100/90 font-bold flex-auto min-w-xs ">
                                Profesjonalne rozwiązania ochrony i bezpieczeństwa dla Ciebie
                            </h1>
                            <article className="space-y-3 flex-1 min-w-xs text-bg-100/90 ">
                                <p className="text-lg">
                                    Specjalizujemy się w dostarczaniu najlepszej jakości rozwiązań ochrony i bezpieczeństwa Twojej własności i
                                    ukochanych. Z naszymi najnowocześniejszymi systemami i doświadczonym zespołem możesz mieć pewność, że jesteś w
                                    dorych rękach.
                                </p>
                                <div className="flex gap-4 my-6">
                                    <button className="border-2 border-primary-100 px-4 py-2 bg-primary-100 text-bg-100 capitalize text-sm hover:shadow-sm transition-shadow">
                                        Oferta
                                    </button>
                                    <button className="border-2 border-bg-100 px-4 py-2 capitalize text-sm text-bg-100 hover:shadow-sm transition-shadow">
                                        Skontaktuj się
                                    </button>
                                </div>
                            </article>
                        </div>
                    </section>
                    <div className="flex flex-col items-stretch max-w-8xl mx-auto lg:px-20">{children}</div>
                </main>
            </body>
        </html>
    );
}
