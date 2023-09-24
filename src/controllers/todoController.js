const db = require('./../models');

exports.getTodos = async (req, res) => {
    res.render('home', { todolist: await db.TodoList.findAll() });
};

exports.createTodo = async (req, res) => {
    const { name } = req.body;

    if (!name) {
        throw new Error('Validation error: TodoList.name cannot be null');
    }

    await db.TodoList.create({ name });
    res.redirect('/');
};
