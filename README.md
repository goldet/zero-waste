

# zerowaste
This app attempts to help us move toward a goal of zero waste and increase community engagement by sharing excess food items in your home.

## Design 

![2zerowastedatabase](https://user-images.githubusercontent.com/112785177/212876420-85a6ce32-0afc-4cc7-ad31-6088d2bc6e46.png)

This is the database I will be using. Currently it will have two tables:

One table will be storing the products that people are giving away. This will include an automatically assigned ID, the products, the amount they have, and a contact number.

The next table will store the products that people need. This will include an automatically assigned ID, the products, the amount they need, and a contact number.

[MVP Zero Waste_ API Routes Design (1).pdf](https://github.com/goldet/zerowaste/files/10433415/MVP.Zero.Waste_.API.Routes.Design.1.pdf)

My API route design shows all the URI and the HTTP methods I will be using. In this project I will be using GET, GET by id, POST, PUT, and DELETE methods. This API route deisng also has a description of what the methods will be used for, what will be included in the request object, and what will be the response object. 
 
https://app.flowmapp.com/share/projects/2a010655-c7f5-4801-a9d2-aa0ada8ad429/userflow/3feee680-dd7b-4a18-baf0-cfa59737b8ab
 
The webflow includes the different sections of the webpage and how they will connect. Currently, there will be a header that will exist on every page. This header will include the home page, form to add food you have excess of, form to add food you need, the grid with all available food, the grid with food that people need. 


## Setup:

###### System Requirements-
Node.js 14.6.0 or newer
MacOS, Windows (including WSL), and Linux are supported

###### Intall and Start Front End

Run npm install then Run npm run dev or yarn dev or pnpm dev to start the development server on http://localhost:3000

Visit http://localhost:3000 to view your application

###### Install and Start Backend

run npm install then run npm run start

###### Install Tailwind with next.js

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona.
