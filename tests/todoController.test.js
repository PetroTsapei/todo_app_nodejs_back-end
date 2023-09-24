const db = require('./../src/models');
const todoController = require('./../src/controllers/todoController');

describe('todo controller', () => {
    beforeAll(async () => {
        await db.sequelize.sync({ force: true })
    });

    it('should get all todos', async () => {
        await todoController.getTodos({}, {
            render: (view, data) => {
                expect(view).toBe('home');
                expect(data.todolist.length).toBe(0);
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

    afterAll(async () => {
        await db.sequelize.close();
    });
});