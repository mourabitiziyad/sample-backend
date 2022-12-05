
const { Router } = require('express');
const controllers = require('../controllers/event_signup');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = Router();

router.post('/eventsignups', isAuthenticated, controllers.createEventSignUp);
router.get('/eventsignups', isAuthenticated, controllers.getAllEventSignUps);
router.get('/eventsignups/:eventId/:userId', isAuthenticated, controllers.getEventSignUpById);
router.get('/eventsignups/:eventId', isAuthenticated, controllers.getEventSignUpByEventId);
router.put('/eventsignups/:eventId/:userId', isAuthenticated, controllers.updateEventSignUp);
router.delete('/eventsignups/:eventId/:userId', isAuthenticated, controllers.deleteEventSignUp);

module.exports = router;