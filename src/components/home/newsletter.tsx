'use client'
import ContentLayout from "../ContentLayout";

const Newsletter = () => {
    return (
        <section>
            <ContentLayout height={50} className="flex flex-col justify-center text-center">
                <h2 className="font-semi text-2xl">Subscribe to our newsletter</h2>
                <p className="text-porcelain">Get 10% off your first purchare and exclusive deals</p>

                <div className="flex justify-center gap-4 my-4">
                    <input type="text" placeholder="Email" className="border border-white px-4 py-1 max-w-lg flex-grow" />
                    <button className="bg-viridian-600 px-5">Send</button>
                </div>
            </ContentLayout>
        </section>
    )
}

export default Newsletter;