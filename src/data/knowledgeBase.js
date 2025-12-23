// Özellik Tanımları (Attributes)
// 1: Kesinlikle Var, -1: Kesinlikle Yok, 0: Belirsiz/Farketmez

export const PERSONAS = {
    "frontend_developer": {
        id: "frontend_developer",
        title: "Frontend Developer",
        description: "Kullanıcının gördüğü her şeyi sen kodluyorsun. Estetik ve fonksiyonellik senin işin.",
        features: { visual: 1, logic: 1, hardware: -1, math: 0, server: -1, security: 0, users: 1, creative: 1, routine: -1, work_life_balance: 0, strict_environment: -1 },
        stack: ["React", "Vue", "CSS", "Next.js"],
        salary: "Ortalama Üstü",
        companies: ["Trendyol", "Ajanslar"],
        sector: "E-Ticaret / Medya",
        why: "Görsellik, kullanıcı deneyimi ve anında geri bildirim alma tutkusu."
    },
    "backend_developer": {
        id: "backend_developer",
        title: "Backend Developer",
        description: "Sistemin görünmeyen motorunu, veritabanlarını ve API'ları inşa ediyorsun.",
        features: { visual: -1, logic: 1, hardware: 0, math: 0, server: 1, security: 1, users: -1, creative: 0, routine: 1, work_life_balance: 1, strict_environment: 0 },
        stack: ["Java", "Go", "Node.js", "SQL"],
        salary: "Yüksek",
        companies: ["Bankalar", "E-Ticaret"],
        sector: "FinTech / Kurumsal",
        why: "Büyük sistemlerin mimarisini kurma ve veri yönetimi zevki."
    },
    "mobile_developer": {
        id: "mobile_developer",
        title: "Mobile Developer",
        description: "İnsanların elinden düşürmediği uygulamaları geliştiriyorsun.",
        features: { visual: 1, logic: 1, hardware: 0, math: 0, server: 0, security: 0, users: 1, creative: 1, mobile: 1, routine: -1, work_life_balance: 0, strict_environment: -1 },
        stack: ["Swift", "Kotlin", "Flutter", "React Native"],
        salary: "Yüksek",
        companies: ["Getir", "Oyun Firmaları"],
        sector: "Mobil Teknoloji",
        why: "Kullanıcının her an yanında olan, dokunulabilir bir ürün yapma arzusu."
    },
    "game_developer": {
        id: "game_developer",
        title: "Game Developer",
        description: "Hayal gücünü ve fizik kurallarını birleştirip yeni dünyalar yaratıyorsun.",
        features: { visual: 1, logic: 1, hardware: 0, math: 1, server: 0, security: 0, users: 1, creative: 1, game: 1, routine: -1, work_life_balance: -1, strict_environment: -1 },
        stack: ["Unity", "Unreal", "C#", "C++"],
        salary: "Değişken",
        companies: ["Peak", "Dream Games"],
        sector: "Oyun / Eğlence",
        why: "sanal dünyalar yaratma, fizik ve yapay zeka ile oynama tutkusu."
    },
    "data_scientist": {
        id: "data_scientist",
        title: "Data Scientist / AI",
        description: "Verinin içindeki geleceği görüyor, yapay zeka modelleri eğitiyorsun.",
        features: { visual: -1, logic: 1, hardware: 0, math: 1, server: 0, security: 0, users: -1, creative: 0, data: 1, routine: -1, work_life_balance: 0, strict_environment: 0 },
        stack: ["Python", "TensorFlow", "Pandas", "SQL"],
        salary: "Çok Yüksek",
        companies: ["Tech Devleri", "Bankalar"],
        sector: "Yapay Zeka / Finans",
        why: "Verilerden anlam çıkarma ve geleceği tahmin etme merakı."
    },
    "embedded_engineer": {
        id: "embedded_engineer",
        title: "Gömülü Sistem Mühendisi",
        description: "Yazılımı donanımla buluşturuyor, robotları ve cihazları canlandırıyorsun.",
        features: { visual: -1, logic: 1, hardware: 1, math: 1, server: -1, security: 0, users: -1, creative: 0, low_level: 1, routine: 0, work_life_balance: 1, strict_environment: 1 },
        stack: ["C", "C++", "Assembly", "RTOS"],
        salary: "Çok Yüksek",
        companies: ["Savunma Sanayi", "Otomotiv"],
        sector: "Savunma / Otomotiv",
        why: "Yazılımın fiziksel dünyayı etkilemesini ve donanımı kontrol etmeyi sevme."
    },
    "cyber_security": {
        id: "cyber_security",
        title: "Siber Güvenlik Uzmanı",
        description: "Sistemlerin açıklarını bulup kapatıyor veya hackerlara karşı savaşıyorsun.",
        features: { visual: -1, logic: 1, hardware: 0, math: 0, server: 1, security: 1, users: -1, creative: 0, hacking: 1, routine: -1, work_life_balance: -1, strict_environment: 1 },
        stack: ["Kali", "Python", "Network", "PenTest"],
        salary: "Yüksek",
        companies: ["Devlet", "Kurumsal"],
        sector: "Siber Güvenlik",
        why: "Sistem açıklarını bulma (hacking) ve savunma stratejileri kurma heyecanı."
    },
    "devops_engineer": {
        id: "devops_engineer",
        title: "DevOps / Cloud Engineer",
        description: "Yazılımın sorunsuz çalışacağı altyapıyı ve otomasyonu kuruyorsun.",
        features: { visual: -1, logic: 1, hardware: 0, math: 0, server: 1, security: 1, users: -1, creative: 0, infra: 1, routine: 0, work_life_balance: -1, strict_environment: 0 },
        stack: ["Docker", "Kubernetes", "AWS", "Terraform"],
        salary: "Çok Yüksek",
        companies: ["Tüm Büyük Şirketler"],
        sector: "Cloud / Altyapı",
        why: "Otomasyon, sistem kararlılığı ve büyük ölçekli altyapı yönetimi."
    },
    "qa_engineer": {
        id: "qa_engineer",
        title: "Test Otomasyon Mühendisi",
        description: "Hataları avlıyor ve kusursuz ürünler çıkmasını sağlıyorsun.",
        features: { visual: 0, logic: 1, hardware: 0, math: 0, server: 0, security: 0, users: 1, creative: -1, detail_oriented: 1, routine: 1, work_life_balance: 1, strict_environment: 0 },
        stack: ["Selenium", "Cypress", "Java", "Jira"],
        salary: "Ortalama Üstü",
        companies: ["Yazılım Evleri"],
        sector: "Yazılım Kalite",
        why: "Mükemmeliyetçilik, detaylara dikkat ve hatasız ürün çıkarma isteği."
    },
    "blockchain_dev": {
        id: "blockchain_dev",
        title: "Blockchain Developer",
        description: "Merkeziyetsiz finans ve Web3 dünyasını inşa ediyorsun.",
        features: { visual: -1, logic: 1, hardware: 0, math: 1, server: 1, security: 1, users: -1, creative: 0, crypto: 1, routine: -1, work_life_balance: 0, strict_environment: -1 },
        stack: ["Solidity", "Rust", "Web3.js"],
        salary: "Çok Yüksek",
        companies: ["Kripto Borsaları", "Startups"],
        sector: "FinTech / Web3",
        why: "Merkeziyetsizlik felsefesi ve kripto teknolojilerine olan inanç."
    }
};

