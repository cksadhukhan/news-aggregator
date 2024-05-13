# News Aggregator API

### Project brief

A RESTful API for a news aggregation.

### Project Description:

In this project, I have created a RESTful API using Node.js, Express.js, and other NPM packages. The API will allow users to SignUp, SingIn and Add/Edit their preferences about news category. Then fetch the news as per the preferred category. The API is tested using Postman .

### User schema:

```
{
  "name": string,
  "email": string,
  "password": string,
  "preferences": Array<string>
}
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/cksadhukhan/news-aggregator
```

Go to the project directory

```bash
  cd news-aggregator
```

Install dependencies

```bash
  npm install
```

Start the production server

```bash
  npm run start
```

Start the development server

```bash
  npm run dev
```

## Endpoints

| Method | Endpoint           | Description                     |
| ------ | ------------------ | ------------------------------- |
| POST   | /users/signup      | Register the user               |
| POST   | /users/login       | Singin the registered user      |
| GET    | /users/preferences | Get the preferences of the user |
| PUT    | /users/preferences | Update the preferences          |
| GET    | /news              | Get the news as per perferences |
