import request from 'supertest';
import app from '.././server.js';
import User from '../src/models/user.js';
import Transaction from '../src/models/transaction.js';
import mongoose from 'mongoose';

describe('GET /api/v1/transactions/users/:userId', () => {
    let userId;

    beforeAll(async () => {
        const uniqueEmail = `notx${Date.now()}@example.com`;

        const user = await User.create({
            name: 'Test',
            lastName: 'User',
            email: uniqueEmail,
            password: 'password123',
            phone: '1234567890',
            birthdate: new Date('1990-01-01'),
        });
        userId = user._id.toString();

    
        await Transaction.create({
            userId,
            amount: 100,
            type: 'credit',
            description: 'Compra de producto A',
            paymentMethodId: 'pm_card_visa'
        });
    });

    afterAll(async () => {
        // Limpiar base de datos
        await Transaction.deleteMany({ userId });
        await User.findByIdAndDelete(userId);
        // Cerrar conexión a MongoDB
        await mongoose.connection.close();
    });

    it('debería responder con 200 y un array de transacciones para usuario válido', async () => {
        console.log(`Testing transactions for userId: ${userId}`);
        const res = await request(app).get(`/api/v1/transactions/users/${userId}`);

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body.transactions)).toBe(true);
        expect(res.body.transactions.length).toBeGreaterThan(0);
    });

    it('debería responder con 404 si el usuario no existe', async () => {
        const fakeUserId = new mongoose.Types.ObjectId().toString();
        const res = await request(app).get(`/api/v1/transactions/users/${fakeUserId}`);

        expect(res.statusCode).toBe(404);
        expect(res.body).toHaveProperty('message');
    });

    it('debería responder con 400 si el userId no es válido', async () => {
        const invalidUserId = '12345'; 
        const res = await request(app).get(`/api/v1/transactions/users/${invalidUserId}`);
      
        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty('message');
    });

    it('debería responder con 200 y un array vacío si el usuario válido no tiene transacciones', async () => {
        // Crear usuario sin transacciones
        const userWithoutTx = await User.create({
            name: 'NoTx',
            lastName: 'User',
            email: `notx+${Date.now()}@example.com`,
            password: 'password123',
            phone: 987654321,
            birthdate: new Date('1995-05-05'),
        });

        const res = await request(app).get(`/api/v1/transactions/users/${userWithoutTx._id.toString()}`);

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body.transactions)).toBe(true);
        expect(res.body.transactions.length).toBe(0);

        // Limpiar usuario sin transacciones
        await User.findByIdAndDelete(userWithoutTx._id);
    });
});