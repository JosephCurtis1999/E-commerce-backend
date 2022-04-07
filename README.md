# E-commerce-backend

Building a back end for an e-commerce site using Express, Sequelize and MySQL

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize

WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data

WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database

WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Technologies used

* Javascript
* Node.js
* Express.js 
* Sequelize
* MySQL2
* Inquirer

## Usage

1. Clone the repository
```md
https://github.com/JosephCurtis1999/E-commerce-backend.git
```
2. Change the working directory
```md
cd E-commerce-backend
```
3. Install dependencies
```md
npm i
```
4. From the project root folder enter the SQL shell and run the command
```md
source db/schema.sql
```
5. From the project root folder run the command to seed data
```md
npm run seed
```
6. Start the server
```md
npm run start
```

## Screenshot
![ecommerce-backend](https://user-images.githubusercontent.com/94229291/162179036-0750d176-206c-40f6-8bb6-26970f7df982.jpg)



## Walkthrough

video link: 

## Contributing

There are no contribution guidlines at this moment in time

## Tests

There is no test information at this stage

## Credits

University of Birmingham Coding Bootcamp, Trilogy
