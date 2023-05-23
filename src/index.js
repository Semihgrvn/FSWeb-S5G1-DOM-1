const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

const navItems = document.querySelectorAll("header nav a")
// navItems[0].textContent = siteContent["nav"]["nav-item-1"]
// navItems[1].textContent = siteContent["nav"]["nav-item-2"]
// navItems[2].textContent = siteContent["nav"]["nav-item-3"]
// navItems[3].textContent = siteContent["nav"]["nav-item-4"]
// navItems[4].textContent = siteContent["nav"]["nav-item-5"]

// navItems[0].setAttribute("class", "italic")
// navItems[1].setAttribute("class", "italic")
// navItems[2].setAttribute("class", "italic")
// navItems[3].setAttribute("class", "italic")
// navItems[4].setAttribute("class", "italic")

navItems.forEach((item, index) => {
  let i = index + 1
  item.textContent = siteContent["nav"]["nav-item-" + i]
  item.setAttribute("class", "italic")
})

const mainText = document.querySelector(".cta-text")
mainText.querySelector("h1").textContent = siteContent.cta.h1
mainText.querySelector("button").textContent = siteContent.cta.button



const logoImg = document.querySelector("header img")
logoImg.setAttribute("src", siteContent.images["logo-img"])

document.getElementById("cta-img").src = siteContent.images["cta-img"]
document.getElementById("middle-img").src = siteContent.images["accent-img"]

const topContent = document.querySelectorAll(".top-content .text-content")

topContent[0].querySelector("h4").textContent = siteContent["ana-içerik"]["özellikler-h4"]
topContent[0].querySelector("p").textContent = siteContent["ana-içerik"]["özellikler-içerik"]

topContent[1].querySelector("h4").textContent = siteContent["ana-içerik"]["hakkımızda-h4"]
topContent[1].querySelector("p").textContent = siteContent["ana-içerik"]["hakkımızda-içerik"]


const bottonContent = document.querySelectorAll(".bottom-content h4")
bottonContent[0].textContent = siteContent["ana-içerik"]["servisler-h4"]
bottonContent[1].textContent = siteContent["ana-içerik"]["ürünler-h4"]
bottonContent[2].textContent = siteContent["ana-içerik"]["vizyon-h4"]

const bottonContentP = document.querySelectorAll(".bottom-content p")
bottonContentP[0].textContent = siteContent["ana-içerik"]["servisler-içeriği"]
bottonContentP[1].textContent = siteContent["ana-içerik"]["ürünler-içeriği"]
bottonContentP[2].textContent = siteContent["ana-içerik"]["vizyon-içeriği"]

document.querySelector(".contact h4").textContent = siteContent.iletisim["iletişim-h4"]

const contact = document.querySelectorAll(".contact p")
contact[0].textContent = siteContent.iletisim.adres
contact[1].textContent = siteContent.iletisim.telefon
contact[2].textContent = siteContent.iletisim.email

document.querySelector("footer a").textContent = siteContent.footer.copyright
document.querySelector("footer a").setAttribute("class", "bold")


