# reddit_clone_assessment

#Setting up steps
1.make reddit_clone_assessment folder
-mkdir reddit_clone_assessment

2.create read me file
-touch readme.md

##git
1. git init
1. git remote add origin git@github.com:christinaatx/reddit_clone_assessment.git

1. touch .gitgnore
1. add node_modules
1. add .DS_Store

##dependencies
1. npm init
1. npm install --save express knex ejs body-parser pg morgan

##setup server
- create a app.js file
- touch app.js
- put all your dependencies as requirements in your app.js file
- connect your server (preference to have a console log message to let you know your server is connected)

##create database
-createdb reddit_clone_assessment

##setup sample routes
- go into your app.js file and create your first route for users
- usersRoutes = require("./routes/users")
app.get("/routes/users");

CRUD             | REST Action | Request URL | Response Body |
create           | .post       | /users      |               |
read(all)        | .get        | /users      |               |
read(individual) | .get        | /users/0    |               |
update           | .put        | /users/0    |               |
delete           | .destroy    | /users/0    |               |

##setup knex
###Setup migration file to create your table
-Migration file info to create tables:

Users name Table
id | name  | username |

Posts Table
id | users_id | title | comment|

Comments Table
id | comment  | user_id | post_id|

###Setup and fill in info for seed files for your table
-Seeding file info to fill in info for tables:

Username Table
id | name    | username |
1  | :-------| :--------|
2  | Item One| Item Two |
3  | Item One| Item Two |

Posts Table
id | users_id | title    | comment    |
1  | :--------| :--------| :----------|
2  | Item One | Item Two | Item Three |
3  | Item One | Item Two | Item Three |

Comments table
id | comment  | user_id  | post_id    |
1  | :--------| :--------| :----------|
2  | Item One | Item Two | Item Three |
3  | Item One | Item Two | Item Three |

###setup view folder users with ejs

folder: users
index.ejs
edit.ejs
new.ejs
show.ejs
