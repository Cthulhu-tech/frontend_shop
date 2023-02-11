export const LoadingCard = () => {
    return  <div className="md:w-1/3">
        <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden bg-white">
        <div className="lg:h-48 bg-gray-400 md:h-96 w-full object-cover object-center"></div>
            <div className="p-6">
                <p className="bg-gray-200 animate-pulse h-4 w-1/4 mb-2"></p>
                <div className="flex items-center flex-wrap">
                    <p className="bg-gray-200 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></p>
                </div>
            </div>
        </div>
    </div>
}