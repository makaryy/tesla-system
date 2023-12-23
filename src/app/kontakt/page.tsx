import { Metadata } from "next";
import { ContactForm } from "../../components/kontakt/ContactForm";

export const metadata: Metadata = {
    title: "Kontakt - Skontaktuj się z Nami w Sprawie Systemów Bezpieczeństwa",
    description:
        "Masz pytania dotyczące systemów bezpieczeństwa? Skontaktuj się z nami, jesteśmy gotowi odpowiedzieć na wszystkie Twoje pytania i omówić najlepsze rozwiązania dla Twojego biznesu.",
    keywords: "kontakt, systemy bezpieczeństwa, pytania dotyczące bezpieczeństwa, rozwiązania bezpieczeństwa"
};

const title = "Skontaktuj się";
const phoneNumber = "+48 609 845 568";
const email = "biuro@teslasystem.pl";

const Contact = () => {
    return (
        <div className="flex-grow p-4 lg:p-8 mt-16 self-center w-full max-w-lg mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center">{title}</h1>
            <p className="text-center font-semibold text-lg">{phoneNumber}</p>
            <p className="text-center font-semibold text-lg mb-8">{email}</p>
            <ContactForm />
        </div>
    );
};

export default Contact;
