import Section from "@/components/shared/Section";
import Image from "next/image";

const title = "Zapewnij prawidłowe funkcjonowanie wszystkich systemów dzięki naszym usługom konserwacyjnym";
const description =
    "Nasze usługi konserwacyjne mają na celu utrzymanie systemów bezpieczeństwa, telewizji przemysłowej, sygnalizacji pożaru i instalacji elektrycznych w optymalnym stanie. Regularne przeglądy i naprawy zapewniają prawidłowe działanie wszystkich systemów i spokój ducha.";
const image = { src: "/maintenance.jpg", alt: "" };

const MaintenanceSection = () => {
    return (
        <Section className="px-4 py-6 lg:py-12">
            <article className="relative space-y-12 rounded-lg text-bg-100 overflow-hidden p-7 lg:p-16 bg-black/50">
                <div className="absolute inset-0 -z-10">
                    <Image src={image.src} alt={image.alt} fill className="object-cover object-left" />
                </div>
                <h2 className="text-3xl xl:text-4xl font-bold min-w-xs lg:max-w-3xl">{title}</h2>
                <p className="text-lg lg:max-w-3xl">{description}</p>
            </article>
        </Section>
    );
};

export default MaintenanceSection;
