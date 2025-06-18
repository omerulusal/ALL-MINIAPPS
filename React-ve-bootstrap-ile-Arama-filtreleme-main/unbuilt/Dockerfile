# Node.js base image kullan
FROM node:20-alpine

# Çalışma dizinini belirle
WORKDIR /src

# Package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Tüm proje dosyalarını kopyala
COPY . .

# Build işlemini gerçekleştir
RUN npm run build

# Uygulamanın çalışacağı portu belirt
EXPOSE 3000

# Uygulamayı başlat
CMD ["npm", "run", "start", "--", "--host"]

# docker build -t search_filt . komutu ile build edilecek
# docker run -p 3001:3000 search_filt calıştırma komutu