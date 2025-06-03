# 🏠 pruebaCasaBenetti

Proyecto backend en Node.js para la gestión de transacciones de usuarios, utilizando Express y MongoDB.

---

## 📚 Descripción

Este proyecto expone una API REST que permite consultar transacciones asociadas a usuarios. Incluye pruebas automatizadas con Jest y Supertest.

---

## ⚙️ Tecnologías

- Node.js
- Express.js
- MongoDB + Mongoose
- Jest + Supertest

---

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/pruebaCasaBenetti.git
cd pruebaCasaBenetti
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` con la siguiente estructura:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/casa-benetti
```

4. Inicia el servidor:

```bash
npm start
```

---

## 🧪 Ejecutar pruebas

```bash
npm test
```

> Usa `--watch` para ejecutar las pruebas automáticamente tras cada cambio.

---

## 🗂️ Estructura del proyecto

```
pruebaCasaBenetti/
├── src/
│   ├── controllers/
│   │   └── transactionControllers.js
│   ├── models/
│   │   ├── Transaction.js
│   │   └── User.js
│   ├── routes/
│   │   └── transactionRoutes.js
│   └── app.js
├── tests/
│   └── transactions.test.js
├── .env
├── package.json
└── README.md
```

---

## 📡 Endpoints principales


### `POST /api/v1/users/create`
🔍 **Descripción**
Crea un nuevo usuario en la base de datos.
### Ejemplo de solicitud

```json
POST /api/v1/users/create
Content-Type: application/json

{
    "name":"oscar",
    "lastName":"varela",
    "birthdate": "1991-01-16",
    "phone":5560609210,
    "email":"oscar_varela_gallardo@hotmail.com",
    "password":123456
}
```
### Respuestas:
    •	201 Created – Usuario creado exitosamente
    •	400 Bad Request – Datos inválidos
    •	500 Internal Server Error – Error en el servidor

Crear transacciones para el usuario creado:
### `POST /api/v1/transactions/create`
🔍 **Descripción
Crea una nueva transacción asociada a un usuario.
### Ejemplo de solicitud

```json
POST /api/v1/transactions/create
Content-Type: application/json

{
    "userId": "60c72b2f9b1e8c001c8e4d3a",
    "amount": 100.50,
    "description": "Compra en supermercado",
    "date": "2023-10-01"
}
```
### Respuestas
    •	201 Created – Transacción creada exitosamente
    •	400 Bad Request – Datos inválidos o usuario no encontrado
    •	500 Internal Server Error – Error en el servidor
### `GET /api/v1/transactions/:userId`
🔍 **Descripción**
Obtiene todas las transacciones asociadas a un usuario específico.
### Ejemplo de solicitud

```http
GET /api/v1/transactions/60c72b2f9b1e8c001c8e4d3a
```
### Parámetros
- `userId`: ID del usuario cuyas transacciones se desean consultar.
### Respuestas:
    •	200 OK – Retorna un array de transacciones
    •	400 Bad Request – ID no válido
    •	404 Not Found – Usuario válido pero sin transacciones
    •	500 Internal Server Error – Error en el servidor
### Ejemplo de respuesta exitosa            
```json
[
    {
        "_id": "60c72b2f9b1e8c001c8e4d3b",
        "userId": "60c72b2f9b1e8c001c8e4d3a",
        "amount": 100.50,
        "description": "Compra en supermercado",
        "date": "2023-10-01"
    },
    {
        "_id": "60c72b2f9b1e8c001c8e4d3c",
        "userId": "60c72b2f9b1e8c001c8e4d3a",
        "amount": 50.00,
        "description": "Pago de servicios",
        "date": "2023-10-02"
    }
]
```


Respuestas:
	•	200 OK – Retorna un array de transacciones
	•	400 Bad Request – ID no válido
	•	404 Not Found – Usuario válido pero sin transacciones
	•	500 Internal Server Error – Error en el servidor

#### ✅ Cómo correr las pruebas

Las pruebas están escritas con Jest y Supertest.

Ejecutar todas las pruebas
Casos cubiertos

```
	•	✅ Responde 200 con transacciones válidas
	•	✅ Responde 404 si el usuario existe pero no tiene transacciones
	•	✅ Responde 400 si el userId es inválido
	•	✅ Manejo de errores de conexión o validación
```
```bash
npm test
```


## 🐳 Docker 
Para ejecutar el proyecto en un contenedor Docker, se incluye un archivo `docker-compose.yml` que define los servicios necesarios.
### Docker Compose
```yaml
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

```

## 🐳 Docker Compose
🚀 Para levantar los servicios:

```bash
docker-compose up -d
```
---


## ✍️ Autor

Desarrollado por [Oscar Varela](https://github.com/oscarvarela).

---

## 📄 Licencia

Este proyecto está bajo licencia MIT.# pruebaTecnicaCasaBenetti
