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

exports.completeTodo = async (req, res) => {
    const { id } = req.body;

    if (!id) {
        throw new Error('Validation error: TodoList.id cannot be null');
    }

    const todo = await db.TodoList.findOne({ where: { id } });
    todo.completed = true;
    await todo.save();
    res.redirect('/');
};

exports.deleteTodo = async (req, res) => {
    const { id } = req.body;

    if (!id) {
        throw new Error('Validation error: TodoList.id cannot be null');
    }

    await db.TodoList.destroy({ where: { id } });
    res.redirect('/');
};
