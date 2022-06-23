const mongoose = require('../database/index'), Schema = mongoose.Schema;

const order_schema = new Schema({
    id: Schema.Types.ObjectId,
    user: Number,
    delivery: Number,
    address: String,
    created: {
        type: Date,
        default: new Date(),
    },
    status: {
        type: String,
        default: 'pending'
    },
    accepted: {
        type: Boolean,
        default: null
    },
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant'
    },
    price: Array,
    menus: Array,
    article: Array,
    versionKey: false,
});

const order = mongoose.model("order", order_schema);

module.exports = order;