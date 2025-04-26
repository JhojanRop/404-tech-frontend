import Button from "../ui/Button";

const Newsletter = () => {
    return (
        <div className="flex flex-col min-h-[50vh] w-full justify-center items-center gap-4 bg-black">
            <div>
                <h2 className="font-bold text-xl lg:text-2xl">Subscribe to our newsletter</h2>
            </div>
            <div>
                <p className="text-[15px] md:text-xl">Get 10% off your first purchare and exclusive deals</p>
            </div>
            <div className="flex">
                <input type="text" placeholder="Email" className="border px-2" />
                <Button variant="classic" className="px-4 py-2 rounded-none">
                    <span>SEND</span>
                </Button>
            </div>
        </div>
    )
}

export default Newsletter;