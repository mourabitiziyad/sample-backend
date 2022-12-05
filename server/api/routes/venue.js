
const { Router } = require('express');
const controllers = require('../controllers/venue');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = Router();

router.post('/venues', isAuthenticated, controllers.createVenue);
router.get('/venues', isAuthenticated, controllers.getAllVenues);
router.get('/venues/:venueId', isAuthenticated, controllers.getVenueById);
router.put('/venues/:venueId', isAuthenticated, controllers.updateVenue);
router.delete('/venues/:venueId', isAuthenticated, controllers.deleteVenue);

module.exports = router;