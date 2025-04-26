import ContentLayout from "../ContentLayout";

const Brands = () => {
    return (
        <section>
            <ContentLayout height={30} className="flex items-center">
                <div className="justify-center items-center">
                    <img src="/logos/hp.svg" alt="logo_hp" />
                </div>
                <div className="justify-center items-center">
                    <img src="/image-test.jpg" alt="brand" />
                </div>
                <div className="justify-center items-center">
                    <img src="/image-test.jpg" alt="brand" />
                </div>
                <div className="justify-center items-center">
                    <img src="/image-test.jpg" alt="brand" />
                </div>
                <div className="justify-center items-center">
                    <img src="/image-test.jpg" alt="brand" />
                </div>
            </ContentLayout>
        </section>
    )
}

export default Brands;