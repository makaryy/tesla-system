"use client";

import { motion } from "framer-motion";

const Offer = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="p-4 lg:p-8 mt-16 self-center"
        >
            <div className="mx-auto mt-8">
                <h1 className="text-4xl font-bold mb-4">Oferta</h1>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Systemy sygnalizacji włamania i napadu</h2>
                    <p className="text-lg">
                        Nasze systemy sygnalizacji włamania i napadu są zaprojektowane, aby skutecznie monitorować i reagować na wszelkie
                        próby nieautoryzowanego dostępu. Wykorzystujemy zaawansowane czujniki i technologie detekcji, zapewniając szybką
                        reakcję na potencjalne zagrożenia.
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Projektowanie i dostosowywanie systemów do specyfiki obiektu</li>
                        <li>Montaż zaawansowanych czujników i urządzeń detekcyjnych</li>
                        <li>Integracja z systemami monitoringu CCTV</li>
                        <li>Monitoring i reakcja na wszelkie sytuacje alarmowe</li>
                        <li>Regularne przeglądy i konserwacja systemów</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Systemy CCTV</h2>
                    <p className="text-lg">
                        Nasze systemy monitoringu CCTV umożliwiają efektywne monitorowanie obiektów, archiwizację ważnych zdarzeń oraz
                        zapewniają dostęp do nagrań online. Dostarczamy najnowocześniejsze kamery i rejestratory, aby zapewnić pełen zakres
                        monitoringu w różnych warunkach.
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Dostarczanie najnowocześniejszych kamer i rejestratorów</li>
                        <li>Skalowalne rozwiązania dla różnych potrzeb klienta</li>
                        <li>Konfiguracja systemów do efektywnego monitoringu</li>
                        <li>Archiwizacja ważnych zdarzeń i dostęp do nagrań online</li>
                        <li>Świadczenie usług serwisowych i konserwacyjnych</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Systemy sygnalizacji pożaru</h2>
                    <p className="text-lg">
                        Nasze systemy sygnalizacji pożaru są projektowane w celu szybkiego wykrywania i reagowania na zagrożenia pożarowe.
                        Zapewniają skuteczną ochronę przed stratami materialnymi i zagrożeniem życia poprzez szybką aktywację alarmu oraz
                        powiadomienie służb ratunkowych.
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Projektowanie i instalacja systemów spełniających normy bezpieczeństwa</li>
                        <li>Wykrywanie i reakcja na zagrożenia pożarowe</li>
                        <li>Minimalizacja strat materialnych i zagrożenia życia</li>
                        <li>Regularne przeglądy i testy funkcjonalności</li>
                        <li>Świadczenie usług serwisowych w razie potrzeby</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Instalacje elektryczne</h2>
                    <p className="text-lg">
                        Nasze instalacje elektryczne są projektowane z myślą o bezpieczeństwie i efektywności. Dostarczamy kompleksowe
                        rozwiązania, obejmujące montaż, testy oraz utrzymanie systemów, zapewniając niezawodne źródło energii dla różnych
                        obiektów.
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Projektowanie bezpiecznych i efektywnych instalacji elektrycznych</li>
                        <li>Montaż zgodnie z obowiązującymi normami i przepisami</li>
                        <li>Indywidualne podejście do potrzeb klienta</li>
                        <li>Testy i certyfikacja zainstalowanych systemów</li>
                        <li>Utrzymanie i serwisowanie instalacji elektrycznych</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Systemy Kontroli Dostępu</h2>
                    <p className="text-lg">
                        Nasze systemy kontroli dostępu umożliwiają skonfigurowanie precyzyjnych zasad dostępu do różnych obszarów obiektu.
                        Wykorzystujemy czytniki kart magnetycznych, kody PIN i biometrię, zapewniając kompleksową ochronę przed
                        nieautoryzowanym dostępem.
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Zintegrowane rozwiązania do zarządzania dostępem pracowników i gości</li>
                        <li>Montaż czytników kart magnetycznych, kodów PIN i biometrycznych</li>
                        <li>Konfiguracja ograniczeń dostępu w różnych strefach obiektu</li>
                        <li>Monitoring aktywności i raportowanie zdarzeń związanych z dostępem</li>
                        <li>Świadczenie usług konserwacyjnych i dostosowań systemu</li>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default Offer;
