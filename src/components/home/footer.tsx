const Footer = () => {
    return (
        <div className="bg-[#1c1c1c] min-h-[60vh] flex flex-col items-center justify-center gap-8 py-8">
            <div className="w-full px-4 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
                {/* Logo */}
                <div className="w-full lg:w-auto flex justify-center">
                    <img src="/image-test.jpg" alt="footer" className="w-32" />
                </div>

                {/* Secciones de links */}
                <div className="flex flex-col sm:flex-row justify-center lg:justify-end gap-6 w-full lg:w-2/3 text-center lg:text-left">
                    {/* Grupo 1 */}
                    <div className="flex flex-col gap-1">
                        <h2 className="font-bold text-white">CUSTOMER SERVICE</h2>
                        <a href="#">ORDER TRACKING</a>
                        <a href="#">RETURN EXCHANGES</a>
                        <a href="#">PAYMENT METHODS</a>
                        <a href="#">FAQS</a>
                    </div>

                    {/* Línea divisoria solo visible en pantallas grandes */}
                    <div className="hidden lg:block bg-white w-[2px]"></div>

                    {/* Grupo 2 */}
                    <div className="flex flex-col gap-1">
                        <h2 className="font-bold text-white">ABOUT US</h2>
                        <a href="#">WHO WE ARE</a>
                        <a href="#">OUR SERVICES</a>
                        <a href="#">LOCATION</a>
                        <a href="#">CONTACT US</a>
                    </div>

                    <div className="hidden lg:block bg-white w-[2px]"></div>

                    {/* Grupo 3 */}
                    <div className="flex flex-col gap-1">
                        <h2 className="font-bold text-white">CATEGORIES</h2>
                        <a href="#">LAPTOPS & COMPUTERS</a>
                        <a href="#">GAMING & ACCESORIES</a>
                        <a href="#">MONITORS & PHERIPHERICALS</a>
                        <a href="#">COMPONENTS & UPGRADES</a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-black w-full py-4 text-xs text-center">
                <p>© 2025 404TECH ALL RIGHTS RESERVED.</p>
            </div>
        </div>

    )
}

export default Footer;