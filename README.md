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

### `GET /api/v1/transactions/users/:userId`

Obtiene las transacciones del usuario con `userId`.

#### Respuestas esperadas:

- **200 OK**: Usuario con transacciones.
- **200 OK + []**: Usuario válido sin transacciones.
- **404 Not Found**: Usuario no existe.
- **400 Bad Request**: ID inválido (no es un ObjectId válido).

---

## ✍️ Autor

Desarrollado por [Oscar Varela](https://github.com/oscarvarela).

---

## 📄 Licencia

Este proyecto está bajo licencia MIT.# pruebaTecnicaCasaBenetti
