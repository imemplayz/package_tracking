const express = require('express');
const router = express.Router();

const noteController = require('../controllers/noteController');


router.get('/:teamId', (req, res) => {
    noteController.displayAllNotes(req, res);
}
);

router.delete('/:id', (req, res) => {
    noteController.deleteNote(req, res);
}
);

router.post('/', (req, res) => {
    noteController.saveNote(req, res);
}
);

module.exports = router;