import Link from "next/link";
import Logo from "../icons/Logo";

export default function Footer() {
  return (
    <footer className="bg-onyx">
      <div className="min-h-[40dvh] w-11/12 mx-auto flex items-center">
        <div className="w-full h-full md:h-1/2 flex gap-y-5 justify-center md:justify-between items-stretch flex-col-reverse md:flex-row">
          <section className="w-full lg:w-auto flex justify-center">
            <Link href="/" className="flex items-center">
              <Logo className="w-50 mb-4 flex items-center" />
            </Link>
          </section>
          <section className="flex flex-col text-center md:text-left md:flex-row [&>div>a]:underline [&>div]:even:border-y-2 [&>div]:md:even:border-x-2 [&>div]:md:even:border-y-0">
            <nav className="px-7 py-5 md:py-0 flex flex-col justify-evenly gap-1 text-sm md:text-base">
              <h2 className="font-semi text-lg md:text-xl text-white">CUSTOMER SERVICE</h2>
              <Link href="#">ORDER TRACKING</Link>
              <Link href="#">RETURN EXCHANGES</Link>
              <Link href="#">PAYMENT METHODS</Link>
              <Link href="#">FAQS</Link>
            </nav>
            <nav className="px-10 py-5 md:py-0 flex flex-col justify-evenly gap-1 text-sm md:text-base">
              <h2 className="font-semi text-lg md:text-xl text-white">ABOUT US</h2>
              <Link href="#">WHO WE ARE</Link>
              <Link href="#">OUR SERVICES</Link>
              <Link href="#">LOCATION</Link>
              <Link href="#">CONTACT US</Link>
            </nav>
            <nav className="px-7 py-5 md:py-0 flex flex-col justify-evenly gap-1 text-sm md:text-base">
              <h2 className="font-semi text-lg md:text-xl text-white">CATEGORIES</h2>
              <Link href="#">LAPTOPS & COMPUTERS</Link>
              <Link href="#">GAMING & ACCESORIES</Link>
              <Link href="#">MONITORS & PHERIPHERICALS</Link>
              <Link href="#">COMPONENTS & UPGRADES</Link>
            </nav>
          </section>
        </div>
      </div>
      <section className="bg-black w-full py-4 text-xs text-center">
        <p>© 2025 404TECH ALL RIGHTS RESERVED.</p>
      </section>
    </footer>
  )
}
