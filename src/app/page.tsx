"use client";
import Image from "next/image";
import { GiFireShield } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiLightning } from "react-icons/pi";

export default function Home() {
    return (
        <>
            <section className="flex flex-col lg:flex-row px-4 py-6 lg:py-12 justify-between items-center gap-4 lg:gap-8 lg:min-h-screen">
                <div className="p-3 flex-[1_1_50%]">
                    <h2 className="text-3xl xl:text-4xl font-bold min-w-xs pb-6">Chroń swoją własność dzięki niezawodnym systemom alarmowym</h2>
                    <article className="space-y-3 flex-1 min-w-xs ">
                        <p className="xl:text-lg pb-3">
                            Rozumiemy znaczenie zapewnienia bezpieczeństwa Twojej własności. Dlatego oferujemy najwyższej klasy systemy alarmowe,
                            które zapewniają całodobową ochronę.
                        </p>

                        <div className="flex flex-col lg:flex-row gap-3">
                            <div>
                                <h3 className="pb-2 text-lg font-semibold">Rozszerzona ochrona</h3>
                                <p className="pb-3">
                                    Nasze systemy alarmowe zapewniają kompleksową ochronę przed włamaniem, włamaniem i nieuprawnionym dostępem.
                                </p>
                            </div>
                            <div>
                                <h3 className="pb-2 text-lg font-semibold">Całodobowa ochrona</h3>
                                <p className="pb-3">
                                    Nasz zespół ekspertów zapewnia całodobowy nadzór i natychmiastową reakcję na wszelkie zagrożenia bezpieczeństwa.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="flex-[1_1_50%] mt-3">
                    <Image className="aspect-square w-full object-cover" src="/cables.jpg" alt="" width={1440} height={810} />
                </div>
            </section>
            <section className="flex flex-col lg:flex-row px-4 py-6 justify-between items-center gap-4 lg:gap-8 lg:min-h-screen">
                <div className="p-3 flex-[1_1_50%]">
                    <h2 className="text-3xl xl:text-4xl font-bold min-w-xs pb-6">Zaawansowane systemy CCTV do kompleksowego nadzoru</h2>
                    <article className="space-y-3 flex-1 min-w-xs ">
                        <p className="text-lg pb-3">
                            Nasza oferta systemów CCTV oferuje najnowocześniejsze funkcje i zaawansowaną technologię, aby zapewnić kompleksowy nadzór
                            i bezpieczeństwo. Dzięki kamerom o wysokiej rozdzielczości, detekcji ruchu i możliwościom zdalnego dostępu możesz
                            monitorować swój obiekt z łatwością i spokojem.
                        </p>

                        <ul className="flex flex-col gap-2 list-disc list-inside text-lg">
                            <li>Kamery o wysokiej rozdzielczości zapewniają krystalicznie czysty materiał</li>
                            <li>Wykrywanie ruchu, aby powiadomić Cię o wszelkich podejrzanych działaniach</li>
                            <li>Zdalny dostęp do monitorowania obiektu z dowolnego miejsca</li>
                        </ul>
                        <div className="flex gap-4 my-6">
                            <button className="border-2 border-text-100 px-4 py-2 text-text-100 capitalize text-sm hover:shadow-md transition-shadow">
                                Więcej informacji
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 capitalize text-sm text-text-100 hover:shadow-md transition-shadow">
                                <span>Zgłoś się</span> <MdKeyboardArrowRight />
                            </button>
                        </div>
                    </article>
                </div>
                <div className="flex-[1_1_50%] mt-3 lg:-order-1">
                    <Image className="aspect-square w-full object-cover" src="/cables.jpg" alt="" width={1440} height={810} />
                </div>
            </section>
            <section className="flex flex-col lg:flex-row px-4 py-6 lg:py-12 justify-between items-center gap-4 lg:gap-8 lg:min-h-screen">
                <div className="p-3 flex-[1_1_50%]">
                    <h2 className="text-3xl xl:text-4xl font-bold min-w-xs pb-6">
                        Odkryj znaczenie systemów sygnalizacji pożaru w zapobieganiu pożarom
                    </h2>
                    <article className="space-y-3 flex-1 min-w-xs ">
                        <p className="xl:text-lg pb-3">
                            Systemy sygnalizacji pożaru odgrywają kluczową rolę w ochronie przed zagrożeniami pożarowymi. Zapewniają wczesne
                            wykrywanie i ostrzeganie mieszkańców, umożliwiając szybką ewakuację i minimalizując szkody materialne.{" "}
                        </p>

                        <div className="flex flex-col lg:flex-row gap-3">
                            <div>
                                <GiFireShield className="w-8 h-8 mb-2" />
                                <h3 className="pb-2 text-lg font-semibold">Korzyści</h3>
                                <p className="pb-3">
                                    Zapewnij szybkie wykrywanie pożarów i chroń swoje mienie dzięki naszym zaawansowanym systemom sygnalizacji pożaru.
                                </p>
                            </div>
                            <div>
                                <GrTechnology className="w-8 h-8 mb-2" />
                                <h3 className="pb-2 text-lg font-semibold">Cechy</h3>
                                <p className="pb-3">
                                    Nasze systemy sygnalizacji pożaru są wyposażone w najnowocześniejszą technologię zapewniającą niezawodne
                                    działanie.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="flex-[1_1_50%] mt-3">
                    <Image className="aspect-square w-full object-cover" src="/cables.jpg" alt="" width={1440} height={810} />
                </div>
            </section>
            <section className="flex flex-col lg:flex-row px-4 py-6 justify-between items-center gap-4 lg:gap-8 lg:min-h-screen">
                <div className="p-3 flex-[1_1_50%]">
                    <h2 className="text-3xl xl:text-4xl font-bold min-w-xs pb-6">
                        Profesjonalne usługi w zakresie instalacji elektrycznych dla domów i firm
                    </h2>
                    <article className="space-y-3 flex-1 min-w-xs ">
                        <PiLightning className="h-14 w-14" />
                        <p className="text-lg pb-3">
                            Oferujemy kompleksowe usługi w zakresie instalacji elektrycznych zarówno w budynkach mieszkalnych, jak i komercyjnych.
                            Nasz zespół doświadczonych elektryków jest wykwalifikowany w realizacji projektów każdej wielkości, zapewniając bezpieczne
                            i wydajne instalacje.
                        </p>

                        <div className="flex gap-4 my-6">
                            <button className="border-2 border-text-100 px-4 py-2 text-text-100 capitalize text-sm hover:shadow-md transition-shadow">
                                Więcej informacji
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 capitalize text-sm text-text-100 hover:shadow-md transition-shadow">
                                <span>Zgłoś się</span> <MdKeyboardArrowRight />
                            </button>
                        </div>
                    </article>
                </div>
                <div className="flex-[1_1_50%] w-full mt-3 lg:-order-1">
                    <Image className="aspect-square w-full object-cover" src="/cables.jpg" alt="" width={1440} height={810} />
                </div>
            </section>
            <section className="px-4 my-12 lg:my-36">
                <article className="relative space-y-12 rounded-lg text-bg-100 overflow-hidden p-7 lg:p-16 bg-[url('/maintenance.jpg')] before:content-[''] before:absolute before:inset-0 before:bg-black/50 bg-cover">
                    <h2 className="relative text-3xl xl:text-4xl font-bold min-w-xs lg:max-w-3xl">
                        Zapewnij prawidłowe funkcjonowanie wszystkich systemów dzięki naszym usługom konserwacyjnym
                    </h2>
                    <p className="relative text-lg lg:max-w-3xl">
                        Nasze usługi konserwacyjne mają na celu utrzymanie systemów bezpieczeństwa, telewizji przemysłowej, sygnalizacji pożaru i
                        instalacji elektrycznych w optymalnym stanie. Regularne przeglądy i naprawy zapewniają prawidłowe działanie wszystkich
                        systemów i spokój ducha.
                    </p>
                </article>
            </section>
        </>
    );
}
