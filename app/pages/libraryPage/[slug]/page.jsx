import { notFound } from "next/navigation";

const pageContent = {
    "seramik-sanati-tarihi": {
        title: "Seramik Sanatı ve Tarihi",
        content: [
            "Seramik eserler, kilin şekillendirilip yüksek sıcaklıklarda pişirilmesiyle elde edilen, estetik ve işlevsel öğeler sunan sanat ve zanaat ürünleridir.",
            "Tarihi binlerce yıl öncesine dayanan seramik, geleneksel ve modern tasarımların buluşma noktasıdır. İşte seramik eserler hakkında temel bilgiler:"
        ],
        image: "/deneme.jpeg",
        additionalContent: [
            {
                title: "Seramik Nedir?",
                paragraphs: [
                    "Seramik, tarihi çok uzun zaman öncelere dayanan kullanım alanı geniş toprak gibi doğal kil hammaddesinin çeşitli işlemlerden geçirilerek şekillendirilmesi ve yüksek sıcaklıkta pişirilmesiyle elde edilen sert, dayanıklı ve genellikle gözeneksiz malzemelere seramik denir.",
                    "Seramik hamuru çeşitli işlemler ile oluşturulduktan sonra, kalıba döküm teknikleri kullanılarak istenilen şekil verilir ve şekillendirildikten sonra yüksek sıcaklıkta fırında pişirilir. Fırınlama sayesinde el yapımı seramik ürünler sertleşir ve ısıya dayanıklı hale gelir. El yapımı seramik ile kupa, kase, türk kahvesi fincanı, mumluk vb. ürünler üreterek ev dekorasyonunda çok şık bir uyum yakalamaktadır."
                ]
            },
            {
                title: "Seramik Sanatının Tarihçesi",
                paragraphs: [
                    "Seramik, binlerce yıl öncesine dayanan köklü bir geçmişe sahip olan, insanlığın en eski sanatlarından biridir. İlk seramik eserler, M.Ö. 24.000 yıllarına kadar uzanan buluntularla tarih öncesi çağlarda ortaya çıkmıştır.",
                    "Seramik, insanlık tarihinin başlangıcından beri var olan, güçlü bir sanat ve el sanatıdır. İlk seramik örnekleri, günümüzde Çin, Japonya ve Orta Doğu gibi bölgelerde ortaya çıkmaktadır. Bu erken dönem seramikler, çoğunlukla toprak kaplar, çömlekler ve figürinler gibi temel ihtiyaçları karşılamak amacıyla üretiliyordu.",
                    "Seramiğin ilk örnekleri, taş devrinde ortaya çıkmıştır. İlk seramikler, toprağın su ile karıştırılması ve güneşte kurutulması yoluyla yapılmıştır. Bu ilkel seramikler, genellikle günlük yaşamda kullanılan kaplar ve basit süs eşyaları şeklinde karşımıza çıkar. Özellikle Mezopotamya, Mısır ve Çin gibi medeniyetler, seramik sanatında öncü olmuşlardır.",
                    "M.Ö. 3000 yıllarına gelindiğinde, seramik yapımında önemli ilerlemeler kaydedilmiştir. Mezopotamya'da çömlekçi çarkının icadı, seramik üretimini büyük ölçüde kolaylaştırmıştır. Antik Yunan'da ise, seramikler üzerine işlenen mitolojik hikayeler ve günlük yaşam sahneleri, dönemin kültürel ve sanatsal zenginliğini yansıtır.",
                    "Ortaçağ'da, İslam dünyasında seramik sanatı büyük bir gelişme göstermiştir. İspanya ve İtalya'da üretilen seramikler, detaylı süslemeleri ve renkli desenleri ile dikkat çeker. Rönesans döneminde ise, Avrupa'da seramik sanatına olan ilgi artmış ve bu dönemde üretilen seramikler, günümüze kadar ulaşan değerli sanat eserleri haline gelmiştir.",
                    "Sanayi devrimi ile birlikte seramik üretiminde de büyük değişiklikler yaşanmıştır. Seri üretim teknikleri ile daha hızlı ve daha ekonomik seramikler üretilmeye başlanmıştır. Ancak el yapımı seramikler, özgün tasarımları ve benzersiz dokuları ile günümüzde hala büyük bir ilgi görmektedir. Modern seramik sanatçıları, geleneksel yöntemleri çağdaş tasarımlar ile birleştirerek, sanatlarını bir üst seviyeye taşımaktadır.",
                    "Seramiğin tarihi, insanlığın kültürel ve sanatsal gelişiminin bir yansımasıdır. Geçmişten günümüze kadar uzanan bu yolculukta, seramik sanatı her dönemde farklı bir anlam ve değer kazanmıştır. El yapımı seramikler, hem estetik güzellikleri hem de tarihi önemi ile yaşam alanlarımızı süslemeye devam ediyor. Eğer siz de bu köklü sanatın bir parçasını evinize taşımak istiyorsanız, el yapımı seramik ürünlerimize göz atmayı unutmayın."
                ]
            }
        ]
    },
    "malzeme-ve-teknikler": {
        title: "Malzeme ve Teknikler",
        content: [
            "Seramik yapımında kullanılan malzemeler ve teknikler, eserin kalitesini ve dayanıklılığını belirler. Kil, sır ve çeşitli pişirme teknikleri bu sanatın temel taşlarıdır.",
            "Geleneksel yöntemlerin yanı sıra modern teknolojiler, seramik sanatına yeni boyutlar kazandırmıştır."
        ],
        image: "/malzvetek.png",
        additionalContent: [
            {
                title: "Seramik Malzemesinin Özellikleri",
                paragraphs: [
                    "Seramik, binlerce yıldır kullanılan ve hem estetik hem de işlevsel özelliklere sahip bir malzemedir. Günlük hayatımızda kullandığımız birçok eşyadan mutfak gereçlerine, sanat eserlerine kadar geniş bir yelpazede yer alır. Peki, seramiği bu kadar özel kılan nedir?",
                    "<span class='font-bold text-lg'>Dayanıklılık:</span> Seramik, yüksek sıcaklıklara ve aşınmaya karşı dayanıklıdır. Bu özelliği, mutfak eşyaları, zemin ve duvar kaplamaları gibi uygulamalarda tercih edilmesini sağlar.",
                    "<span class='font-bold text-lg'>Sertlik:</span> Seramik, metallerden daha sert bir yapıya sahiptir. Bu özelliği sayesinde çizilmeye ve darbelere karşı direnç gösterir.",
                    "<span class='font-bold text-lg'>Kimyasal Direnç:</span> Seramik, çoğu asit ve baza karşı dirençlidir. Bu özelliği, gıda saklama kapları, laboratuvar ekipmanları gibi uygulamalarda tercih edilmesini sağlar.",
                    "<span class='font-bold text-lg'>Yalıtım Özelliği:</span> Seramik, ısı ve elektriği iyi iletmez. Bu özelliği sayesinde fırın ve ocak gibi uygulamalarda tercih edilir.",
                    "<span class='font-bold text-lg'>Çeşitlilik:</span> Seramik, farklı renk, desen ve dokulara sahip olabilen çok yönlü bir malzemedir. Bu özelliği sayesinde her zevke uygun ürünlerin üretilmesini sağlar.",
                    "<span class='font-bold text-lg'>Doğal ve Ekolojik:</span> Seramik doğal hammaddelerden elde edilir ve geri dönüştürülebilir bir malzemedir.",
                    "<span class='font-bold text-lg'>Estetik Görünüm:</span> Seramik, benzersiz dokuları ve renkleriyle estetik bir görünüm sunar.",
                    "<span class='font-bold text-lg'>Uzun Ömürlü:</span> Seramik ürünler, doğru bakımla uzun yıllar boyunca kullanılabilir.",
                    "<span class='font-bold text-lg'>Hijyenik:</span> Seramik, bakteri ve mikropların üremeye uygun bir ortam değildir.",
                    "El yapımı seramik ürünler, her bir parçasının benzersiz olmasını sağlayan ve sanatsal bir dokunuş katan özel bir üretim sürecine sahiptir. Her bir ürün, zanaatkarın elinden çıkan özgün bir eserdir.",
                    "Seramik, dayanıklılığı, estetik görünümü ve çok yönlülüğü ile birçok uygulamada tercih edilen bir malzemedir. Özellikle el yapımı seramik ürünler, benzersiz tasarımları ve yüksek kaliteleri ile evlerinizi ve hayatınızı renklendirebilir."
                ]
            },
            {
                title: "Seramik Türleri Neledir?",
                paragraphs: [
                    "El yapımı seramikler, farklı teknikler ve malzemeler kullanılarak oluşturulan çeşitli türlerde gelir.",
                    "<span class='font-bold text-lg'>Çömlekçilik:</span> Çömlekçilik, en eski seramik yapma tekniklerinden biridir. Bu teknikte, kil çömlek çarkı üzerinde şekillendirilir. Çömlekçi çarkı kullanılarak yapılan ürünler arasında kaseler, vazolar, çömlekler ve bardaklar bulunur.",
                    "<span class='font-bold text-lg'>Elle Şekillendirme:</span> Elle şekillendirme, seramik ürünlerin elle doğrudan şekillendirildiği bir tekniktir. Bu yöntemle yapılan ürünler benzersiz ve kişiseldir. Yaygın olarak heykelcikler, dekoratif objeler ve sanat eserleri yapılır.",
                    "<span class='font-bold text-lg'>Döküm Tekniği:</span> Bu teknikte, kil veya seramik çamuru, bir kalıba dökülerek şekillendirilir. Döküm tekniği, özellikle çok sayıda aynı ürünü üretmek için kullanılır. Seramik tabaklar, seramik Türk kahvesi fincanları ve seramik kupalar gibi ürünler bu yöntemle yapılabilmektedir.",
                    "<span class='font-bold text-lg'>Levha Yöntemi:</span> Levha yöntemi, kilin ince levhalar halinde açılıp şekillendirildiği bir tekniktir. Bu levhalar kesilir, bükülür veya birleştirilerek farklı şekiller oluşturulur. Kutular, tepsiler ve plaketler gibi ürünler bu yöntemle yapılabilir.",
                    "<span class='font-bold text-lg'>Kağıt Kil Tekniği:</span> Kağıt kil, kağıt hamurunun kil ile karıştırılmasıyla elde edilir. Bu malzeme hafif ve dayanıklıdır. Kağıt kil tekniği ile yapılan ürünler, genellikle dekoratif ve hafif objeler olup, ince detaylar ve karmaşık şekiller için idealdir.",
                    "<span class='font-bold text-lg'>Raku Seramik:</span> Raku seramik, Japonya kökenli bir tekniktir ve özel bir fırınlama yöntemi kullanılarak yapılır. Raku fırınlaması sırasında, ürünler sıcak fırından çıkarılır ve hemen soğutma işlemine tabi tutulur. Bu, çarpıcı ve benzersiz yüzey efektleri yaratır. Raku seramikler, özellikle dekoratif vazolar, kupalar ve kaseler için popülerdir.",
                    "El yapımı seramiklerin bu çeşitli türleri, hem fonksiyonel hem de estetik amaçlarla kullanılabilir. Her bir teknik, farklı bir tarz ve özellik sunar, bu da el yapımı seramikleri benzersiz ve değerli kılar."
                ]
            }
        ]
    },
    "sanatcilardan-ilham": {
        title: "Sanatçıların İlham Reçeteleri",
        content: [
            "Sanat, her zaman kişisel ve toplumsal ifadelerin bir yansıması olmuştur. Seramik sanatçıları, geçmişten günümüze eserleriyle insanlara ilham vermiştir.",
            "Sanatçıların yaşam öyküleri ve eserleri, yaratıcı süreçler hakkında değerli bilgiler sunar."
        ],
        image: "/Sanatcilardanilham.png",
        artists: [
            {
                name: "Alev Ebüzziya Siesbye",
                image: "/alev.jpg",
                interview: {
                    questions: [
                        {
                            question: "Kullandığınız sanat uygulamaları?",
                            answer:
                                "Kullandığım çok fazla sanat uygulaması vardı. Mesela gittiğiniz şehirdeki bütün galeri ve müzeleri gösteren, programlarını anlatan; pandemide 'Nasıl olsa gidemiyorum' diye düşünüp hepsini sildim, pişmanım."
                        },
                        {
                            question: "Takip ettiğiniz sanat platformları?",
                            answer:
                                "Venedik Bienali vazgeçilmezim. Berlinale, Art on Paper ve dünyadaki çoğu baskı atölyelerini takip edip, izliyorum."
                        },
                        {
                            question: "Dünyada ve Türkiye'de takip ettiğiniz galeri ve müzeler?",
                            answer:
                                "Galeri Perrotin, Anna Laudel Galeri, Koenig Galeri, Fremin Galeri, Galeri Siyah Beyaz, Quidley&co, David Zwitner, Gagosian favori galerilerim ama adını buraya yazamadığım daha fazla isim takip ediyorum."
                        },
                        {
                            question: "Son dönemde ilginizi çeken sanat akımları?",
                            answer:
                                "Performans sanatına ilgi duymaya, izlemeye başladım. Sanırım video sanatıyla alakalı da eserler üreteceğim. Sanal müze ve galeri gezmiyorum, çok tuhaf geliyor. Sadece Instagram'da eser görsellerine bakıyorum."
                        },
                        {
                            question: "Sosyal medyada takip ettiğiniz ve beğendiğiniz sanat hesapları?",
                            answer:
                                "Art Agenda, E-flux, Art kunst Magazine, Art Newspaper, Elephant Magazine... sanırım sosyal medyayı sırf bu yüzden takip ediyorum."
                        }
                    ]
                }
            },
            {
                name: "Jale Yılmabaşar",
                image: "/jale_yilmabasar.jpg",
                interview: {
                    questions: [
                        {
                            question: "Şu ana kadar gezdiğiniz en unutulmaz sergi hangisiydi?",
                            answer:
                                "MoMa New York'da Marina Abromovic'in 'Artist is Present' sergisi, Guggenheim New York'da Louise Bourgeois retrospektifi ve Singapore National müzesinde Yayoi Kusama sergisi ve Tate Modern'de Modigliani sergisi unutulmazlarım."
                        },
                        {
                            question: "Hayal kurmak serbest olsaydı, hangi sanatçının, hangi eserine sahip olmak isterdiniz?",
                            answer:
                                "Amedeo Modigliani."
                        },
                        {
                            question: "Zamanda yolculuk imkanı olsa hangi dönemde, hangi sanatçılarla bir yemek masasında buluşurdunuz?",
                            answer:
                                "Hemingway, Zaha Hadid, Frida, Modigliani, Monet, Dan Flavin, Oğuz Atay ve Andy Warhol. Hepsinin kafasını çok merak ediyorum."
                        },
                        {
                            question: "Müze dükkanlarından mutlaka aldığınız ve koleksiyonunu yaptığınız bir obje?",
                            answer:
                                "Müze dükkanlarında bütün sanatçı edisyonlarını ve tasarım objelerini toplar çıkarım. En sevdiğim yerlerdir."
                        },
                        {
                            question: "Takip ettiğiniz sanat fuarlar?",
                            answer:
                                "Art Basel, Frieze, CI, Art Karlsruhe, Documenta, Armory ve sayamadığım nicelerini takipteyim."
                        }
                    ]
                }
            },
            {
                name: "Burçak Bingöl",
                image: "/burcak_bingol.jpg",
                interview: {
                    questions: [
                        {
                            question: "Takip ettiğiniz sanat platformları?",
                            answer:
                                "Artsy.net"
                        },
                        {
                            question: "Dünyada ve Türkiye'de takip ettiğiniz galeriler?",
                            answer:
                                "Perrotin Gallery, Gagosian, Pace Gallery, Unit London. Ülkemizde de aktif olan nerdeyse tüm galerileri takip etmeye çalışıyorum."
                        },
                        {
                            question: "Son dönemde ilginizi çeken sanat akımları?",
                            answer:
                                "Sanat akımlarından çok yeni denenmekte olan teknikler, deneyimler ve bunların sonucunda ortaya çıkan eserler ilgimi çekiyor. Artık sosyal medya sayesinde dünyanın bir ucunda yapılmış yeni ve farklı bir eseri anında görme şansımız oluyor. Özellikle Uzak Doğu ülkelerinde çok ilgimi çeken yapıtlarla karşılaşıyorum. Mesela son yıllarda eserlerini çok beğendiğim bir Japon sanatçı var: Instagram hesabı @misteryanen bir göz atmanızı arzu ederim."
                        },
                        {
                            question: "Sosyal medyada takip ettiğiniz ve beğendiğiniz sanat hesapları hangileri?",
                            answer:
                                "Kaws, Takashi Murakami gibi sanatçıların hesaplarını takip etmeye çalışıyorum. Hem tasarım yönü güçlü hem de dinamik sanatçıların hesaplarını çok beğeniyorum. Ayrıca yine yoğun olarak Youtube'da sinema ile ilgili paylaşımlar yapan hesaplar ilgimi çekiyor. Mesela son yıllarda FluTv bu konuda oldukça sık takip ettiğim bir Youtube kanalı."
                        }
                    ]
                }
            },
            {
                name: "Sadi Diren",
                image: "/sadi_diren.jpg",
                interview: {
                    questions: [
                        {
                            question: "Şu ana kadar gezdiğiniz en unutulmaz sergi hangisiydi?",
                            answer:
                                "2004 yılında Fransa Musee Maillol'de gezdiğim Francis Bacon sergisi."
                        },
                        {
                            question: "Hayal kurmak serbest olsaydı, hangi sanatçının, hangi eserine sahip olmak isterdiniz?",
                            answer:
                                "Alexandre Cabanel'in 1847 tarihli 'Fallen Angel' eserine. Bu resim, dünya sanat tarihinde en sevdiğim eserdir."
                        },
                        {
                            question: "Zamanda yolculuk imkanı olsa hangi dönemde, hangi sanatçılarla bir yemek masasında buluşurdunuz?",
                            answer:
                                "Leonardo Da Vinci ile bir masada oturup konuşmayı çok isterdim. Sadece ressam olarak değil; bilimsel konularda da çalışmaları olduğu için yaşadığı döneme karşı olan bakış açısını çok merak ediyorum."
                        },
                        {
                            question: "Sosyal medyada takip ettiğiniz ve beğendiğiniz sanat hesapları hangileri?",
                            answer:
                                "Kaws, Takashi Murakami gibi sanatçıların hesaplarını takip etmeye çalışıyorum. Hem tasarım yönü güçlü hem de dinamik sanatçıların hesaplarını çok beğeniyorum. Ayrıca yine yoğun olarak Youtube'da sinema ile ilgili paylaşımlar yapan hesaplar ilgimi çekiyor. Mesela son yıllarda FluTv bu konuda oldukça sık takip ettiğim bir Youtube kanalı."
                        },
                        {
                            question: "Kullandığınız sanat uygulamaları?",
                            answer:
                                "Smartify ve Artsy."
                        },
                    ]
                }
            },
            {
                name: "Ayşegül Türedi Özen",
                image: "/aysegul_turedi_ozen.jpg",
                interview: {
                    questions: [
                        {
                            question: "Takip ettiğiniz sanat platformları?",
                            answer:
                                "Artsy, Art Observed, Artxdesign, Kolekta, Artforum, Artkolik, Base."
                        },
                        {
                            question: "Dünyada ve Türkiye'de takip ettiğiniz galeri ve müzeler?",
                            answer:
                                "Gagosian, Ropac, Perrotin, Pace, Lisson, Dirimart, Galeri Siyah Beyaz, Nev, Anna Laudel. Aslında Türkiye'de belli başlı tüm galeri ve müzeleri takip ediyorum."
                        },
                        {
                            question: "Sosyal medyada takip ettiğiniz ve beğendiğiniz sanat hesapları?",
                            answer:
                                "@tate, @arteristanbul, @istanbulmodern."
                        },
                        {
                            question: "Şu ana kadar gezdiğiniz en unutulmaz sergi?",
                            answer:
                                "Bill Viola- 'Electronic Renaissance,' Damien Hirst – 'Treasures from Wreck' ve Royal Academy'de Antony Gormley sergisi."
                        },
                        {
                            question: "Hayal kurmak serbest olsaydı, hangi sanatçının, hangi eserine sahip olmak isterdiniz?",
                            answer:
                                "Tek bir eser seçmek çok zor. Ellsworth Kelly, Anselm Kiefer, Antony Gormley, ya da Camille Claudel'in bir işi olabilir."
                        },
                        {
                            question: "Takip ettiğiniz sanat fuarları?",
                            answer:
                                "Art Basel, Armory, Frieze, CI."
                        }
                    ]
                }
            },
            {
                name: "Hakkı İzzet",
                image: "/hakkı_izzet.jpg",
                interview: {
                    questions: [
                        {
                            question: "Müze dükkanlarından mutlaka aldığınız ve koleksiyonunu yaptığınız bir obje?",
                            answer:
                                "Cetvel."
                        },
                        {
                            question: "Zamanda yolculuk imkanı olsa hangi dönemde, hangi sanatçılarla bir yemek masasında buluşurdunuz?",
                            answer:
                                "Monet'nin Giverny'deki evinin bahçesinde, dönemin sanatçıları ile birlikte bir yemek yemek isterdim."
                        },
                        {
                            question: "Takip ettiğiniz sanat platformları?",
                            answer:
                                "Çok sık girememekle beraber Artsy, Google Arts & Culture, Art Daily."
                        },
                        {
                            question: "Dünyada ve Türkiye'de takip ettiğiniz galeriler?",
                            answer:
                                "Instagram sağolsun neredeyse hepsini takip edebiliyoruz."
                        },
                        {
                            question: "Gezdiğiniz sanal müze ve galeriler?",
                            answer:
                                "Sanal ortamlara hala ısınamadım ama ilgimi çeken sergiler oldukça girip bakıyorum. En son MoMa'ya baktım. Karantina günlerinde WhatsApp gruplarında sanal turlar listesi dönüyordu; o dönemde Vatican Müzesi, Picasso Müzesi ve Metropolitan gibi onlarca müze ve galeriyi incelemiştim."
                        },
                        {
                            question: "Sosyal medyada takip ettiğiniz ve beğendiğiniz sanat hesapları?",
                            answer:
                                "@artfullivingart ve @arteristanbul."
                        }
                    ]
                }
            },
            {
                name: "Alev Demirkesen",
                image: "/alev_demirkesen.jpg",
                interview: {
                    questions: [
                        {
                            question: "Şu ana kadar gezdiğiniz en unutulmaz sergi hangisiydi?",
                            answer:
                                "Ali Cabbar'ın çok eskilerde yaptığı 'Huzursuz Gölge' sergisi beni çok etkilemişti. Serginin yılını hatırlayamadım."
                        },
                        {
                            question: "Hayal kurmak serbest olsaydı, hangi sanatçının, hangi eserine sahip olmak isterdiniz?",
                            answer:
                                "Francis Bacon'ın Study after Velazquez's Portrait of Pope Innocente X eserine."
                        },
                        {
                            question: "Zamanda yolculuk imkanı olsa hangi dönemde, hangi sanatçılarla bir yemek masasında buluşurdunuz?",
                            answer:
                                "1950/60'lı yıllarda Simone De Beauvoir ve Jean Paul Sartre'ın yemek masasında olmak isterdim."
                        },
                        {
                            question: "Müze dükkanlarından mutlaka aldığınız ve koleksiyonunu yaptığınız bir obje?",
                            answer:
                                "Silgi, kalem ve not defteri."
                        },
                        {
                            question: "Takip ettiğiniz sanat fuarlar?",
                            answer:
                                "Art Basel, Art Dubai, Armory Show, Frieze, tüm bienaller ve Türkiye'deki fuarlar elbette."
                        },
                        {
                            question: "Kullandığınız sanat uygulamaları?",
                            answer:
                                "Artsy ve Google Art & Culture"
                        }
                    ]
                }
            },
            {
                name: "Salim Yaşar",
                image: "/salim_yasar.jpg",
                interview: {
                    questions: [
                        {
                            question: "Dünyada ve Türkiye'de takip ettiğiniz galeriler?",
                            answer:
                                "Whitecube, Gagosian, Galeri Senda."
                        },
                        {
                            question: "Gezdiğiniz sanal müze ve galeriler?",
                            answer:
                                "Sanal olarak hiç gezmedim."
                        },
                        {
                            question: "Sosyal medyada takip ettiğiniz ve beğendiğiniz sanat hesapları?",
                            answer:
                                "@Sanatatak, @visual.fodder."
                        },
                        {
                            question: "Şu ana kadar gezdiğiniz en unutulmaz sergi hangisiydi?",
                            answer:
                                "Antony Gormley'in Royal Akademy'deki sergisi."
                        },
                        {
                            question: "Hayal kurmak serbest olsaydı, hangi sanatçının, hangi eserine sahip olmak isterdiniz?",
                            answer:
                                "Chillida, hangi eseri olursa razıyım."
                        },
                        {
                            question: "Zamanda yolculuk imkanı olsa hangi dönemde, hangi sanatçılarla bir yemek masasında buluşurdunuz?",
                            answer:
                                "Rönesans döneminde Leonardo Da Vinci ile."
                        },
                        {
                            question: "Müze dükkanlarından mutlaka aldığınız ve koleksiyonunu yaptığınız bir obje?",
                            answer:
                                "Spesifik bir obje yok. Ama hepsine girer bakarım."
                        }
                    ]
                }
            },
            {
                name: "Nurdan Arslan",
                image: "/nurdan_arslan.jpg",
                interview: {
                    questions: [
                        {
                            question: "Takip ettiğiniz sanat fuarları?",
                            answer:
                                "Art Basel, The Armory Show, Frieze, CI."
                        },
                        {
                            question: "Kullandığınız sanat uygulamaları?",
                            answer:
                                "Artdog İstanbul, Artful Living, Sanatatak, Art Unlimited, Digiloque, Güncel Sanat Arşivi, Base, E-skop gibi birçok sanat platformunu takip etmeye çalışıyorum."
                        },
                        {
                            question: "Dünyada ve Türkiye'de takip ettiğiniz galeriler?",
                            answer:
                                "MoMa, Gagosian, Tate Modern, Saatchi, Lisson, Pace, Serpentine, Nation Gallery Londra dünyadan takip galerilerden birkaç tanesi. Türkiye'den ise Vision Art Platform, Galeri Nev, Galeri Siyah Beyaz, Arter, İstanbul Modern, Pera Müzesi, Versus Art Project, Elgiz Müzesi ve Artsümer'i yakından takip ediyorum."
                        },
                        {
                            question: "Son dönemde ilginizi çeken sanat akımları?",
                            answer:
                                "İşin açıkçası bu sıralar pek de hakim olmadığım ve henüz anlamaya çalıştığım dijital sanat üzerine okumalar yapıyorum."
                        },
                        {
                            question: "Gezdiğiniz sanal müzeler ve galeriler?",
                            answer:
                                "MoMa, Guggenheim, Uffuzi, British Museum, Leopold Museum gibi müzeleri sanal ortamda olsa bile gezmekten çok keyif alıyorum ama tercihim tabii ki yerinde deneyimlemek."
                        }
                    ]
                }
            },
        ]
    }
};

