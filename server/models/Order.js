const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    firstName: String,
    lastName: String,
    class: String,
    section: String,
    title: String,
    entreprise: String,
    superviseur: String,
    periodeDeStage: String,
    university: String,
    deadline: String,
    reportDescription: String,
    appName: String,
    mainFunction: String,
    secondaryFunctions: String,
    numberOfPages: String,
    appDescription: String,
    includeReport: Boolean,
    includeApp: Boolean,
    plan: String,
    status: String,
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    date: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
