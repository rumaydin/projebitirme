import { notFound } from "next/navigation";

const pageContent = {
    "seramik-sanati-tarihi": {
        title: "Seramik Sanatı ve Tarihi",
        content: `
            <h2 class="text-2xl font-semibold mb-4">Seramik Nedir?</h2>
            <p class="mb-6">
                Seramik, tarihi çok uzun zaman öncelere dayanan bir sanat formudur. Kullanım alanı geniş olan 
                seramik, toprağın doğal kil hammaddesinden şekillendirilerek yüksek sıcaklıkta pişirilmesiyle elde edilen 
                sert, dayanıklı ve genellikle gözeneksiz bir malzemedir.
            </p>
            <div class="text-center mb-6">
                <img 
                    src="/sernedir.jpg" 
                    alt="Seramik Nedir?" 
                    class="rounded-lg shadow-lg max-w-full h-auto"
                />
            </div>
            <h2 class="text-2xl font-semibold mb-4">Seramik Sanatının Tarihçesi</h2>
            <p>
                İlk seramik eserler, M.Ö. 24.000 yıllarına kadar uzanan buluntularla tarih öncesi çağlarda ortaya 
                çıkmıştır. Sanatçılar tarafından kullanılan seramik, tarih boyunca dekorasyon ve işlevselliği bir araya 
                getiren önemli bir sanat formu olmuştur.
            </p>
        `,
        image: "/seramik-sanati.jpg",
    },
    "malzeme-ve-teknikler": {
        title: "Malzeme ve Teknikler",
        content: `
            <h2 class="text-2xl font-semibold mb-4">Malzemeler</h2>
            <p class="mb-6">
                Seramik yapımında kullanılan temel malzemeler arasında kil, kaolin, feldispat ve kuvars yer alır. Bu malzemeler, 
                seramiğin dayanıklılığını ve estetik görünümünü belirler.
            </p>
            <h2 class="text-2xl font-semibold mb-4">Teknikler</h2>
            <p>
                Seramik üretiminde en yaygın kullanılan teknikler arasında çömlekçilik, döküm ve sırlama bulunur. Bu teknikler, 
                seramik ürünlerin estetik değerini artırır.
            </p>
        `,
        image: "/malzemeler.jpg",
    },
    "sanatcilardan-ilham": {
        title: "Sanatçılardan İlham",
        content: `
            <h2 class="text-2xl font-semibold mb-4">Sanatçıların Eserleri</h2>
            <p>
                Platformumuzdaki sanatçıların hayat hikayelerini ve eserlerini keşfederek, seramik sanatına yeni bir 
                bakış açısı kazanın. Her sanatçının kendine has bir dokunuşu vardır.
            </p>
        `,
        image: "/sanatcilar.jpg",
    },
};

export default function DynamicLibraryPage({ params }) {
    const { slug } = params;
    const content = pageContent[slug];

    if (!content) {
        notFound();
    }

    return (
        <div className="container mx-auto py-10 px-4">
            <div className="text-center mb-8">
                {/* Sayfa Başlığı */}
                <h1 className="text-4xl font-bold mb-6">{content.title}</h1>
                
                {/* Görsel */}
                <div className="relative max-w-4xl mx-auto">
                    <img
                        src={content.image}
                        alt={content.title}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
            
            {/* İçerik */}
            <div
                className="max-w-3xl mx-auto text-lg text-gray-700"
                dangerouslySetInnerHTML={{ __html: content.content }}
            />
        </div>
    );
}

export function generateStaticParams() {
    return Object.keys(pageContent).map((slug) => ({ slug }));
}