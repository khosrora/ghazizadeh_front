import TitleSection from "../../sharedUi/TitleSection";




const AccessoriesMe = () => {
    return (
        <>
            <TitleSection
                title="لوازم جانبی خودرو"
                span
            />
            <div className="hidden lg:grid grid-cols-3 grid-rows-2 gap-4 lg:h-[424px]">
                <div className="row-span-2 bg-green-400">1</div>
                <div className="bg-gray-500">2</div>
                <div className="col-start-2 row-start-2 bg-yellow-500">3</div>
                <div className="row-span-2 col-start-3 row-start-1 bg-blue-500">4</div>
            </div>
        </>
    );
}

export default AccessoriesMe;