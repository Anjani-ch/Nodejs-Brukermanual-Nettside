const defaultViewProperties = { year: new Date().getFullYear() };

const render_index = (req, res) => res.render('index', { title: 'Home', ...defaultViewProperties });
const render_404 = (req, res) => res.status(404).render('404', { title: '404', ...defaultViewProperties });

module.exports = { render_index, render_404 };