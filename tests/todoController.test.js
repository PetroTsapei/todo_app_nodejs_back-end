const db = require('./../src/models');
const todoController = require('./../src/controllers/todoController');

describe('todo controller', () => {
    beforeAll(async () => {
        await db.sequelize.sync({ force: true })
    });

    beforeEach(async () => {
        await db.TodoList.destroy({ truncate: true });
    });

    it('should get empty todo list', async () => {
        await todoController.getTodos({}, {
            render: (view, data) => {
                expect(view).toBe('home');
                expect(data.todolist.length).toBe(0);
            },
        });
    });

    it('should get todo list', async () => {
        await db.TodoList.create({ name: 'Test todo' });
        await todoController.getTodos({}, {
            render: (view, data) => {
                expect(view).toBe('home');
                expect(data.todolist.length).toBe(1);
                expect(data.todolist[0].name).toBe('Test todo');
            },
        });
    });

    it('should create a todo', async () => {
        await todoController.createTodo({
            body: {
                name: 'Test todo',
            },
        }, {
            redirect: (path) => {
                expect(path).toBe('/');
            },
        });
        const todo = await db.TodoList.findOne({ where: { name: 'Test todo' } });
        expect(todo.name).toBe('Test todo');
    });

    it('should throw an error if todo name is empty', async () => {
        await expect(todoController.createTodo({
            body: {
                name: '',
            },
        }, {
            redirect: (path) => {
                expect(path).toBe('/');
            },
        })).rejects.toThrow('Validation error: TodoList.name cannot be null');
    });

    it('should complete a todo', async () => {
        const todo = await db.TodoList.create({ name: 'Test todo' });
        await todoController.completeTodo({
            body: {
                id: todo.id,
            },
        }, {
            redirect: (path) => {
                expect(path).toBe('/');
            },
        });
        const completedTodo = await db.TodoList.findOne({ where: { id: todo.id } });
        expect(completedTodo.completed).toBe(true);
    });

    it('should throw error if complete todo id is empty', async () => {
        await expect(todoController.completeTodo({
            body: {
                id: '',
            },
        }, {
            redirect: (path) => {
                expect(path).toBe('/');
            },
        })).rejects.toThrow('Validation error: TodoList.id cannot be null');
    });

    it('should delete a todo', async () => {
        const todo = await db.TodoList.create({ name: 'Test todo' });
        await todoController.deleteTodo({
            body: {
                id: todo.id,
            },
        }, {
            redirect: (path) => {
                expect(path).toBe('/');
            },
        });
        const deletedTodo = await db.TodoList.findOne({ where: { id: todo.id } });
        expect(deletedTodo).toBeNull();
    });

    it('should throw error if delete todo id is empty', async () => {
        await expect(todoController.deleteTodo({
            body: {
                id: '',
            },
        }, {
            redirect: (path) => {
                expect(path).toBe('/');
            },
        })).rejects.toThrow('Validation error: TodoList.id cannot be null');
    });

    afterAll(async () => {
        await db.sequelize.close();
    });
});
