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
EXPOSE 5173

# Uygulamayı başlat
CMD ["npm", "run", "start", "--", "--host"]

# docker build -t dashboard . komutu ile build edilecek
# docker run -p 5173:5173 dashboard calıştırma komutu