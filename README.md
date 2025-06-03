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

### `GET /api/v1/users/create`
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


### `GET /api/v1/transactions/users/:userId`

🔍 **Descripción**
🔍 Obtiene las transacciones asociadas a un usuario específico  

## `GET /api/v1/transactions/

🔍 **Descripción**
Crea una nueva transacción para un usuario.
### Ejemplo de solicitud

```json
POST /api/v1/transactions
Content-Type: application/json

{
  "userId": "683e3e1d018e06a9eddf6203",
  "amount": 100,
  "type": "credit",
  "description": "Compra de producto A",
  "paymentMethodId": "pm_card_mastercard"
}
```
### Ejemplo de respuesta





Obtiene las transacciones del usuario con `userId`.

#### Respuestas esperadas:

- **200 OK**: Usuario con transacciones.
- **200 OK + []**: Usuario válido sin transacciones.
- **404 Not Found**: Usuario no existe.
- **400 Bad Request**: ID inválido (no es un ObjectId válido).

---

#### 📮 Endpoints y ejemplos de uso

🔹 Obtener transacciones por usuario
``` http
GET /api/v1/transactions/users/:userId
```

Parámetros:
	•	userId – ID del usuario en formato MongoDB ObjectId

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
✅ Explicación

## 🐳 Docker 
Para ejecutar el proyecto en un contenedor Docker, se incluye un archivo `docker-compose.yml` que define los servicios necesarios.
### Docker Compose
```yaml

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
