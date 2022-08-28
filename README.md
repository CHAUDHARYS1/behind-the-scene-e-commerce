# Behind The Schene E-Commerce 

## Description
A command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.

## Installation
To run the application, do the following(in order):  
  1) ```git clone``` the repo to your desired local folder
  2) ```open a``` with the code editor of your choice
  3) open terminal
  4) run the app by typing the following: ```node app.js``` 
  5) Once you run the application, you can fill out the questions when prompted.

## User Story
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Usage
```
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

## Mockup
The following animations show examples of the application's API routes being tested in Insomnia.
The first animation shows GET routes to return all categories, all products, and all tags being tested in Insomnia:

![13-orm-homework-demo-01](https://user-images.githubusercontent.com/39867916/187050356-d78d52ad-88fd-4dfb-a1d4-fbbc3fd55d1c.gif)


The second animation shows GET routes to return a single category, a single product, and a single tag being tested in Insomnia:
![13-orm-homework-demo-02](https://user-images.githubusercontent.com/39867916/187050372-9d12f2b4-a106-4b8e-82ab-8e1e47f192bc.gif)


The final animation shows the POST, PUT, and DELETE routes for categories being tested in Insomnia:
![13-orm-homework-demo-03](https://user-images.githubusercontent.com/39867916/187050385-af48ee30-b3b1-4773-869e-73504dc6d128.gif)
