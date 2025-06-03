import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    type: {
        type: String,
        enum: ['credit', 'debit'],
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
    },
    description: {
        type: String,
        trim: true,
        maxlength: 255
    }
}, {
    timestamps: true, 
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false }
});

const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction;