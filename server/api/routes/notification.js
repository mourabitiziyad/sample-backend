
const { Router } = require('express');
const controllers = require('../controllers/notifications');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = Router();

router.post('/notifications', isAuthenticated, controllers.createNotification);
router.get('/notifications', isAuthenticated, controllers.getAllNotifications);
router.get('/notifications/:notificationId', isAuthenticated, controllers.getNotificationById);
router.put('/notifications/:notificationId', isAuthenticated, controllers.updateNotification);
router.delete('/notifications/:notificationId', isAuthenticated, controllers.deleteNotification);

module.exports = router;