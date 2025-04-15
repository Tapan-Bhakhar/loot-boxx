const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    // productId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Product',
    //     required: true
    // },

    userId: {
        type: String,
        required: true
    },
    products: [
        {
            productId: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ],

    address: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: "pending",
        // enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"]
        required: true
    }

}, { timestamps: true });

mongoose.models = {}; // Clear the models cache to avoid duplicate model error
export default mongoose.model('Order', OrderSchema);