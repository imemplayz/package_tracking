const express = require('express');
const router = express.Router();

const notificationController = require('../controllers/notificationController');


router.get('/', (req, res) => {
    notificationController.displayAllNotifications(req, res);
}
);

router.delete('/:id', (req, res) => {
    notificationController.deleteNotification(req, res);
}
);

router.post('/', (req, res) => {
    notificationController.saveNotification(req, res);
}
);

module.exports = router;