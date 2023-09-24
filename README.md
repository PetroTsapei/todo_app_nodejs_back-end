# todo_app_nodejs_back-end

This is a simple todo app back-end made with nodejs and express.

## Requirements:

- Git
- Nodejs >= 18

## Getting started

- Clone the project

- Go to the project directory

```bash
  cd todo_app_nodejs_back-end
```

- Install dependencies

```bash
  npm install
```

- Create a .env file in the root directory based on the .env.example file

```bash
  cp .env.example .env 
```

## Running in development mode

- Provide sqlite database variables to the .env file

- Run the migrations

```bash
  npm run migrate:up
```

- Start the server in development mode

```bash
  npm run dev
```

## Running in production mode

- Create postgres database and add the database variables to the .env file

- Run the migrations

```bash
  npm run migrate:up -- --env production
```

- Start the server in production mode

```bash
  npm start
```

## Running tests

```bash
  npm test
```

## Open the app

- Open the app in your browser

```bash
  http://localhost:3000
```
