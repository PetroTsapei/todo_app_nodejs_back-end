const db = require('./../models');

exports.getTodos = async (req, res) => {
    res.render('home', { todolist: await db.TodoList.findAll() });
};

exports.createTodo = async (req, res) => {
    await db.TodoList.create({
        name: req.body.name,
    });
    res.redirect('/');
};
