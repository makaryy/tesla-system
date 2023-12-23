import Image from "next/image";
import Link from "next/link";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";

const year = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="p-2 lg:p-4">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-8 p-4 lg:p-8">
                <div className="h-12">
                    <Image className="w-full h-full object-cover" src="/tesla-system-logo.png" alt="Tesla System Logo" width={90} height={48} />
                </div>
                <ul className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center">
                    <li>
                        <Link className="flex gap-2 items-center font-semibold" href="/oferta">
                            Oferta
                        </Link>
                    </li>
                    <li>
                        <Link className="flex gap-2 items-center font-semibold" href="/onas">
                            O nas
                        </Link>
                    </li>
                    <li>
                        <Link className="flex gap-2 items-center font-semibold" href="/kontakt">
                            Kontakt
                        </Link>
                    </li>
                </ul>
                <ul className="flex gap-2 items-center">
                    <li>
                        <Link
                            className="flex items-center justify-center p-2 rounded-full border-2 border-accent-100"
                            href="mailto:biuro@teslasystem.pl">
                            <MdEmail />
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center justify-center p-2 rounded-full border-2 border-accent-100" href="tel:+48609845568">
                            <MdPhone />
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center justify-center p-2 rounded-full border-2 border-accent-100"
                            href="https://facebook.com/teslasystemhome">
                            <FaFacebookF />
                        </Link>
                    </li>
                </ul>
            </div>
            <hr className="w-full border-accent-100 my-2" />
            <p className="justify-self-start"> &copy; Tesla System {year}</p>
        </footer>
    );
};

export default Footer;
