import { GiFireShield } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiLightning } from "react-icons/pi";
import HomeHero from "../components/home/HomeHero";
import { Metadata } from "next";
import HomeSection from "../components/home/HomeSection";
import MaintenanceSection from "../components/home/MaintenanceSection";
import BottomSection from "../components/home/BottomSection";
import { HomeSectionProps } from "../components/home/HomeSection/types";

export const metadata: Metadata = {
    title: "Bezpieczeństwo i Kontrola - Specjaliści w Systemach Bezpieczeństwa",
    description:
        "Zajmujemy się kompleksowymi usługami z zakresu systemów sygnalizacji włamania, systemów CCTV, sygnalizacji pożaru, kontroli dostępu, instalacji elektrycznych, systemów BMS i konserwacji.",
    keywords:
        "systemy sygnalizacji włamania, systemy CCTV, sygnalizacja pożarowa, kontrola dostępu, instalacje elektryczne, systemy BMS, konserwacja systemów bezpieczeństwa"
};

const homeSections: HomeSectionProps[] = [
    {
        image: { src: "https://res.cloudinary.com/dqyhe8ogi/image/upload/v1703342227/tesla-system/sa_vwtooa.png", alt: "Czujnik PIR" },
        imagePosition: "right",
        subtitle:
            "Rozumiemy znaczenie zapewnienia bezpieczeństwa Twojej własności. Dlatego oferujemy najwyższej klasy systemy alarmowe, które zapewniają całodobową ochronę.",
        title: "Chroń swoją własność dzięki niezawodnym systemom alarmowym",
        columns: [
            {
                title: "Rozszerzona ochrona",
                description: "Nasze systemy alarmowe zapewniają kompleksową ochronę przed włamaniem, włamaniem i nieuprawnionym dostępem."
            },
            {
                title: "Całodobowa ochrona",
                description: "Nasz zespół ekspertów zapewnia całodobowy nadzór i natychmiastową reakcję na wszelkie zagrożenia bezpieczeństwa."
            }
        ]
    },
    {
        image: { src: "https://res.cloudinary.com/dqyhe8ogi/image/upload/v1703342225/tesla-system/cctv_x5tmqz.jpg", alt: "Kamery na słupie" },
        imagePosition: "left",
        subtitle:
            "Nasza oferta systemów CCTV oferuje najnowocześniejsze funkcje i zaawansowaną technologię, aby zapewnić kompleksowy nadzór i bezpieczeństwo. Dzięki kamerom o wysokiej rozdzielczości, detekcji ruchu i możliwościom zdalnego dostępu możesz monitorować swój obiekt z łatwością i spokojem.",
        title: "Zaawansowane systemy CCTV do kompleksowego nadzoru",
        list: [
            "Kamery o wysokiej rozdzielczości zapewniają krystalicznie czysty materiał",
            "Wykrywanie ruchu, aby powiadomić Cię o wszelkich podejrzanych działaniach",
            "Zdalny dostęp do monitorowania obiektu z dowolnego miejsca"
        ],
        primaryCta: { href: "/oferta", label: "Więcej informacji" },
        secondaryCta: { href: "/kontakt", label: "Zgłoś się", icon: <MdKeyboardArrowRight /> }
    },
    {
        image: { src: "https://res.cloudinary.com/dqyhe8ogi/image/upload/v1703342226/tesla-system/smoke_c38oqk.jpg", alt: "Dym papierosowy" },
        imagePosition: "right",
        subtitle:
            "Systemy sygnalizacji pożaru odgrywają kluczową rolę w ochronie przed zagrożeniami pożarowymi. Zapewniają wczesne wykrywanie i ostrzeganie mieszkańców, umożliwiając szybką ewakuację i minimalizując szkody materialne.",
        title: "Odkryj znaczenie systemów sygnalizacji pożaru w zapobieganiu pożarom",
        columns: [
            {
                title: "Korzyści",
                description: "Zapewnij szybkie wykrywanie pożarów i chroń swoje mienie dzięki naszym zaawansowanym systemom sygnalizacji pożaru.",
                icon: <GiFireShield className="w-8 h-8 mb-2" />
            },
            {
                title: "Całodobowa ochrona",
                description: "Nasz zespół ekspertów zapewnia całodobowy nadzór i natychmiastową reakcję na wszelkie zagrożenia bezpieczeństwa.",
                icon: <GrTechnology className="w-8 h-8 mb-2" />
            }
        ]
    },
    {
        image: { src: "https://res.cloudinary.com/dqyhe8ogi/image/upload/v1703342226/tesla-system/cables_gparns.jpg", alt: "Przewody w ścianie" },
        imagePosition: "left",
        subtitle:
            "Oferujemy kompleksowe usługi w zakresie instalacji elektrycznych zarówno w budynkach mieszkalnych, jak i komercyjnych. Nasz zespół doświadczonych elektryków jest wykwalifikowany w realizacji projektów każdej wielkości, zapewniając bezpieczne i wydajne instalacje.",
        title: "Profesjonalne usługi w zakresie instalacji elektrycznych dla domów i firm",
        mainIcon: <PiLightning className="h-14 w-14" />,
        primaryCta: { href: "/oferta", label: "Więcej informacji" },
        secondaryCta: { href: "/kontakt", label: "Zgłoś się", icon: <MdKeyboardArrowRight /> }
    },
    {
        image: { src: "https://res.cloudinary.com/dqyhe8ogi/image/upload/v1703342225/tesla-system/skd_ajrgnc.jpg", alt: "kłódka na siatce" },
        imagePosition: "right",
        subtitle: "Oferujemy zaawansowane systemy kontroli dostępu, które pozwalają skutecznie zarządzać dostępem do Twojej własności.",
        title: "Zarządzaj dostępem dzięki nowoczesnym systemom kontroli",
        columns: [
            {
                title: "Precyzyjna kontrola dostępu",
                description: "Nasze systemy zapewniają precyzyjną kontrolę dostępu, eliminując nieuprawniony wstęp do chronionych obszarów."
            },
            {
                title: "Inteligentne zarządzanie uprawnieniami",
                description: "Dzięki naszym rozwiązaniom możliwe jest inteligentne zarządzanie uprawnieniami, dostosowane do indywidualnych potrzeb."
            }
        ]
    }
];

export default function Home() {
    return (
        <>
            <HomeHero />
            <div className="flex flex-col items-stretch max-w-8xl mx-auto lg:px-20 gap-8 lg:gap-16">
                {homeSections.map((homeSection) => (
                    <HomeSection {...homeSection} key={homeSection.title} />
                ))}
                <MaintenanceSection />
            </div>
            <BottomSection />
        </>
    );
}
