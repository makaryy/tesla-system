import { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
    title: "Kontakt - Skontaktuj się z Nami w Sprawie Systemów Bezpieczeństwa",
    description:
        "Masz pytania dotyczące systemów bezpieczeństwa? Skontaktuj się z nami, jesteśmy gotowi odpowiedzieć na wszystkie Twoje pytania i omówić najlepsze rozwiązania dla Twojego biznesu.",
    keywords: "kontakt, systemy bezpieczeństwa, pytania dotyczące bezpieczeństwa, rozwiązania bezpieczeństwa"
};

const Contact = () => {
    return (
        <div className="flex-grow p-4 lg:p-8 mt-16 self-center w-full max-w-lg mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Skontaktuj się</h1>
            <ContactForm />
        </div>
    );
};

export default Contact;
