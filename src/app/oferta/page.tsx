import OfferItem from "@/components/oferta/OfferItem";
import OfferItems from "@/components/oferta/OfferItems";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Oferta - Systemy Bezpieczeństwa, Instalacje Elektryczne i Konserwacja",
    description:
        "Zobacz naszą szeroką ofertę obejmującą systemy sygnalizacji włamania, systemy CCTV, sygnalizację pożarową, kontrolę dostępu, instalacje elektryczne, systemy BMS. Oferujemy również kompleksową konserwację i utrzymanie systemów bezpieczeństwa.",
    keywords: "systemy bezpieczeństwa, instalacje elektryczne, konserwacja systemów bezpieczeństwa, usługi bezpieczeństwa"
};

const offerItems = [
    {
        title: "Systemy sygnalizacji włamania i napadu",
        subtitle:
            "Nasze systemy sygnalizacji włamania i napadu są zaprojektowane, aby skutecznie monitorować i reagować na wszelkie próby nieautoryzowanego dostępu. Wykorzystujemy zaawansowane czujniki i technologie detekcji, zapewniając szybką reakcję na potencjalne zagrożenia.",
        items: [
            "Projektowanie i dostosowywanie systemów do specyfiki obiektu",
            "Montaż zaawansowanych czujników i urządzeń detekcyjnych",
            "Integracja z systemami monitoringu CCTV",
            "Monitoring i reakcja na wszelkie sytuacje alarmowe",
            "Regularne przeglądy i konserwacja systemów"
        ]
    },
    {
        title: "Systemy CCTV",
        subtitle:
            "Nasze systemy monitoringu CCTV umożliwiają efektywne monitorowanie obiektów, archiwizację ważnych zdarzeń oraz zapewniają dostęp do nagrań online. Dostarczamy najnowocześniejsze kamery i rejestratory, aby zapewnić pełen zakres monitoringu w różnych warunkach.",
        items: [
            "Dostarczanie najnowocześniejszych kamer i rejestratorów",
            "Skalowalne rozwiązania dla różnych potrzeb klienta",
            "Konfiguracja systemów do efektywnego monitoringu",
            "Archiwizacja ważnych zdarzeń i dostęp do nagrań online",
            "Świadczenie usług serwisowych i konserwacyjnych"
        ]
    },
    {
        title: "Systemy sygnalizacji pożaru",
        subtitle:
            "Nasze systemy sygnalizacji pożaru są projektowane w celu szybkiego wykrywania i reagowania na zagrożenia pożarowe. Zapewniają skuteczną ochronę przed stratami materialnymi i zagrożeniem życia poprzez szybką aktywację alarmu oraz powiadomienie służb ratunkowych.",
        items: [
            "Projektowanie i instalacja systemów spełniających normy bezpieczeństwa",
            "Wykrywanie i reakcja na zagrożenia pożarowe",
            "Minimalizacja strat materialnych i zagrożenia życia",
            "Regularne przeglądy i testy funkcjonalności",
            "Świadczenie usług serwisowych w razie potrzeby",
            "Konserwacja systemów w celu utrzymania efektywności"
        ]
    },
    {
        title: "Instalacje elektryczne",
        subtitle:
            "Nasze instalacje elektryczne są projektowane z myślą o bezpieczeństwie i efektywności. Dostarczamy kompleksowe rozwiązania, obejmujące montaż, testy oraz utrzymanie systemów, zapewniając niezawodne źródło energii dla różnych obiektów.",
        items: [
            "Projektowanie bezpiecznych i efektywnych instalacji elektrycznych",
            "Montaż zgodnie z obowiązującymi normami i przepisami",
            "Indywidualne podejście do potrzeb klienta",
            "Testy i certyfikacja zainstalowanych systemów",
            "Utrzymanie i serwisowanie instalacji elektrycznych",
            "Usługi konserwacyjne dla utrzymania efektywności"
        ]
    },
    {
        title: "Systemy Kontroli Dostępu",
        subtitle:
            "Nasze systemy kontroli dostępu umożliwiają skonfigurowanie precyzyjnych zasad dostępu do różnych obszarów obiektu. Wykorzystujemy czytniki kart magnetycznych, kody PIN i biometrię, zapewniając kompleksową ochronę przed nieautoryzowanym dostępem.",
        items: [
            "Zintegrowane rozwiązania do zarządzania dostępem pracowników i gości",
            "Montaż czytników kart magnetycznych, kodów PIN i biometrycznych",
            "Konfiguracja ograniczeń dostępu w różnych strefach obiektu",
            "Monitoring aktywności i raportowanie zdarzeń związanych z dostępem",
            "Świadczenie usług konserwacyjnych i dostosowań systemu"
        ]
    },
    {
        title: "Systemy Zarządzania Budynkiem (BMS)",
        subtitle:
            "Nasze systemy zarządzania budynkiem są zaprojektowane, aby efektywnie kontrolować i optymalizować różne funkcje obiektu. Wykorzystujemy zaawansowane technologie, zapewniając inteligentne zarządzanie i monitorowanie systemów.",
        items: [
            "Projektowanie i dostosowywanie systemów do specyfiki obiektu",
            "Montaż zaawansowanych czujników i urządzeń do monitoringu",
            "Integracja z systemami bezpieczeństwa i kontroli dostępu",
            "Monitoring i reakcja na wszelkie sytuacje awaryjne",
            "Regularne przeglądy i konserwacja systemów BMS"
        ]
    }
];

const Offer = () => {
    return (
        <div className="p-4 lg:p-8 mt-16 self-center w-full">
            <h1 className="text-4xl font-bold mb-4 text-center">Oferta</h1>
            <OfferItems offerItems={offerItems} />
        </div>
    );
};

export default Offer;
