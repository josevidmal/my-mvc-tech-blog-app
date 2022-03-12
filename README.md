# my-mvc-tech-blog-app
Tech Blog application to post comments on tech subjects. Done using Model-View-Controller (MVC) architectural pattern.

## Description

This was a Job-Seeking coding assessment, where I was required to build a Node.js application using the Model View Controller (MVC) architectural pattern. The application is a Tech Blog that allows users to login or sign up (if they don't have an existing account), each user has a dedicated Dashboard where they can create Posts about technology topics, update or delete them. Users are also able to write comments about other users' posts, giving the application a social feeling. The application uses several technologies (JavaScript, Node.js, MySQL, Handlebars, CSS) and npm packages (MySQL2, Sequelize, Express.js, Express-session, Express-handlebars, Connect-session-sequelize, dontenv, bcrypt). 

First of all, I set up the correct file structure to be able to apply the MVC pattern. Then, I created a package.json file and installed the necessary NPM packages. Next, I wrote the code for the MySQL and Sequelize configuration in connection.js, using Environment Variables and JAWSDB. After that, I wrote more code in server.js to import the necessary modules, use `session.Store`, define the PORT, define the `sess` object set up, set the template engine (`'handlebars'`), middleware and use `sequelize.sync` to sync the models to MySQL.

The next step was to write the code for all the models, setting up `User`, `Post` and `Comment` models, and defining their associations in models/index.js. Another part was to create a schema.sql file in the db directory to create the techblog_db. The following step was to create userData.json, postData.json and seed.js files, to populate the database with some information, being able to test the application in the development stage.  

Right after this was done, I proceeded to write the code for the Controllers, creating API routes in userRoutes.js and postRoutes.js, with `post`, `put` and `delete` routes to create and find a user, create posts and comments, update and delete posts, and destroy sessions when a user logs out. I also created a homeRoutes.js file with several `get` routes (`'/'`, `'/login'`, `'/signup'`, `'/dashboard'`, `'/post/:id'`, `'/post/:id/comments'`, `'/createPost'`, `'/post/:id/modify'`), to render the necessary views of the application functionalities. 

Now, while doing the previous part, I also created the auth.js and helpers.js files, containing the `withAuth()` function (which verifies if a user is logged in, if not it redirects the user to the `'/login'` home route), and `format_date: (date)` function (used to give the DATE Datatype values a MM/DD/YYYY format).

The final part was to create all the Views, starting with the main.handlebars file, containing the &lt;header&gt; and &lt;nav&gt; links. For this part I also created the post-details.handlebars and comment-details.handlebars files in views/partials, to use them in other views like homepage.handlebars and PostComments.handlebars. At the same time of this process, I wrote several .js files in public/js, to give specific functionalities to different views with certain buttons. 

## Usage and [Deployed Application Link](https://my-mvc-tech-blog-app.herokuapp.com/)

The link to the deployed application is this: https://my-mvc-tech-blog-app.herokuapp.com/

The application looks like this when it is used:

![MVC Tech Blog 1](/assets/images/mvc-tech-blog-1.png)

![MVC Tech Blog 2](/assets/images/mvc-tech-blog-2.png)

![MVC Tech Blog 3](/assets/images/mvc-tech-blog-3.png)

![MVC Tech Blog 4](/assets/images/mvc-tech-blog-4.png) 

![MVC Tech Blog 5](/assets/images/mvc-tech-blog-5.png)

![MVC Tech Blog 6](/assets/images/mvc-tech-blog-6.png)

![MVC Tech Blog 6](/assets/images/mvc-tech-blog-7.png)

![MVC Tech Blog 6](/assets/images/mvc-tech-blog-8.png)

![MVC Tech Blog 6](/assets/images/mvc-tech-blog-9.png)

![MVC Tech Blog 6](/assets/images/mvc-tech-blog-10.png)

## Technologies Used

* JavaScript
* CSS
* Handlebars
* Node.js
* NPM
* MySQL
* Express.js package
* Express-session package
* Express-handlebars package
* MySQL2 package
* Sequelize package
* Connect-session-sequelize
* Dotenv package
* Bcrypt package
* Object Oriented Programming
* Object Relational Mapping
* Heroku
* JAWSDB

## Contact Information

* GitHub Profile: [josevidmal](https://github.com/josevidmal)
* email: josevidmal@gmail.com

## License

[The MIT License](https://www.mit.edu/~amini/LICENSE.md)

Copyright 2022 Jose Vidal

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.