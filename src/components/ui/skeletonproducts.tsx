export default function SkeletonProduct() {
    return (
        <div className="animate-pulse bg-white rounded-2xl shadow p-4 space-y-4">
            <div className="bg-gray-200 h-40 rounded-xl" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="h-6 bg-gray-300 rounded w-1/3 mt-2" />
        </div>
    );
}