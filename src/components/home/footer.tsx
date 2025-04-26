import ContentLayout from "../ContentLayout";

const Footer = () => {
    return (
        <footer className="bg-onyx">
            <div className="min-h-[70dvh] w-11/12 mx-auto flex items-center">
                <div className="w-full h-full md:h-1/2 flex gap-y-5 justify-center md:justify-between items-stretch flex-col-reverse md:flex-row">
                    {/* Logo */}
                    <div className="w-full lg:w-auto flex justify-center">
                        <img src="/image-test.jpg" alt="footer" className="w-32" />
                    </div>

                    {/* Secciones de links */}
                    <div className="flex flex-col text-center md:text-left md:flex-row [&>div>a]:underline [&>div]:even:border-y-2 [&>div]:md:even:border-x-2 [&>div]:md:even:border-y-0">
                        {/* Grupo 1 */}
                        <div className="px-7 py-5 md:py-0 flex flex-col justify-evenly gap-1 text-sm md:text-base">
                            <h2 className="font-semi text-lg md:text-xl text-white">CUSTOMER SERVICE</h2>
                            <a href="#">ORDER TRACKING</a>
                            <a href="#">RETURN EXCHANGES</a>
                            <a href="#">PAYMENT METHODS</a>
                            <a href="#">FAQS</a>
                        </div>

                        {/* Grupo 2 */}
                        <div className="px-10 py-5 md:py-0 flex flex-col justify-evenly gap-1 text-sm md:text-base">
                            <h2 className="font-semi text-lg md:text-xl text-white">ABOUT US</h2>
                            <a href="#">WHO WE ARE</a>
                            <a href="#">OUR SERVICES</a>
                            <a href="#">LOCATION</a>
                            <a href="#">CONTACT US</a>
                        </div>

                        {/* Grupo 3 */}
                        <div className="px-7 py-5 md:py-0 flex flex-col justify-evenly gap-1 text-sm md:text-base">
                            <h2 className="font-semi text-lg md:text-xl text-white">CATEGORIES</h2>
                            <a href="#">LAPTOPS & COMPUTERS</a>
                            <a href="#">GAMING & ACCESORIES</a>
                            <a href="#">MONITORS & PHERIPHERICALS</a>
                            <a href="#">COMPONENTS & UPGRADES</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <div className="bg-black w-full py-4 text-xs text-center">
                <p>© 2025 404TECH ALL RIGHTS RESERVED.</p>
            </div>
        </footer>

    )
}

export default Footer;