export default function ProductCard({ product, openModal }) {
    return (
        <div
            onClick={() => openModal(product)}
            className="bg-[#F4EDE4] shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
        >
            <img
                src={product.image}
                alt="product image"
                className="w-full aspect-square object-cover rounded-md"
            />
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-[#4B2E2E]">
                    {product.title}
                </h2>
                <p className="text-[#4B2E2E] mt-4">{product.description}</p>
            </div>
        </div>
    );
}