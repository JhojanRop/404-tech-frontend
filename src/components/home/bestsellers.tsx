import Card from "../ui/Card";

const Bestsellers = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 h-[70vh] bg-[#1c1c1c]">
            <div className="flex flex-col items-start w-3/4">
                <h2 className="font-bold text-2xl">BEST SELLERS</h2>
            </div>
            <div className="w-3/4">
                <div className="grid grid-cols-4 gap-4">
                    <Card
                        image="/image-test.jpg"
                        title="Product 1"
                        price="$10.00"
                        sale={true}
                    />
                    <Card
                        image="/image-test.jpg"
                        title="Product 2"
                        price="$20.00"
                        sale={false}
                    />
                    <Card
                        image="/image-test.jpg"
                        title="Product 3"
                        price="$30.00"
                        sale={false}
                    />
                    <Card
                        image="/image-test.jpg"
                        title="Product 4"
                        price="$40.00"
                        sale={false}
                    />
                </div>
            </div>
        </div>
    )
}

export default Bestsellers;