import { StarIcon } from "@heroicons/react/24/solid";

export default function SkeletonProduct() {
    return (
        <div className="animate-pulse group relative text-foreground border-r border-b border-gray-200 p-4 sm:p-6">
            <div className="bg-gray-200 w-full mx-auto aspect-square rounded-lg object-cover" />
            <div className="pt-10 pb-4">
                <div className="h-5 my-1 mx-auto bg-gray-200 rounded-sm w-full" />
                <div className="mt-3 flex flex-col items-center">
                    <div className="flex items-center mb-1">
                        {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                                key={rating}
                                aria-hidden="true"
                                className="text-gray-200 size-5 shrink-0 animate-pulse"
                            />
                        ))}
                    </div>
                    <div className="h-5 mx-auto bg-gray-300 rounded w-1/3" />
                </div>
                <div className="h-6 mx-auto mt-4 bg-gray-300 rounded w-1/2"></div>
            </div>
        </div>
    );
}