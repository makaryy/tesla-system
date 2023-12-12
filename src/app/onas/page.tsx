import AboutUsSlider from "./AboutUsSlider";

const About = () => {
    return (
        <div className="flex-grow p-4 lg:p-8 mt-16 self-center w-full max-w-8xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">O nas</h1>
            <p className="text-lg mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel leo a ligula bibendum aliquam. Nullam auctor sem in metus
                fringilla, at vestibulum purus consectetur.
            </p>

            <AboutUsSlider />
        </div>
    );
};

export default About;
