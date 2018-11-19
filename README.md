# 00 - Angular - Starting with Angular

.Challenge {

 Angular App on Github
 * Create a new Angular project, and change the title with this format : Welcome to [Your name] website !. You should do this     keeping the title attribute. You then need to push your code on a Github repository.

}
____________________________________________________________________________________________________________________________

# 01 - Angular - The Components

.Challenge {

  Show me your property
  To achieve this challenge, leave the Angular app that you created in the previous quest

  * Creates a component sign-upthat will have a propertyemail
  * The component must be called in the component<sign-up></sign-up><App />
  * Post the link to your repository as a solution.

 }
 ____________________________________________________________________________________________________________________________
 
 # 02 - Angular - The binding
 
 .Challenge {
 
  To achieve this challenge, leave the Angular app that you created in the previous quest .

  In this challenge you will have to create a new component user-profile, then display it in the browser.

  * This component will contain an object User:

  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'photolink'
  };
  
  You will have to display in the form of a contact sheet all this information using interpolation and binding.

  For that you will have several stages:

  * You have to display a picture of the user
  * It takes an input field to edit in browser the quote ( quote )
  * Age must be displayed
  * You have to display Nom Prénom
  * You have to have a button to hide the age (think about the property hidden)

 }
 ____________________________________________________________________________________________________________________________
 
 # 03 - Angular - The Router
 
.Challenge {

  Let me navigate
  To achieve this challenge, leave the Angular app that you created in the previous quest

  The purpose of this challenge is to display a menu to navigate between the component and the component<sign-up/><user-       profile/>

  * Creates a component that will contain two links, one to and one to<menu/>/signup/user
  * Creates the router with 3 routes, one on signup, one on, userand one by default that displays the component<user-             profile/>
  * The component must contain only the component and the directive<app/><menu/><router-outlet/>
  * Post the link to your repository as a solution.

}
____________________________________________________________________________________________________________________________

# 04 - Angular - The Directives

.Challenge {

  To achieve this challenge, leave the Angular app that you created in the previous quest .

  The goal of this challenge is to create a list of movies (you can get inspired by it ), whose display depends on two         directives. 

  * We want the first element of your list to change style on the flyover. For that, create a new CSS class (which defines a     color and a text size, for example), then apply it to your HTML element via a custom attribute directive of your own.
  * Creates a custom structural directive that allows the display of the list only if a variable showMovieshas value true.
  * Post the link to your repository as a solution.

}
