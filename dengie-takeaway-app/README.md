# Dengie Takeaway App
Created using React with Redux and deployed on heroku

Give it a go at <a href="https://jt-dengie-takeaways.herokuapp.com/">Dengie Takeaways</a>.

This is a basic takeaway app for my local area, where users can pick a restaurant, create an order, and go through to the checkout, and post their order to the DB.

## This project showcases
An ability to create and deploy a React app, including linking it to my own backend.<br>
Using functional components and hooks.<br>
Loading icons whilst waiting for data from the server.<br>
Responsive web design for all screen sizes.<br>
Using Redux with Redux toolkit.<br>
Using Redux Persist to persist selected data.<br>
Using axios via custom Redux middleware to make API requests using parameters and route parameters.<br>
Creating common components to be reused in many different contexts<br>
Working with events.<br>
Form validation using Joi.<br>
Asynchronous code and conditional rendering.<br>
Using external and personally created modules, including using npm and the terminal.<br>
Deployment using heroku<br>
Routing.<br>
File management and cleancoding practices.<br>
Debugging and patching upon Deployment.<br>

## Homepage
### Postcode Checker
Allows the user to type in a postcode which will then filter the list of restaurants to only include those that deliver to the specified postcode.
Uses Regex and validation to display an error if a valid postcde is not entered.

### Restaurant List
Displays a list of cuisines and restaurants of that cuisine type. Clicking on the restaurant will take you through to that restauratns menu. If a restaurant is closed, the link will be disabled.

## Menu
Shows all items on the menu. On clicking an item, a modal appears where you can select the quantity to add to basket. If the item has options (i.e. Chicken, Lamb) allows user to choose their option.<br>
Has a menu locator to scroll the user to the relevent part of the menu.<br>
Has a basket where user can increment or decrement items in the basket, allows them to select collection or delivery, and disables the checkout button if user does not meet the minimum delivery requirements. On small screens, basket is turned into a modal, accessed by clicking a banner at the bottom of the screen.



## Checkout
Allows user to review their order, then fill out a form with their details. Form is creating using Formik with Yup validation. Checkout button is disabled until from is filled in correctly, minimum order is reached and payment method is selected<br>


## Order Complete
Upon user submitting an order, all the data is sent to the database, and user either receives a message confirming the order and supplying an order ID, or, if POST request fails, an error page.
