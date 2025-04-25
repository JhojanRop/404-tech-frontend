import Button from "../ui/Button";

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[70vh] gap-8 mt-0">
            <div>
                <img src="/image-test.jpg" alt="test" className="" />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <Button variant="bordered" className="px-4 py-2">THE NEWEST</Button>
                <Button variant="bordered" className="px-4 py-2">GET A QUOTE</Button>
                <Button variant="bordered" className="px-4 py-2">OUR RECOMMENDATIONS</Button>
            </div>
        </div>
    )
}

export default Hero;