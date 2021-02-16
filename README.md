# BURGERS!

## LINKS

### https://dry-peak-79203.herokuapp.com/
### https://github.com/Curtis-Hatter/burger
### https://curtis-hatter.github.io/Portfolio/portfolio.html

#

### User Story

* Burgers! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, it will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* Every burger is stored in a database, whether devoured or not.

* [Check out this video of the app for a run-through of how it works](https://youtu.be/msvdn95x9OM).

#

#### Directory structure


```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

- - -
