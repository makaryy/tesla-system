import { MdMailOutline, MdPhoneIphone } from "react-icons/md";
import { SiInstagram, SiFacebook } from "react-icons/si";

const year = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="p-2 lg:p-4">
            <div className="flex flex-col lg:flex-row lg:justify-center gap-4 lg:gap-8 p-4 lg:p-8">
                <div>
                    <p className="font-semibold">Kontakt</p>
                    <ul>
                        <li>
                            <a className="flex gap-2 items-center" href="mailto:tesla-system@gmail.com">
                                <MdMailOutline />
                                tesla-system@gmail.com
                            </a>
                        </li>
                        <li>
                            <a className="flex gap-2 items-center" href="tel:+48609845568">
                                <MdPhoneIphone />
                                +48 609 845 568
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="font-semibold">Social media</p>
                    <ul>
                        <li>
                            <a className="flex gap-2 items-center" href="instagram.com/teslasystem">
                                <SiInstagram />
                                @teslasystem
                            </a>
                        </li>
                        <li>
                            <a className="flex gap-2 items-center" href="facebook.com/teslasystem">
                                <SiFacebook />
                                teslasystem
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="w-full border-text-100" />
            <p className="justify-self-start"> &copy; Tesla System {year}</p>
        </footer>
    );
};

export default Footer;
