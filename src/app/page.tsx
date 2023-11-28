import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

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
                                <span>Zgłoś się</span> <FaArrowRightLong />
                            </button>
                        </div>
                    </article>
                </div>
                <div className="flex-[1_1_50%] mt-3 lg:-order-1">
                    <Image className="aspect-square w-full object-cover" src="/cables.jpg" alt="" width={1440} height={810} />
                </div>
            </section>
        </>
    );
}
