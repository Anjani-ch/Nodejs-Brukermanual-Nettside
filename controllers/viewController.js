const render_index = (req, res) => res.render('index', { title: 'Home', year: new Date().getFullYear() });
const render_about = (req, res) => res.render('about', { title: 'About', year: new Date().getFullYear() });
const render_docs = (req, res) => res.render('docs', { title: 'Docs', year: new Date().getFullYear() });
const render_examples = (req, res) => res.render('examples', { title: 'Examples', year: new Date().getFullYear() });
const render_404 = (req, res) => res.status(404).render('404', { title: '404', year: new Date().getFullYear() });

module.exports = { render_index, render_about, render_docs, render_examples, render_404 };