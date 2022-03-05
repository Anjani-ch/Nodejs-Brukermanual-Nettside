const { Router } = require('express');

const { render_index, render_404 } = require('../controllers/viewController.js');

const router = Router();

router.get('/', render_index);

router.use(render_404);

module.exports = router;