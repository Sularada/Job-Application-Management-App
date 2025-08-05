# 💼 Job Application Management App

Bu proje, kullanıcıların iş başvurularını kolayca takip edebilmesini sağlayan bir web uygulamasıdır. Sisteme üye olup, başvuru formunu doldurduktan sonra sistemin havuzuna dahil olabilirler. Yapılan başvurular firestore da tutulur ve admin kullanıcılara sunulur. 

## ✨ Özellikler

- 📋 Yeni başvuru ekleyebilme
- 📑 Başvuruların listesini görüntüleme
- 🔄 Başvuru durumunu güncelleme (Görüşme bekleniyor, Reddedildi, İşe alındı vs.)
- 🔐 Google hesabı ile güvenli giriş
- 🎨 Modern ve responsive kullanıcı arayüzü (SCSS kullanılarak geliştirildi)

## 🚀 Kurulum

Projeyi localde çalıştırmak için şu adımları takip edebilirsin:

```bash
git clone https://github.com/Sularada/Job-Application-Management-App.git
cd Job-Application-Management-App
npm install
npm run dev
````

## ⚙️ Firebase Ayarları
- Firebase Authentication'da Google Sign-In etkinleştirilmeli
- Firestore veritabanı yapılandırılmalı
- Ortam değişkenlerini .env dosyasına eklemelisin

## 🛠 Kullanılan Teknolojiler
- React.js
- Firebase (Authentication & Firestore)
- SCSS
- Vite

## 🧪 Geliştirme Notları
- src/views altında sayfa bileşenleri yer almakta
- src/components altında atomik yapıya göre ayrılmış UI bileşenleri bulunur
- firebase/ klasöründe Firebase yapılandırmaları mevcuttur
