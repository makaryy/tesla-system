import Link from "next/link";

const title = "Zabezpiecz z nami swoją własność";
const subtitle = "Skontaktuj się z nami już dziś, aby uzyskać kompleksowe bezpieczeństwo dla Twojego mienia.";
const primaryCta = { href: "/kontakt", label: "Kontakt" };
const secondaryCta = { href: "/oferta", label: "Oferta" };

const BottomSection = () => {
    return (
        <section className="relative flex gap-6 px-7 lg:px-20 pb-6 pt-20 justify-between items-center bg-fixed bg-cover bg-gradient-to-r from-primary-100 to-primary-300 w-full shadow-md ">
            <div className="relative space-y-4 max-w-7xl mx-auto">
                <h2 className="text-4xl lg:text-5xl text-bg-100/90 font-bold flex-auto min-w-xs text-center">{title}</h2>
                <article className="space-y-12 flex-1 min-w-xs text-bg-100/90 ">
                    <p className="text-lg text-center">{subtitle}</p>
                    <div className="flex justify-center gap-4 my-6">
                        <Link
                            href={primaryCta.href}
                            className="border-2 border-accent-100 px-6 py-3 rounded-md bg-accent-100 text-bg-100 text-center capitalize text-sm hover:shadow-sm transition-shadow">
                            {primaryCta.label}
                        </Link>
                        <Link
                            href={secondaryCta.href}
                            className="border-2 border-bg-100 px-6 py-3 rounded-md capitalize text-sm text-bg-100 text-center hover:shadow-sm transition-shadow">
                            {secondaryCta.label}
                        </Link>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default BottomSection;
