import React from "react";

const libraryContent = [
    {
        id: 1,
        title: "Seramik Sanatı Tarihi",
        excerpt: "Seramik sanatının kökenlerini ve tarihsel gelişimini keşfedin.",
        slug: "seramik-sanati-tarihi",
        image: "/seramiksantar.png",
    },
    {
        id: 2,
        title: "Malzeme ve Teknikler",
        excerpt: "Seramik yapımında kullanılan malzemeler ve teknikler hakkında bilgi edinin.",
        slug: "malzeme-ve-teknikler",
        image: "/malzvetek.png",
    },
    {
        id: 3,
        title: "Sanatçılardan İlham",
        excerpt: "Platformumuzdaki sanatçıların hikayelerini ve eserlerini inceleyin.",
        slug: "sanatcilardan-ilham",
        image: "/Sanatcilardanilham.png",
    },
];

const LibraryPage = () => {
    return (
        <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", color: "#4B2E2E" }}>
            <div
                style={{
                    textAlign: "center",
                    marginBottom: "40px",
                }}
            >
                <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>Kütüphane</h1>
                <p style={{ fontSize: "20px", marginTop: "10px" }}>
                    Seramik sanatını keşfetmek ve daha fazla bilgi edinmek için aşağıdaki içeriklere göz atın.
                </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                {libraryContent.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                            borderRadius: "12px", // Daha yuvarlak köşeler
                            padding: "20px",
                            backgroundColor: "#F4EDE4", // Kutucukların yeni arka plan rengi
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Yumuşak bir gölge
                            border: "1px solid #D6C6B5",
                        }}
                    >
                        {/* Görsel Kısmı */}
                        <div style={{ flex: "1" }}>
                            <img
                                src={item.image}
                                alt={item.title}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "10px",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                        {/* Metin Kısmı */}
                        <div style={{ flex: "2" }}>
                            <h2
                                style={{
                                    fontSize: "24px",
                                    marginBottom: "15px",
                                    fontWeight: "bold",
                                    color: "#4B2E2E",
                                }}
                            >
                                {item.title}
                            </h2>
                            <p style={{ fontSize: "18px", marginBottom: "20px", color: "#5A3E3E" }}>
                                {item.excerpt}
                            </p>
                            <a
                                href={`/library/${item.slug}`}
                                style={{
                                    fontSize: "16px",
                                    color: "#4B2E2E",
                                    textDecoration: "none",
                                    fontWeight: "bold",
                                }}
                            >
                                Daha Fazla Oku →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LibraryPage;