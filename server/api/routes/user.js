
const { Router } = require('express');
const controllers = require('../controllers/user');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = Router();

router.post('/users', isAuthenticated, controllers.createUser);
router.get('/users', isAuthenticated, controllers.getAllUsers);
router.get('/users/:userId', isAuthenticated, controllers.getUserById);
router.put('/users/:userId', isAuthenticated, controllers.updateUser);
router.delete('/users/:userId', isAuthenticated, controllers.deleteUser);

module.exports = router;