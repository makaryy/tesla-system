import Link from "next/link";
import Image from "next/image";

const title = "Profesjonalne rozwiązania ochrony i bezpieczeństwa dla Ciebie";
const subtitle =
    "Specjalizujemy się w dostarczaniu najlepszej jakości rozwiązań ochrony i bezpieczeństwa Twojej własności i ukochanych. naszymi najnowocześniejszymi systemami i doświadczonym zespołem możesz mieć pewność, że jesteś w dorych rękach.";
const primaryCta = { href: "/oferta", label: "Oferta" };
const secondaryCta = { href: "/kontakt", label: "Skontaktuj się" };
const image = { src: "https://res.cloudinary.com/dqyhe8ogi/image/upload/v1703342229/tesla-system/hero_f8wyjq.jpg", alt: "Cameras on a wall" };

const HomeHero = () => {
    return (
        <>
            <div className="absolute -z-10 top-0 w-full h-screen">
                <Image src={image.src} alt={image.alt} className="object-cover object-left" fill priority />
            </div>
            <section className="relative flex gap-6 px-7 lg:px-20 pb-6 pt-20 justify-between items-center min-h-screen w-full bg-black/50">
                <div className="relative space-y-4 max-w-7xl mx-auto">
                    <h1 className="text-4xl lg:text-5xl text-bg-100/90 font-bold flex-auto min-w-xs ">{title}</h1>
                    <article className="space-y-12 flex-1 min-w-xs text-bg-100/90 ">
                        <p className="text-lg">{subtitle} </p>
                        <div className="flex gap-4 my-6">
                            <Link
                                href={primaryCta.href}
                                className="border-2 border-primary-100 px-6 py-3 rounded-md bg-primary-100 text-bg-100 capitalize text-sm hover:shadow-sm transition-shadow">
                                {primaryCta.label}
                            </Link>
                            <Link
                                href={secondaryCta.href}
                                className="border-2 border-bg-100 px-6 py-3 rounded-md capitalize text-sm text-bg-100 hover:shadow-sm transition-shadow">
                                {secondaryCta.label}
                            </Link>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
};

export default HomeHero;
