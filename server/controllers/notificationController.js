const express = require('express');
const cors = require('cors');

const Notification = require('../models/Notification');

const app = express();

app.use(cors());

//display all notifications
const displayAllNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find();
        res.json(notifications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//delete a notification
const deleteNotification = async (req, res) => {
    try {
        const notificationId = req.params.id;
        const notification = await Notification.findById(notificationId);

        if (!notification) {
            return res.status(404).json({ error: 'notification not found' });
        }

        await notification.remove();
        res.json({ message: 'notification deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//add a notification
const saveNotification = async (req, res) => {
    try {
        const notification = new Notification(req.body);
        await notification.save();
        res.status(201).json(notification);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//export
module.exports = {
    displayAllNotifications,
    deleteNotification,
    saveNotification
};



