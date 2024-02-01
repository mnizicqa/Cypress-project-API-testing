# Cypress Project API testing

This is a project which I have done to learn Cypress testing framework. The goal of the project was to test APIs using [JSON server](https://github.com/qauni/json-server).Tests are written using Cypress version 13.6.3. There are test cases for all the main methods including GET,POST,PUT and DELETE. Main browser used for running tests was Google Chrome version 121. Tests also work on Microsoft Edge and Mozilla Firefox browsers.

You can install all of the dependencies using command in the terminal **npm install**.
Then, you will need to create **db.json** file using instructions from the git repo provided above.

To run the server you will need to use the command in the terminal **json-server db.json**. After that, you can visit (http://localhost:3000) to access JSON server site. To run the Cypress, just use the command **npx cypress open** in the terminal.
