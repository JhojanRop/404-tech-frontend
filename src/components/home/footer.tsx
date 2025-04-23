const Footer = () => {
    return (
        <div className="bg-[#1c1c1c] h-[60vh] flex flex-col items-center justify-center gap-8">
            <div className="w-full px-8 h-full flex items-center justify-between">
                <div>
                    <img src="/image-test.jpg" alt="footer" className="" />
                </div>
                <div className="flex h-full py-24 justify-end gap-4 w-1/2">
                    <div className="flex flex-col">
                        <h2 className="font-bold">CUSTOMER SERVICE</h2>
                        <a href="#">ORDER TRACKING</a>
                        <a href="#">RETURN EXCHANGES</a>
                        <a href="#">PAYMENT METHODS</a>
                        <a href="#">FAQS</a>
                    </div>
                    <div className="bg-white w-[2px]"></div>
                    <div className="flex flex-col">
                        <h2 className="font-bold">ABOUT US</h2>
                        <a href="#">WHO WE ARE</a>
                        <a href="#">OUR SERVICES</a>
                        <a href="#">LOCATION</a>
                        <a href="#">CONTACT US</a>
                    </div>
                    <div className="bg-white w-[2px]"></div>
                    <div className="flex flex-col">
                        <h2 className="font-bold">CATEGORIES</h2>
                        <a href="#">LAPTOPS & COMPUTERS</a>
                        <a href="#">GAMING & ACCESORIES</a>
                        <a href="#">MONITORS & PHERIPHERICALS</a>
                        <a href="#">COMPONENTS & UPGRADES</a>
                    </div>
                </div>
            </div>
            <div className="bg-black w-full h-[10vh] flex flex-col items-center justify-center text-xs">
                <p>© 2025 404TECH ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    )
}

export default Footer;