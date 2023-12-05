import Section from "@/components/Section";
import Image from "next/image";
import { GiFireShield } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiLightning } from "react-icons/pi";
import HomeHero from "./HomeHero";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <HomeHero />
            <div className="flex flex-col items-stretch max-w-8xl mx-auto lg:px-20 gap-8 lg:gap-16">
                <Section className="flex flex-col lg:flex-row px-4 py-6 lg:py-12 justify-between items-center gap-4 lg:gap-8">
                    <div className="flex-[1_1_50%]">
                        <h2 className="text-3xl xl:text-4xl font-bold min-w-xs pb-6">
                            Chroń swoją własność dzięki niezawodnym systemom alarmowym
                        </h2>
                        <article className="space-y-3 flex-1 min-w-xs ">
                            <p className="xl:text-lg pb-3">
                                Rozumiemy znaczenie zapewnienia bezpieczeństwa Twojej własności. Dlatego oferujemy najwyższej klasy systemy
                                alarmowe, które zapewniają całodobową ochronę.
                            </p>

                            <div className="flex flex-col lg:flex-row gap-3">
                                <div>
                                    <h3 className="pb-2 text-lg font-semibold">Rozszerzona ochrona</h3>
                                    <p className="pb-3">
                                        Nasze systemy alarmowe zapewniają kompleksową ochronę przed włamaniem, włamaniem i nieuprawnionym
                                        dostępem.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="pb-2 text-lg font-semibold">Całodobowa ochrona</h3>
                                    <p className="pb-3">
                                        Nasz zespół ekspertów zapewnia całodobowy nadzór i natychmiastową reakcję na wszelkie zagrożenia
                                        bezpieczeństwa.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="flex-[1_1_50%] w-full">
                        <Image className="aspect-square w-full object-cover rounded-md" src="/sa.png" alt="" width={640} height={640} />
                    </div>
                </Section>
                <Section className="flex flex-col lg:flex-row px-4 py-6 lg:py-12 justify-between items-center gap-4 lg:gap-8">
                    <div className="flex-[1_1_50%]">
                        <h2 className="text-3xl xl:text-4xl font-bold min-w-xs pb-6">Zaawansowane systemy CCTV do kompleksowego nadzoru</h2>
                        <article className="space-y-3 flex-1 min-w-xs ">
                            <p className="text-lg pb-3">
                                Nasza oferta systemów CCTV oferuje najnowocześniejsze funkcje i zaawansowaną technologię, aby zapewnić
                                kompleksowy nadzór i bezpieczeństwo. Dzięki kamerom o wysokiej rozdzielczości, detekcji ruchu i możliwościom
                                zdalnego dostępu możesz monitorować swój obiekt z łatwością i spokojem.
                            </p>

                            <ul className="flex flex-col gap-2 list-disc list-inside text-lg">
                                <li>Kamery o wysokiej rozdzielczości zapewniają krystalicznie czysty materiał</li>
                                <li>Wykrywanie ruchu, aby powiadomić Cię o wszelkich podejrzanych działaniach</li>
                                <li>Zdalny dostęp do monitorowania obiektu z dowolnego miejsca</li>
                            </ul>
                            <div className="flex gap-4 my-6">
                                <button className="border-2 border-accent-100 px-4 py-2 rounded-md text-text-100 capitalize text-sm hover:shadow-md transition-shadow">
                                    Więcej informacji
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 rounded-md capitalize text-sm text-text-100 hover:shadow-md transition-shadow">
                                    <span>Zgłoś się</span> <MdKeyboardArrowRight />
                                </button>
                            </div>
                        </article>
                    </div>
                    <div className="flex-[1_1_50%] w-full lg:-order-1">
                        <Image className="aspect-square w-full object-cover rounded-md" src="/cctv.jpg" alt="" width={1440} height={810} />
                    </div>
                </Section>
                <Section className="flex flex-col lg:flex-row px-4 py-6 lg:py-12 justify-between items-center gap-4 lg:gap-8">
                    <div className="flex-[1_1_50%]">
                        <h2 className="text-3xl xl:text-4xl font-bold min-w-xs pb-6">
                            Odkryj znaczenie systemów sygnalizacji pożaru w zapobieganiu pożarom
                        </h2>
                        <article className="space-y-3 flex-1 min-w-xs ">
                            <p className="xl:text-lg pb-3">
                                Systemy sygnalizacji pożaru odgrywają kluczową rolę w ochronie przed zagrożeniami pożarowymi. Zapewniają
                                wczesne wykrywanie i ostrzeganie mieszkańców, umożliwiając szybką ewakuację i minimalizując szkody
                                materialne.{" "}
                            </p>

                            <div className="flex flex-col lg:flex-row gap-3">
                                <div>
                                    <GiFireShield className="w-8 h-8 mb-2" />
                                    <h3 className="pb-2 text-lg font-semibold">Korzyści</h3>
                                    <p className="pb-3">
                                        Zapewnij szybkie wykrywanie pożarów i chroń swoje mienie dzięki naszym zaawansowanym systemom
                                        sygnalizacji pożaru.
                                    </p>
                                </div>
                                <div>
                                    <GrTechnology className="w-8 h-8 mb-2" />
                                    <h3 className="pb-2 text-lg font-semibold">Cechy</h3>
                                    <p className="pb-3">
                                        Nasze systemy sygnalizacji pożaru są wyposażone w najnowocześniejszą technologię zapewniającą
                                        niezawodne działanie.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="flex-[1_1_50%] w-full">
                        <Image className="aspect-square w-full object-cover rounded-md" src="/smoke.jpg" alt="" width={640} height={640} />
                    </div>
                </Section>
                <Section className="flex flex-col lg:flex-row px-4 py-6 lg:py-12 justify-between items-center gap-4 lg:gap-8">
                    <div className="flex-[1_1_50%]">
                        <h2 className="text-3xl xl:text-4xl font-bold min-w-xs pb-6">
                            Profesjonalne usługi w zakresie instalacji elektrycznych dla domów i firm
                        </h2>
                        <article className="space-y-3 flex-1 min-w-xs ">
                            <PiLightning className="h-14 w-14" />
                            <p className="text-lg pb-3">
                                Oferujemy kompleksowe usługi w zakresie instalacji elektrycznych zarówno w budynkach mieszkalnych, jak i
                                komercyjnych. Nasz zespół doświadczonych elektryków jest wykwalifikowany w realizacji projektów każdej
                                wielkości, zapewniając bezpieczne i wydajne instalacje.
                            </p>

                            <div className="flex gap-4 my-6">
                                <button className="border-2 border-accent-100 px-4 py-2 rounded-md text-text-100 capitalize text-sm hover:shadow-md transition-shadow">
                                    Więcej informacji
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 rounded-md capitalize text-sm text-text-100 hover:shadow-md transition-shadow">
                                    <span>Zgłoś się</span> <MdKeyboardArrowRight />
                                </button>
                            </div>
                        </article>
                    </div>
                    <div className="flex-[1_1_50%] w-full lg:-order-1">
                        <Image className="aspect-square w-full object-cover rounded-md" src="/cables.jpg" alt="" width={640} height={640} />
                    </div>
                </Section>
                <Section className="flex flex-col lg:flex-row px-4 py-6 lg:py-12 justify-between items-center gap-4 lg:gap-8">
                    <div className="flex-[1_1_50%]">
                        <h2 className="text-3xl xl:text-4xl font-bold min-w-xs pb-6">
                            Zarządzaj dostępem dzięki nowoczesnym systemom kontroli
                        </h2>
                        <article className="space-y-3 flex-1 min-w-xs ">
                            <p className="xl:text-lg pb-3">
                                Oferujemy zaawansowane systemy kontroli dostępu, które pozwalają skutecznie zarządzać dostępem do Twojej
                                własności.
                            </p>

                            <div className="flex flex-col lg:flex-row gap-3">
                                <div>
                                    <h3 className="pb-2 text-lg font-semibold">Precyzyjna kontrola dostępu</h3>
                                    <p className="pb-3">
                                        Nasze systemy zapewniają precyzyjną kontrolę dostępu, eliminując nieuprawniony wstęp do chronionych
                                        obszarów.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="pb-2 text-lg font-semibold">Inteligentne zarządzanie uprawnieniami</h3>
                                    <p className="pb-3">
                                        Dzięki naszym rozwiązaniom możliwe jest inteligentne zarządzanie uprawnieniami, dostosowane do
                                        indywidualnych potrzeb.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="flex-[1_1_50%] w-full">
                        <Image
                            className="aspect-square w-full object-cover rounded-md"
                            src="/skd.jpg"
                            alt="Systemy Kontroli Dostępu"
                            width="1440"
                            height="810"
                        />
                    </div>
                </Section>
                <Section className="px-4 py-6 lg:py-12">
                    <article className="relative space-y-12 rounded-lg text-bg-100 overflow-hidden p-7 lg:p-16 bg-[url('/maintenance.jpg')] before:content-[''] before:absolute before:inset-0 before:bg-black/50 bg-cover">
                        <h2 className="relative text-3xl xl:text-4xl font-bold min-w-xs lg:max-w-3xl">
                            Zapewnij prawidłowe funkcjonowanie wszystkich systemów dzięki naszym usługom konserwacyjnym
                        </h2>
                        <p className="relative text-lg lg:max-w-3xl">
                            Nasze usługi konserwacyjne mają na celu utrzymanie systemów bezpieczeństwa, telewizji przemysłowej, sygnalizacji
                            pożaru i instalacji elektrycznych w optymalnym stanie. Regularne przeglądy i naprawy zapewniają prawidłowe
                            działanie wszystkich systemów i spokój ducha.
                        </p>
                    </article>
                </Section>
            </div>
            <section className="relative flex gap-6 px-7 lg:px-20 pb-6 pt-20 justify-between items-center bg-fixed bg-cover bg-gradient-to-r from-primary-100 to-primary-300 w-full shadow-md ">
                <div className="relative space-y-4 max-w-7xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl text-bg-100/90 font-bold flex-auto min-w-xs text-center">
                        Zabezpiecz z nami swoją własność
                    </h2>
                    <article className="space-y-12 flex-1 min-w-xs text-bg-100/90 ">
                        <p className="text-lg text-center">
                            Skontaktuj się z nami już dziś, aby uzyskać kompleksowe bezpieczeństwo dla Twojego mienia.
                        </p>
                        <div className="flex justify-center gap-4 my-6">
                            <Link
                                href="/kontakt"
                                className="border-2 border-accent-100 px-6 py-3 rounded-md bg-accent-100 text-bg-100 text-center capitalize text-sm hover:shadow-sm transition-shadow"
                            >
                                Kontakt
                            </Link>
                            <Link
                                href="/oferta"
                                className="border-2 border-bg-100 px-6 py-3 rounded-md capitalize text-sm text-bg-100 text-center hover:shadow-sm transition-shadow"
                            >
                                Oferta
                            </Link>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}
