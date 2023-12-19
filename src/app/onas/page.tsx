import { Metadata } from "next";
import AboutUsSlider from "./AboutUsSlider";
import { getImages } from "./utils";

export const metadata: Metadata = {
    title: "O Nas - Doświadczenie i Profesjonalizm w Dziedzinie Bezpieczeństwa",
    description:
        "Jesteśmy doświadczoną firmą specjalizującą się w projektowaniu, instalacji i konserwacji systemów bezpieczeństwa. Nasza misja to zapewnienie najwyższej jakości usług dla bezpieczeństwa Twojego biznesu.",
    keywords: "doświadczenie w systemach bezpieczeństwa, profesjonalizm, projektowanie systemów bezpieczeństwa, instalacje bezpieczeństwa"
};

export const revalidate = 3600;

const About = async () => {
    const images = await getImages();

    return (
        <div className="flex-grow p-4 lg:p-8 mt-16 self-center w-full max-w-8xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">O nas</h1>
            <p className="text-lg mb-8 ">
                Jesteśmy nie tylko firmą z wieloletnim doświadczeniem w branży, ale również zespołem pasjonatów, dla których każdy projekt to nie
                tylko wyzwanie, ale przede wszystkim szansa na tworzenie czegoś wyjątkowego. Naszą misją jest nie tylko dostarczanie kompleksowych
                rozwiązań w zakresie systemów bezpieczeństwa, zarządzania budynkiem i instalacji elektrycznych, ale także budowanie trwałych relacji
                opartych na zaufaniu i partnerskim podejściu.
                <br />
                <br />
                Mamy zaszczyt być częścią wielu fascynujących projektów, które nie tylko wpływają pozytywnie na bezpieczeństwo naszych klientów, ale
                także przynoszą radość i satysfakcję z osiągniętych rezultatów. Pracujemy z determinacją i zaangażowaniem, aby każde rozwiązanie było
                dopasowane do indywidualnych potrzeb, a nasze działania oparte są na szacunku do klienta oraz zrozumieniu jego unikalnych oczekiwań.
                <br />
                <br />
                Nasze projekty, które przenoszą wirtualne pomysły w rzeczywistość, są owocem współpracy z utalentowanym zespołem, który nie tylko
                doskonale zna się na technologii, ale również zdaje sobie sprawę z ludzkich potrzeb. Dzięki naszym systemom sygnalizacji włamania i
                napadu, monitoringu CCTV czy systemom kontroli dostępu, naszym klientom udaje się poczuć większą pewność i komfort.
                <br />
                <br />
                Oprócz tworzenia technologicznych innowacji, zawsze stawiamy na relacje międzyludzkie. Każdy klient dla nas to nie tylko
                współpracownik, ale także partner, którego potrzeby traktujemy z najwyższym priorytetem. Jesteśmy dumni z tego, że nasze projekty są
                nie tylko funkcjonalne, ale także zaskakujące i dostarczające pozytywnych emocji. Nasza praca to nie tylko realizacja usług, to pasja,
                zaangażowanie i duma z tego, że możemy być częścią historii sukcesu każdego projektu.
            </p>

            <AboutUsSlider images={images} />
        </div>
    );
};

export default About;
