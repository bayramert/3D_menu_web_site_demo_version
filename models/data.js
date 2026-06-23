// =========================================
// MODEL: data.js — Statik Veriler
// =========================================

const AppData = {
  site: {
    name: "RUZ Café",
    tagline: "Hayatın Tadı",
    founded: "2012",
    address: "İslambey, Ruznameci Sk. NO:9, 34050 Eyüpsultan/İstanbul",
    phone: "+90 216 555 0101",
    email: "merhaba@ruzcafe.com.tr",
    hours: "Her gün 11:00–23:00"
  },

  categories: [
    { id: "kahvalti", label: "Kahvaltılar", emoji: "🍳", bgColor: "#1a0a0a", description: "Güne zengin bir başlangıç" },
    { id: "baslangic", label: "Başlangıçlar", emoji: "🥗", bgColor: "#0a1a0a", description: "Taze ve hafif lezzetler" },
    { id: "ana", label: "Ana Yemekler", emoji: "🍖", bgColor: "#1a0f0a", description: "Doyurucu klasikler" },
    { id: "pizza", label: "Pizzalar", emoji: "🍕", bgColor: "#1a1a0a", description: "Taş fırın lezzeti" },
    { id: "makarna", label: "Makarnalar", emoji: "🍝", bgColor: "#0a0a1a", description: "İtalyan usulü" },
    { id: "tatli", label: "Tatlılar", emoji: "🎂", bgColor: "#1a0a1a", description: "Şekerli kapanışlar" }
  ],

  menu: [
    { id: 1, category: "kahvalti", name: "RUZ Serpme", emoji: "🍳", desc: "Peynirler, şarküteri, zeytinler, reçeller", details: "2 kişilik serpme kahvaltı. Sınırsız çay ile servis edilir.", price: "₺320", badge: "Popüler" },
    { id: 2, category: "kahvalti", name: "Menemen", emoji: "🥚", desc: "Ev yapımı sucuklu ya da sade menemen", details: "Taze domates, biber, yumurta.", price: "₺95" },
    { id: 3, category: "kahvalti", name: "Fransız Tostu", emoji: "🍞", desc: "Brioche ekmeği, çilek reçeli, pudra şekeri", details: "Tereyağlı fırınlanmış brioche ekmeği.", price: "₺110", badge: "Yeni" },
    { id: 4, category: "baslangic", name: "Akdeniz Salatası", emoji: "🥗", desc: "Roka, nar, ceviz, keçi peyniri", details: "Taze roka, nar taneleri, ceviz içi.", price: "₺125" },
    { id: 5, category: "baslangic", name: "Çıtır Karides", emoji: "🦐", desc: "Panko kaplamalı karides, acı mayo", details: "Büyük karides, özel panko sos.", price: "₺165", badge: "Sevilen" },
    { id: 6, category: "baslangic", name: "Mercimek Çorbası", emoji: "🍲", desc: "Ev yapımı kırmızı mercimek çorbası", details: "Kıtır ekmek ve limon ile.", price: "₺75" },
    { id: 7, category: "ana", name: "Izgara Somon", emoji: "🐟", desc: "Izgara somon fileto, taze sebze", details: "Norveç somonu, buharda sebze.", price: "₺280", badge: "Şef Önerisi" },
    { id: 8, category: "ana", name: "Dana Burger", emoji: "🍔", desc: "Mouse ile döndürerek 3D modeli incele!", details: "El yapımı köfte, brioche ekmeği, double cheddar.", price: "₺195", modelSrc: "../assets/models/hamburger.glb" },
    { id: 9, category: "ana", name: "Tavuk Şiş", emoji: "🍢", desc: "Marine edilmiş tavuk şiş, pilav", details: "Özel yoğurt marineli tavuk göğsü.", price: "₺155" },
    { id: 10, category: "pizza", name: "Margherita", emoji: "🍕", desc: "Domates sosu, mozzarella, taze fesleğen", details: "Taş fırında geleneksel İtalyan usulü.", price: "₺150" },
    { id: 11, category: "pizza", name: "RUZ Özel", emoji: "🧀", desc: "4 peynir, karamelize soğan", details: "Mozzarella, gorgonzola, parmesan, ricotta.", price: "₺210", badge: "İmza" },
    { id: 12, category: "pizza", name: "Sucuklu", emoji: "🌶️", desc: "Ev yapımı sucuk, biber, mozzarella", details: "Afyon sucuğu ve taze köy biberi.", price: "₺175", modelSrc: "../assets/models/pizza.glb" },
    { id: 13, category: "makarna", name: "Carbonara", emoji: "🍝", desc: "Spaghetti, guanciale, yumurta sarısı", details: "Orijinal krema içermeyen İtalyan tarifi.", price: "₺165", badge: "Klasik" },
    { id: 14, category: "makarna", name: "Arabiatta", emoji: "🌶️", desc: "Penne, domates, sarımsak, acı biber", details: "Acılı San Marzano domates sosu.", price: "₺135" },
    { id: 15, category: "makarna", name: "Truffle Risotto", emoji: "🍄", desc: "Arborio pirinç, trüf yağı, parmesan", details: "Yaban mantarları eşliğinde.", price: "₺235", badge: "Premium" },
    { id: 16, category: "tatli", name: "Cheesecake", emoji: "🍰", desc: "New York usulü cheesecake, çilek sosu", details: "Fırınlanmış kadifemsi dolgu.", price: "₺95" },
    { id: 17, category: "tatli", name: "Tiramisu", emoji: "☕", desc: "Mascarpone, ladyfinger, espresso", details: "Geleneksel İtalyan kedidili tatlısı.", price: "₺105", badge: "Ev Yapımı" },
    { id: 18, category: "tatli", name: "Sıcak Çikolata Sufle", emoji: "🍫", desc: "Sıvı kalpli çikolata kek, dondurma", details: "Belçika çikolatası ile anlık pişirilir.", price: "₺115", badge: "Taze" }
  ]
};
