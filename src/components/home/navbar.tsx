import Button from "../ui/Button";

const Navbar = () => {
    return (
        <div className="flex w-full justify-between items-center h-[10vh] fixed top-0 left-0 z-10 px-4 bg-black">
            <div></div>
            <div className="flex gap-4">
                <Button variant="classic" className="px-4 py-2 color-black">
                    <span>HOME</span>
                </Button>
                <Button variant="classic" className="px-4 py-2 color-black">
                    <span>STORE</span>
                </Button>
                <Button variant="classic" className="px-4 py-2 color-black">
                    <span>SEARCH</span>
                </Button>
            </div>
            <div></div>
        </div>
    )
}

export default Navbar;