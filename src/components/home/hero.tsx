'use client'
import ContentLayout from "../ContentLayout";
import Button from "../ui/Button";

const Hero = () => {
    return (
        <section>
            <ContentLayout className="flex flex-col justify-evenly">
                <div>
                    <img src="/image-test.jpg" alt="test" className="w-full max-h-[70dvh] aspect-video" />
                </div>
                <div className="flex flex-col gap-y-5 md:flex-row justify-between">
                    <Button variant="bordered" className="px-4 py-2 uppercase">The newest</Button>
                    <Button variant="bordered" className="px-4 py-2 uppercase">Our recomendations</Button>
                    <Button variant="bordered" className="px-4 py-2 uppercase">Get a coute</Button>
                </div>
            </ContentLayout>
        </section>
    )
}

export default Hero;