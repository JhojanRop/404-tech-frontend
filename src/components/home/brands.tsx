const Brands = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-12 px-8 w-full min-h-[40vh] bg-black">
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
        </div>
    )
}

export default Brands;