# React Todo Uygulaması

Bu proje, modern React özellikleri kullanılarak geliştirilmiş bir todo list uygulamasıdır.

## Özellikler

- Todo ekleme
- Todo silme
- Todo düzenleme
- Todo'ları tamamlandı olarak işaretleme
- Otomatik input odaklanması

## Kullanılan Teknolojiler

- React 18.2.0
- React Icons 4.7.1
- React Toastify 9.1.1
- SCSS/CSS
- clsx (koşullu class atamaları için)

## Proje Yapısı

```
src/
├── components/     # React bileşenleri
│   ├── Todo.jsx    # Tekil todo öğesi bileşeni
│   └── TodoList.jsx # Todo listesi bileşeni
├── context/       # Durum yönetimi
│   ├── TodoContext.js # Context tanımlamaları
│   └── reducer.js    # Reducer fonksiyonları
├── Style/         # Stil dosyaları
└── App.js         # Ana uygulama bileşeni
```

## Kurulum

1. Projeyi klonlayın
2. Bağımlılıkları yükleyin:
```bash
npm install
```
3. Geliştirme sunucusunu başlatın:
```bash
npm start
```

## Kullanım

- Yeni todo eklemek için input alanına yazıp "Ekle" butonuna tıklayın
- Todo'yu tamamlandı olarak işaretlemek için üzerine tıklayın
- Todo'yu düzenlemek için kalem ikonuna tıklayın
- Todo'yu silmek için çarpı ikonuna tıklayın

## Durum Yönetimi

Uygulama, React Context API kullanılarak merkezi durum yönetimi ile geliştirilmiştir. Tüm todo işlemleri (ekleme, silme, güncelleme, tamamlama) reducer fonksiyonları aracılığıyla gerçekleştirilir.

## Stil Yönetimi

Uygulamanın stilleri SCSS kullanılarak yazılmıştır. Koşullu class atamaları için clsx kütüphanesi kullanılmıştır.