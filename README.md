# todo_app_nodejs_back-end

This is a simple todo app back-end made with nodejs and express.

## Requirements:

- [Git] >= 2.37.1
  ### Running the app with docker
  - [Docker]
    - Docker desktop >= 4.24.0
    - Engine >= 24.0.6
    - Compose >= 2.22.0
  ### Running the app on local machine
  - [Nodejs] = 18.x.x
  - [PostgreSQL] = 15.x.x

## Getting started

- Clone the project

- Go to the project directory

```bash
  cd todo_app_nodejs_back-end
```

- Create a .env file in the root directory based on the .env.example file

```bash
  cp .env.example .env 
```

### ENV variables
| Name | Example | Description |
| --- | --- | --- |
| PORT | 3000 | Port where app will be served |
| DB_USERNAME | admin | Database user name |
| DB_PASSWORD | password | Database password |
| DB_NAME | database | Database name |
| DB_HOST | localhost | Database host.<br />`host.docker.internal` if run app with docker |

## Running with Docker
- Run the app

```bash
# start
docker-compose up

# stop
press Ctrl-C

#remove
docker-compose down

#rebuild
docker-compose up --build
```

- Run the app in the background mode

```bash
#start
docker-compose up -d

#stop
docker-compose stop

#remove
docker-compose down

#rebuild
docker-compose up --build -d
```

## Running in development mode

- Provide sqlite database variables to the .env file

- Install dependencies

```bash
  npm install
```

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

- Install dependencies

```bash
  npm install
```

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

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
## Author
Petro Kovalchuk

[Git]: https://git-scm.com/
[Docker]: https://www.docker.com/get-started/
[Nodejs]: https://nodejs.org/dist/v18.17.1/
[PostgreSQL]: https://www.postgresql.org/ftp/source/v15.2/
