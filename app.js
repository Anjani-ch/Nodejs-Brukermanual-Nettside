const express = require('express');
const { static } = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(static(path.join(__dirname, 'public')));
app.use(require('./routes/routes.js'));

app.listen(PORT, _ => console.log(`Server running on port ${PORT}`));