# Introduction 
Cypress 10+ with Cucumber. This project is maintained by Adeel Ahmad & written for e2e test-automation assigned by the Green Lambda Team For Automation Test Activity.

- ## 💻 Pre-requisites

1. Node JS
2. Optional: Java 8 for Allure Reporter
3. Optional: Json-formatter for Native Reporter option(depends on your OS: https://github.com/cucumber/json-formatter)
4. For Allure Reporter: If using Ubuntu/Linux type "sudo apt install allure"

## 🚀 Install the project

Install project dependencies with: `npm i`
You should be good to go, and ready to run the tests.

## Run the tests:

To run the tests, you have to execute either of the following commands.

1. Interactive Execution: `npm run cy:open`
2. Standard Execution: `npm run cy:run`
4. Allure Report: 
   1. To run tests with allure reporter: npm run cy:allure
   2. To generate allure report: npm run allure:report
   3. To open allure report simply type: `allure open` after running the tests with `npm run cy:allure`
   4. You'll get a report like this one: GitHub Page - Allure Report Sample: https://joanesquivel.github.io/cypress-cucumber-boilerplate/
5. If you desire to run tests on cypress dashboard follow below steps:
   1. Create an account on cypress dashboard: https://www.cypress.io/cloud
   2. Add cypress dashboard id in `cypress.config.js > projectId: "xxxxxx"`
   3. Add cypress dashboard key to package.json > scripts > cy:dashboard 
   4. use command npm run cy:dashboard to run all the tests with cypress dashboard
6. Github Actions: I've created a standard github action workflow file inside .github > workflows > cypress.yml. Just push it along with the code to run these test in pipeline


If you find it difficult to setup the project, kindly consult with me. I'll be more than happy to guide you through the process. Furthermore, All the necessary documentation, videos and screenshots has been attached inside documentation directory aswell.