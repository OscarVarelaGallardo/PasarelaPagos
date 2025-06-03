import Transaction from '../models/transaction.js';
import Stripe from 'stripe';
import dotenv from 'dotenv';
import User from '../models/user.js';
import mongoose from 'mongoose';

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const createTransaction = async (req, res) => {
    try {
        const { userId, amount, type, description, paymentMethodId } = req.body;
        if (!userId || !amount || !type || !paymentMethodId) {
            return res.status(400).json({ message: 'Datos incompletos' });
        }
        const userExists = await User.findOne({ _id: userId });
        if (!userExists) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        if (amount <= 0) {
            return res.status(400).json({ message: 'El monto debe ser mayor a cero' });
        }

        if (!['credit', 'debit'].includes(type)) {
            return res.status(400).json({ message: 'Tipo inválido' });
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // El monto en centavos
            currency: 'mxn',
            payment_method: paymentMethodId,
            confirm: true,
            payment_method_types: ['card'] // 👈 SOLO acepta tarjeta (sin redirecciones)
        });

        if (paymentIntent.status !== 'succeeded') {
            return res.status(400).json({ message: 'Pago fallido' });
        }
        let transaction;
        try {
            const transaction = new Transaction({
                userId,
                amount,
                type,
                status: 'completed',
                description
            });

            await transaction.save();
        }
        catch (error) {
            console.error('Error guardando la transacción:', error.message);
            return res.status(500).json({ message: 'Error guardando la transacción', error: error.message });
        }

        return res.status(201).json({ message: 'Transacción procesada', transaction });
    } catch (error) {
        console.error('Stripe error:', error.message);
        return res.status(500).json({ message: 'Error procesando el pago', error: error.message });
    }
};


const getUserTransactions = async (req, res) => {
    const { id: userId } = req.params;
 
    if (!mongoose.Types.ObjectId.isValid(userId) || userId.length !== 24) {
        return res.status(400).json({ message: 'UserId no válido' });
    }
    try {
        const transactions = await Transaction.find({ userId }).sort({ createdAt: -1 });
        const userExists = await User.findOne({ _id: userId });
        if (!userExists) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
       

        if (userExists && transactions.length === 0) {
            return res.status(200).json({message:200, transactions: [] });
        }

        return res.status(200).json({ transactions });
    } catch (error) {
        console.error('Error al obtener transacciones:', error.message);
        return res.status(500).json({ message: 'Error al obtener transacciones', error: error.message });
    }
};




const authorizeTransaction = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id) || id.length !== 24) {
        console.error('ID de transacción no válido:', id);
        return res.status(400).json({ error: 'UserId no válido' });
    }
    try {

        const transaction = await Transaction.findById(id);

        if (!transaction) {
            return res.status(400).json({ message: 'Transacción no encontrada' });
        }


        if (transaction.status !== 'completed') {
            return res.status(403).json({ authorized: false, message: 'Transacción no autorizada' });
        }

        return res.status(200).json({ authorized: true, message: 'Transacción autorizada' });
    } catch (error) {
        return res.status(500).json({ message: 'Error al validar transacción', error: error.message });
    }
};


export { createTransaction, getUserTransactions, authorizeTransaction };