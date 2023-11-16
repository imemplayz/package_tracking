const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
    title: String,
    description: String,
    date: Date,
    read: Boolean,
    type: String,
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    recipient: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Notification = mongoose.model('Notification', NotificationSchema);

module.exports = Notification;