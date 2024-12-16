import { notFound } from "next/navigation";

// Sayfa içerikleri
const pageContent = {
    "seramik-sanati-tarihi": {
        title: "Seramik Sanatı Tarihi",
        content: "Seramik sanatı, insanlık tarihinin en eski sanat formlarından biridir.",
        image: "/seramiksantar.png",
    },
    "malzeme-ve-teknikler": {
        title: "Malzeme ve Teknikler",
        content: "Seramik yapımında kullanılan malzemeler ve teknikler hakkında bilgi edinin.",
        image: "/malzvetek.png",
    },
    "sanatcilardan-ilham": {
        title: "Sanatçılardan İlham",
        content: "Platformumuzdaki sanatçıların hayat hikayelerini ve eserlerini inceleyin.",
        image: "/Sanatcilardanilham.png",
    },
};

// Dinamik sayfa içeriği
export default function DynamicLibraryPage({ params }) {
    const { slug } = params;
    const content = pageContent[slug];

    if (!content) {
        notFound(); // Sayfa bulunamazsa 404 göster
    }

    return (
        <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", color: "#4B2E2E" }}>
            <h1 style={{ fontSize: "36px", textAlign: "center" }}>{content.title}</h1>
            <p style={{ fontSize: "18px", lineHeight: "1.6", textAlign: "center" }}>{content.content}</p>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <img
                    src={content.image}
                    alt={content.title}
                    style={{ maxWidth: "100%", borderRadius: "12px" }}
                />
            </div>
        </div>
    );
}

// Statik parametreler oluştur
export function generateStaticParams() {
    return Object.keys(pageContent).map((slug) => ({ slug }));
}