# Support Engineer Homework
### This is a take-home coding assignment for the Support Engineer role at Smartrr.

This project was completed as a take-home assignment for Smartrr. The goal of the assignment was to answer the following questions using JS and SQL:

## Questions:

**JavaScript**
- Write a JavaScript application. The app can be a CLI or web-based app. It should provide a user with the options to run four reports:
  1. Takes the value of a `myShopifyDomain` field as an input and returns their `optimization` settings.
  2. Loops through all organizations and shows the date they were created (DD/MM/YYYY), their `status`, and `planName` sorted by oldest to newest.
  3. Returns the list of organizations whose status is cancelled.
  4. Takes the value of an `orgName` and returns the organization record in JSON format.

**SQL**
- Write SQL queries to return:
  - How many organizations do not have account plans? 
  - How many organizations have more than one account plan?
  - List all organizations that have only one account plan.
  - List all organizations that have the PASSWORDLESS feature set to true.

## Built With 

- JavaScript
- NodeJS
- SQLite
- HTML5
- CSS3

## Prerequisites

You will need a web browser to view the JavaScript portion of this project. No set up required. Works best on:

- Firefox
- Google Chrome
- Safari

For the SQL queries, you will need to have the following installed:

- SQLite
- Node.js
- CSV-parser

## Live Demo

<https://raybgomez.github.io/support_engineer_homework/>

Deployed on [GitHub Pages](https://pages.github.com/) 

### Usage

**JavaScript Web-based App**

Click on the above live demo link. 
- **Optimization Settings**. In the input field, type in the Shopify domain and click submit.
- **List Organizations by Name**. Click on the button "Show Organizations Oldest to Newest".
- **List Cancelled Organizations**. Click on the button "Show Cancelled Organizations".
- **Get Organization Record**. In the input field, type in the Organization name and click submit.

**SQL Queries**

- **Step 1**. You will find the SQL queries in the query.js file.
- **Step 2**. Open query.js in VSCode.
- **Step 3**. Install SQLite and csv parser by typing npm install sqlite3 csv-parser.
- **Step 4**. Download the latest version of Node.js at nodejs.org.
- **Step 5**. Open the terminal in your VSCode and type in "node query.js".
- **Step 6**. You will see the answers to all four SQL questions.
- **Note**. You will not be able to see "mydatabase.db" file with the default text editor in VSCode. You must install the SQLite extension. Then type in VSCode's search box ">SQLite: Open Database" and select mydatabase.db. SQLite Explorer will show up at the bottom left corner.


## Contributing

Contributions, issues, and feature requests are welcome!
