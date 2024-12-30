"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/app/components/ProductCard";

export default function ProductPage() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [offer, setOffer] = useState(""); // Kullanıcı teklif girişi
    const [submitted, setSubmitted] = useState(false); // Teklif gönderildi mi?

    const openModal = (product) => {
        setSelectedProduct(product);
        setSubmitted(false); // Yeni ürün açıldığında onay mesajını sıfırla
        setOffer(""); // Yeni ürün açıldığında teklif girişini sıfırla
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    const handleSubmitOffer = () => {
        setSubmitted(true); // Teklifin gönderildiğini belirt
    };

    useEffect(() => {
        fetch("/api/data/productData")
            .then((response) => response.json())
            .then((data) => setProducts(data.products))
            .catch((error) => console.error("Error fetching product data:", error));
    }, []);

    return (
        <div className="min-h-screen py-10 px-5">
            <h1 className="text-3xl font-bold text-center mb-10 text-[#4B2E2E]">
                Ürünler
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                        openModal={openModal}
                    />
                ))}
            </div>
            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#F4EDE4] rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                        >
                            ✖
                        </button>
                        <img
                            src={selectedProduct.image}
                            alt="product image"
                            className="max-w-[400px] aspect-square object-cover mx-auto rounded-md mb-4"
                        />
                        <p className="text-[#4B2E2E] mt-4 whitespace-pre-line">
                            {selectedProduct.category}
                        </p>
                        <h2 className="text-3xl font-bold text-[#4B2E2E]">
                            {selectedProduct.title}
                        </h2>
                        <p className="text-[#4B2E2E] mt-4 whitespace-pre-line">
                            {selectedProduct.description}
                        </p>
                        <div className="text-[#4B2E2E] mt-4 flex items-center gap-4">
                            <p>Başlangıç Fiyatı: {selectedProduct.price}</p>
                        </div>
                        {/* Teklif Ver Butonu ve Form */}
                        {!submitted ? (
                            <div className="mt-6">
                                <input
                                    type="number"
                                    placeholder="Teklifinizi girin"
                                    value={offer}
                                    onChange={(e) => setOffer(e.target.value)}
                                    className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
                                />
                                <button
                                    onClick={handleSubmitOffer}
                                    className="w-full bg-[#4B2E2E] text-white py-2 rounded-lg hover:bg-[#6A4C4C]"
                                >
                                    Gönder
                                </button>
                            </div>
                        ) : (
                            <p className="text-green-600 font-bold mt-6">
                                Teklifiniz gönderildi: {offer} TL
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}