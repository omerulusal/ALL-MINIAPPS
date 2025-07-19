# Node.js resmi imajını temel al
FROM node:18-alpine

# Çalışma dizinini belirle
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama kaynak kodlarını kopyala
COPY . .

# Uygulamayı derle
RUN npm run build

# Nginx'i kur ve yapılandır
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Nginx'i başlat
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# terminal kodu: docker build -t todo-app . 
# docker run -d -p 8080:80 todo-app olarak calıstır.
# tarayıcı URL'i: http://localhost:8080
# Conteiner'ı Durdurma: docker stop $(docker ps -q --filter ancestor=todo-app)
# Calışan Conteinerların Listesi: docker ps