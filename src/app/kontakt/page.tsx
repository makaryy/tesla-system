import { ContactForm } from "./ContactForm";

const Contact = () => {
    return (
        <div className="flex-grow p-4 lg:p-8 mt-16 self-center w-full max-w-lg mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Skontaktuj się</h1>
            <ContactForm />
        </div>
    );
};

export default Contact;
