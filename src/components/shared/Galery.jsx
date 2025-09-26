import Image from "./Image";

function Galery({images=[]}) {
    if (!Array.isArray(images) || images.length === 0) {
        return <p className="text-center text-gray-500">No picture available</p>;
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-4 md:gap-y-6 lg:gap-x-8 py-4">
            {
            images.map((image) => (
                <Image key={image.id} image={image} />
            ))
            }
        </div>
    )
}
export default Galery;