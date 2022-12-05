
const { Router } = require('express');
const controllers = require('../controllers/sport');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = Router();

router.post('/sports', isAuthenticated, controllers.createSport);
router.get('/sports', isAuthenticated, controllers.getAllSports);
router.get('/sports/:sportId', isAuthenticated, controllers.getSportById);
router.put('/sports/:sportId', isAuthenticated, controllers.updateSport);
router.delete('/sports/:sportId', isAuthenticated, controllers.deleteSport);

module.exports = router;