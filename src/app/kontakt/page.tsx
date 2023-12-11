import { ContactForm } from "./ContactForm";

const Contact = () => {
    return (
        <div className="flex-grow p-4 lg:p-8 mt-16 self-center w-full max-w-lg mx-auto">
            <div className="mt-8">
                <h1 className="text-4xl font-bold mb-8 text-center">Skontaktuj się</h1>
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
