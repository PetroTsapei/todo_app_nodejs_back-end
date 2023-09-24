require('express-async-errors');
const express = require('express');
const path = require('path');

const routes = require('./src/routes');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;
const srcPath = path.join(__dirname, 'src');

app.use(express.static(path.join(srcPath, 'public')));

app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(srcPath, 'views'));

app.set('view engine', 'pug');

app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
