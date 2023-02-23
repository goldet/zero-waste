# Zero Waste Web App

<br />

<h3 align="center">Zero Waste</h3>

  <p align="center">
    A web app that reduces food waste ad builds community
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
     <li><a href="#design">Design</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installations">Installation</a></li>
        <li><a href="#start-frontend">Start Frontend</a></li>
        <li><a href="#start-backend">Start Backend</a></li>
      </ul>
    </li>
   <li><a href="#contact">Contact</a></li>
  </ol>
</details>


## About The Project

![Zero Waste Homescreen](https://user-images.githubusercontent.com/112785177/221006863-27640271-0b3c-4d93-a7c9-2a8956d539b2.png)


An application where people can exchange goods to reduce food waste. 

You can add a product to share or request a product. The user will input their name, contact number, and zipcode, the product name, the type of product, an image (if desired), a description, the amount, the amount type, and if it is an item to share or an item needed. In future iterations there will be authentication and user profiles so they can edit, view, and delte their products. At this time it will have delete functionlity. You will be able to search by zipcode or product type. 


### Built With

* Next.js
* Express.js
* MySQL 
* Vanilla CSS and Tailwind


### Design 
[ZeroWasteDatabase-dbdesigner (2).pdf](https://github.com/goldet/zero-waste/files/10614027/ZeroWasteDatabase-dbdesigner.2.pdf)


Currently I will be using a database with one table. In future iterations this will expand. 

The table will be storing the products that people are giving away or that people need. This will include an automatically assigned ID, the person's name, the products, the amount they have/needed, the type of product it is, a description, a contact phone number, and the zip code.


[MVP Zero Waste_ API Routes Design (1).pdf](https://github.com/goldet/zerowaste/files/10433415/MVP.Zero.Waste_.API.Routes.Design.1.pdf)

My API route design shows all the URI and the HTTP methods I will be using. In this project I will be using GET, GET by id, POST, PUT, and DELETE methods. This API route deisng also has a description of what the methods will be used for, what will be included in the request object, and what will be the response object. 
 
https://app.flowmapp.com/share/projects/2a010655-c7f5-4801-a9d2-aa0ada8ad429/userflow/3feee680-dd7b-4a18-baf0-cfa59737b8ab
 
The webflow includes the different sections of the webpage and how they will connect. Currently, there will be a header that will exist on every page. This header will include the home page, form to add food you have excess of, form to add food you need, the grid with all available food, the grid with food that people need. 


## Getting started

### Installations 

- Run `npm install` in project directory to install server-related dependencies.
- `cd client` and run `npm install` to install client dependencies.

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database: `create database products`
- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=products
  DB_PASS=YOURPASSWORD
```

- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create a table called 'products' in your database.



### Start Frontend 

Run npm run dev or yarn dev or pnpm dev to start the development server on http://localhost:3000

Visit http://localhost:3000 to view your application

### Start Backend

run npm install then run npm run start



## Contact

Golde Tischler - [LinkedIn Profile](www.linkedin.com/in/golde-tischler) - golde.tischler@gmail.com



This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona.
