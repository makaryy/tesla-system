const HomeHero = () => {
    return (
        <section className="relative flex gap-6 px-7 lg:px-20 pb-6 pt-20 justify-between items-center bg-fixed bg-cover bg-[url('/hero.jpg')] min-h-screen w-full before:content-[''] before:absolute before:inset-0 before:bg-black/50">
            <div className="relative space-y-4 max-w-7xl mx-auto">
                <h1 className="text-4xl lg:text-5xl text-bg-100/90 font-bold flex-auto min-w-xs ">
                    Profesjonalne rozwiązania ochrony i bezpieczeństwa dla Ciebie
                </h1>
                <article className="space-y-12 flex-1 min-w-xs text-bg-100/90 ">
                    <p className="text-lg">
                        Specjalizujemy się w dostarczaniu najlepszej jakości rozwiązań ochrony i bezpieczeństwa Twojej własności i
                        ukochanych. Z naszymi najnowocześniejszymi systemami i doświadczonym zespołem możesz mieć pewność, że jesteś w
                        dorych rękach.
                    </p>
                    <div className="flex gap-4 my-6">
                        <button className="border-2 border-primary-100 px-6 py-3 rounded-md bg-primary-100 text-bg-100 capitalize text-sm hover:shadow-sm transition-shadow">
                            Oferta
                        </button>
                        <button className="border-2 border-bg-100 px-6 py-3 rounded-md capitalize text-sm text-bg-100 hover:shadow-sm transition-shadow">
                            Skontaktuj się
                        </button>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default HomeHero;
