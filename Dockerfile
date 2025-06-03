# Usa una imagen oficial de Node.js como base
FROM node:18

# Crea y establece el directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expón el puerto (Cloud Run usa 8080)
EXPOSE 8080

# Usa el puerto proporcionado por Cloud Run
ENV PORT 8080

# Inicia la aplicación
CMD ["npm", "start"]