export const QUESTIONS = [
    {
        id: "q_visual",
        text: "Bir sunum hazırlarken içeriğin kalitesi kadar fontların uyumuna ve renk paletine de kafayı takar mısın?",
        attribute: "visual"
    },
    {
        id: "q_hardware",
        text: "Evdeki bozuk bir elektronik aleti (kumanda, tost makinesi) tamir etmek için içini açmak sana korkutucu değil de eğlenceli mi gelir?",
        attribute: "hardware"
    },
    {
        id: "q_math",
        text: "Büyük bir kavanozdaki şeker sayısını tahmin etmen istense, sadece bakmak yerine matematiksel bir formül geliştirmeye çalışır mısın?",
        attribute: "math"
    },
    {
        id: "q_server",
        text: "Tiyatro izlerken sahnedeki oyunculardan çok, ışıkları, dekoru ve sesleri hatasız yöneten arka plandaki görünmez ekibi mi takdir edersin?",
        attribute: "server"
    },
    {
        id: "q_security",
        text: "Bir binaya girdiğinde gayri ihtiyari olarak 'Acaba güvenlik kameralarının kör noktası neresi?' veya 'Bu kapı ne kadar sağlam?' diye düşündüğün olur mu?",
        attribute: "security"
    },
    {
        id: "q_users",
        text: "Yaptığın bir yemeği başkaları yerken, yüz ifadelerini gizlice izleyip beğenip beğenmediklerini analiz etmek hoşuna gider mi?",
        attribute: "users"
    },
    {
        id: "q_game",
        text: "Gerçek dünyanın fizik kuralları bazen sıkıcı geliyor ve 'Ah şurada çift zıplama (double jump) yapabilseydim' diye hayal kuruyor musun?",
        attribute: "game"
    },
    {
        id: "q_mobile",
        text: "Duygularını ifade etmek için uzun cümleler kurmak yerine, doğru emojiyi veya GIF'i bulmak sana daha pratik ve doğal mı geliyor?",
        attribute: "mobile"
    },
    {
        id: "q_data",
        text: "Dağınık bir çekmeceyi veya karışık bir kitaplığı boşaltıp, her şeyi türüne ve boyutuna göre kategorize etmek sana garip bir huzur verir mi?",
        attribute: "data"
    },
    {
        id: "q_infra",
        text: "Bir LEGO şehri kurarken evlerin dış görünüşünden çok, tren raylarının ve yolların birbirine kusursuz bağlanıp trafiğin akmasıyla mı ilgilenirsin?",
        attribute: "infra"
    },
    {
        id: "q_crypto",
        text: "Otoriteye, bankalara veya 'herkesin yaptığı' kurallara karşı içinde hep ufak bir isyankar taraf var mı?",
        attribute: "crypto"
    },
    {
        id: "q_logic",
        text: "Bir dedektiflik filmi izlerken katili karakterlerden önce bulmaya çalışır ve ipuçlarını zihninde birleştirir misin?",
        attribute: "logic"
    },
    {
        id: "q_creative",
        text: "Boş bir kağıt gördüğünde aklına hemen çizecek/yazacak bir şeyler gelir mi, yoksa 'ne yapmam gerekiyor' diye talimat mı beklersin?",
        attribute: "creative"
    },
    {
        id: "q_detail",
        text: "Arkadaşının sana attığı mesajdaki -de/-da eklerinin yanlış yazılmış olması veya bir tablonun hafif yamuk durması seni içten içe rahatsız eder mi?",
        attribute: "detail_oriented"
    },
    {
        id: "q_deep",
        text: "Çok karmaşık bir bulmacayı çözmek için saatlerce, gerekirse günlerce tek bir parça üzerinde inatla uğraşmak sana işkence gibi mi gelir?",
        attribute: "low_level"
    },
    {
        id: "q_work_life",
        text: "Senin için ideal iş günü 'Saat 17:00'de bilgisayarı kapatıp hayata dönmek' midir, yoksa tutku duyduğun bir proje için gerekirse sabahlamak seni rahatsız etmez mi? (Evet: 9-5 Severim / Hayır: Tutku Önemli)",
        attribute: "work_life_balance"
    },
    {
        id: "q_routine",
        text: "Her sabah ne yapacağının belli olduğu, sürprizsiz ve düzenli bir işleyiş sana huzur mu verir, yoksa 'Her gün aynı şeyi yaparsam çıldırırım' mı dersin? (Evet: Düzen Severim / Hayır: Kaos Severim)",
        attribute: "routine"
    },
    {
        id: "q_security_env",
        text: "Çok gizli ve kritik bir projede çalışmak için internetin ve telefonun yasak olduğu 'kozmik' bir odada çalışmak sana havalı mı gelir, yoksa 'Özgürlüğüm kısıtlanamaz' mı? (Evet: Havalı / Hayır: Özgürlük)",
        attribute: "strict_environment"
    }
];
