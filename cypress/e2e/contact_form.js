import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import generateContactFormField from '../components/contactform_data'

const contactForm = generateContactFormField()

Given('I am on the homepage as a browser user', () => {
    cy.visit('/')
})

When('I navigate to the contact form section', () => {
    cy.get('.contact').should('be.visible').scrollIntoView()
})

Then('I enter valid name, email, phone, subject, and message', () => {
    // using pageObjectModel with cypress command
    cy.fillContactForm(contactForm)
})

When('I click on the "Submit" button', () => {
    cy.submitButton().click()
    cy.wait(5000)
})

Then('I a success message is displayed', () => {
    let message = `Thanks for getting in touch ${contactForm.name}`
    cy.verifyFormSubmission(message)
})

When('I submit the form without filling in all the required fields', () => {
    // intentionally not filling name & subject field
    cy.invalidFillContactForm(contactForm)
})

Then('I should see error messages for the missing fields', () => {
    //verifying the alert message
    cy.get('.alert').should('be.visible')
    cy.verifyMissingFields()
})

When('I fill in the contact form with an invalid email', () => {
    cy.invalidEmailInContactForm(contactForm)
})

Then('I submit the contact form', () => {
    cy.submitButton().click()
    cy.wait(5000)
})

Then('I should see an error message indicating the invalid email', () => {
    cy.invalidEmailAlert()
})
