const { Router } = require('express');

const { render_index, render_about, render_docs, render_examples, render_404 } = require('../controllers/viewController.js');

const router = Router();

router.get('/', render_index);
router.get('/about', render_about);
router.get('/docs', render_docs);
router.get('/examples', render_examples);

router.get('/download/pdf', (req, res) => res.download('src/docs/nodejs_brukermanual.pdf'));

router.use(render_404);

module.exports = router;