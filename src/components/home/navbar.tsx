'use client'
import { HomeIcon, BuildingStorefrontIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/solid";
import Logo from "../icons/Logo";
import Button from "../ui/Button";
import Link from "next/link";
import IconButton from "../ui/IconButton";

export default function Navbar() {
    return (
        <header className="h-20 px-5 flex items-center">
            <Link href="/" ><Logo className="w-26" /></Link>

            <nav className="flex grow justify-center gap-2">
                <Button variant="icon" type="link" href="/" selected icon={<HomeIcon width={24} />}>Home</Button>
                <Button variant="icon" type="link" href="/products" icon={<BuildingStorefrontIcon width={24} />}>Store</Button>
                <Button variant="icon" type="link" href="/search" icon={<MagnifyingGlassIcon width={24} />}>Search</Button>
            </nav>

            <div className="flex gap-2">
                <IconButton icon={<ShoppingCartIcon width={16} />} quantity={0} />
                <IconButton icon={<UserIcon width={16} />} />
            </div>
        </header>
    )
}