const teamController = require('../controllers/teamController');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    teamController.displayAllTeams(req, res);
}
);

router.get('/:teamId', (req, res) => {
    teamController.displayTeam(req, res);
}
);

router.post('/', (req, res) => {
    teamController.addTeam(req, res);
}
);

router.put('/:id', (req, res) => {
    teamController.updateTeam(req, res);
}
);

router.delete('/:id', (req, res) => {
    teamController.deleteTeam(req, res);
}
);

module.exports = router;