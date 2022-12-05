
const { Router } = require('express');
const controllers = require('../controllers/event');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = Router();

router.post('/events', isAuthenticated, controllers.createEvent);
router.get('/events', isAuthenticated, controllers.getAllEvents);
router.get('/events/:eventId', isAuthenticated, controllers.getEventById);
router.put('/events/:eventId', isAuthenticated, controllers.updateEvent);
router.delete('/events/:eventId', isAuthenticated, controllers.deleteEvent);

module.exports = router;