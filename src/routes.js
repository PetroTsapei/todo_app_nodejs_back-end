const express = require('express');
const router = express.Router();

const todoController = require('./controllers/todoController');

router.get('/', todoController.getTodos);
router.post('/add', todoController.createTodo);
router.post('/delete', todoController.deleteTodo);
router.post('/complete', todoController.completeTodo);

router.use((req, res) => {
    res.status(404).render('404');
});

module.exports = router;