export default function DynamicLibraryPage({ params }) {
    const { slug } = params;
    const content = pageContent[slug];

    if (!content) {
        notFound();
    }

    if (slug === "sanatcilardan-ilham" && content.artists) {
        return (
            <div className="p-0 m-0 font-sans text-[#4B2E2E]">
                {/* Görsel ve Başlık */}
                <div className="relative w-screen h-[400px]">
                    <img
                        src={content.image}
                        alt="Sanatçılardan İlham"
                        className="w-screen h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <h1 className="text-4xl font-bold text-white text-center">
                            Sanatçılardan İlham
                        </h1>
                    </div>
                </div>
    
                {/* Sanatçılar */}
                <div className="mt-10 px-5">
                    <p className="text-lg leading-relaxed mb-6">{content.content[0]}</p>
                    <p className="text-lg leading-relaxed mb-6">{content.content[1]}</p>
    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {content.artists.map((artist, index) => (
                            <div key={index} className="border rounded-lg overflow-hidden shadow-md">
                                <img
                                    src={artist.image}
                                    alt={artist.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{artist.name}</h3>
    
                                    {/* Röportaj Kısmı */}
                                    {artist.interview && (
                                        <div className="mt-4">
                                            {artist.interview.questions.map((q, idx) => (
                                                <div key={idx} className="mb-3">
                                                    <p className="font-medium text-[#4B2E2E]">
                                                        {q.question}
                                                    </p>
                                                    <p className="text-[#7A5C5C]">
                                                        {q.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="p-0 m-0 font-sans text-[#4B2E2E]">
            {/* Görsel ve Başlık */}
            <div className="relative w-screen h-[400px]">
                <img
                    src={content.image}
                    alt={content.title}
                    className="w-screen h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-white text-center">
                        {content.title}
                    </h1>
                </div>
            </div>

            {/* Görsel Altı Kısım */}
            <div className="mt-10 px-5">
                {content.additionalContent &&
                    Array.isArray(content.additionalContent) &&
                    content.additionalContent.map((section, index) => (
                        <div key={index} className="mb-8">
                            <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
                            {section.paragraphs &&
                                Array.isArray(section.paragraphs) &&
                                section.paragraphs.map((paragraph, idx) => (
                                    <p
                                        key={idx}
                                        className="text-lg leading-relaxed mb-4"
                                        dangerouslySetInnerHTML={{ __html: paragraph }}
                                    ></p>
                                ))}
                        </div>
                    ))}
            </div>
        </div>
    );
}

export function generateStaticParams() {
    return Object.keys(pageContent).map((slug) => ({ slug }));
}