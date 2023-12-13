import { Metadata } from "next";
import AboutUsSlider from "./AboutUsSlider";

export const metadata: Metadata = {
    title: "O Nas - Doświadczenie i Profesjonalizm w Dziedzinie Bezpieczeństwa",
    description:
        "Jesteśmy doświadczoną firmą specjalizującą się w projektowaniu, instalacji i konserwacji systemów bezpieczeństwa. Nasza misja to zapewnienie najwyższej jakości usług dla bezpieczeństwa Twojego biznesu.",
    keywords: "doświadczenie w systemach bezpieczeństwa, profesjonalizm, projektowanie systemów bezpieczeństwa, instalacje bezpieczeństwa"
};

const About = () => {
    return (
        <div className="flex-grow p-4 lg:p-8 mt-16 self-center w-full max-w-8xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">O nas</h1>
            <p className="text-lg mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel leo a ligula bibendum aliquam. Nullam auctor sem in metus
                fringilla, at vestibulum purus consectetur.
            </p>

            <AboutUsSlider />
        </div>
    );
};

export default About;
