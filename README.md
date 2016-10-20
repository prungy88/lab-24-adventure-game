![cf](http://i.imgur.com/7v5ASc8.png) lab-24-text-adventure-game
====

# To Submit this Assignment
* fork this repository
* write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
* push to your repository
* submit a pull request to this repository
* submit a link to your PR in canvas
* write a question and observation on canvas

# Directions
* include an .eslintrc
* include an .eslintingore
* include a .gitignore
 * ignore the build directory
* include a package.json
 * must have lint script
 * must have test script **run karma once**
 * must have test-watch script **run karma over and over**
 * must have build script **run webpack**
 * must have build-watch script **run webpack-dev-server**
* include a webpack.config.js
 * add the html loader to your loaders array
* Create these directories to organize your code: 
 * app
 * app/component
 * app/component/`your-component-name-dir` 
 * app/service
 * app/scss
 * app/scss/lib
* create a **_theme.scss** partial 
* create a **_vendor.scss** partial
 * build bootstrap from source
* create a **
.scss** file 
 * `@import "theme"`
 * `@import "vendor"`
* create a **entry.js**
 * require your **main.scss**

## Game Features
For this assignment you'll be creating a text based adventure game.
* This game should have at least 7 rooms that the player can move between. 
* Your site should have a form that enables your player to move between rooms
* put the state of your map in a service
* put the state and logic of your player in a service
* your app should have three components
  * one for your form
  * one for your player info
  * one for your history
* you may not have the same room names or story as class lecture code

# Test
* Unit test your controllers default propertys
* Unit test your controllers methods
