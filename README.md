# Zero Waste Web App

<br />

<h3 align="center">Zero Waste</h3>

  <p align="center">
    A web app that reduces food waste and builds community
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
    <li>
       <a href="#improvements">Improvements</a>
       <ul>
          <li><a href="#issues">Issues</a></li>
          <li><a href="#contributing">Contributing</a></li>
         <li><a href="#contributing">Feature Ideas</a></li>
      </ul>
    </li>
   <li><a href="#contact">Contact</a></li>
  </ol>
</details>


## About The Project

![Zero Waste Homescreen](https://user-images.githubusercontent.com/112785177/221006863-27640271-0b3c-4d93-a7c9-2a8956d539b2.png)


An application where people can exchange goods to reduce food waste. 

You can add a product to share or request a product. The user will input their name, contact number, and zipcode, the product name, the type of product, an image (if desired), a description, the amount, the amount type, and if it is an item to share or an item needed. In future iterations there will be authentication and user profiles so they can edit, view, and delete their products. At this time it will have delete functionlity. You will be able to search by zipcode or product type. 


### Built With

* Next.js
* Express.js
* MySQL 
* Vanilla CSS and Tailwind


### Design 

![dbschema](https://user-images.githubusercontent.com/112785177/221045868-e706d9a7-6d03-4cb5-b674-9b4ff37dff39.png)


Currently I will be using a database with one table. In future iterations this will expand. 

The table will be storing the products that people are giving away or that people need. This will include an automatically assigned ID, the person's name, the product, the amount they have/needed, the type of amount (kilo, litre), the type of product it is, a description, a contact phone number, the zipcode, and the image_path to the image if uploaded.

![Web page flow and plan](https://user-images.githubusercontent.com/112785177/221047063-52551313-2c9e-4014-89b7-8d0eb5285ca5.png)

This is the plan of the web app in more detail. Currently there is no authentication or personal user pages. Once that is set up, the blue reflects the public pages and the purple reflects private pages. 


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

## Improvements 

## Issues

Feel free to submit issues and enhancement requests.
 

## Contributing

Contributions are welcome!

If you have a suggestion that would improve the project, please fork the repo and create a pull request. 

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your Changes (`git commit -m 'Add some NewFeature'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

## Feature ideas:

* Adding time stamps to products
* Login Page and functionality 
* User page (admin view) 
* Geolocation tags  
* Add Pagination 

## Contact

Golde Tischler - [LinkedIn Profile](www.linkedin.com/in/golde-tischler) - golde.tischler@gmail.com



This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona.
