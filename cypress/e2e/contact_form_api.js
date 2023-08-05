import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import generateContactFormField from '../components/contactform_data'

const contactForm = generateContactFormField()
let responseBody
let statusCode
let statusMessage

Given('Fill all the contact form input fields', () => {
    cy.visit('/')
    cy.get('.contact').should('be.visible').scrollIntoView()
    cy.fillContactForm(contactForm)
})

When('I click on submit button & able to intercept the post request', () => {
    cy.intercept('POST', '/message').as('postRequest')
    cy.submitButton().click()
    cy.wait('@postRequest').then(response => {
        responseBody = response.request.body
        statusCode = response.response.statusCode
        statusMessage = response.response.statusMessage
    })
})

Then('The response status code should be 201', () => {
    expect(statusCode).equal(201)
    expect(statusMessage).equal('Created')
})

Then('I should able to validate the api response', () => {
    expect(responseBody.name).equal(contactForm.name)
    expect(responseBody.email).equal(contactForm.email)
    expect(responseBody.phone).equal(contactForm.phone)
    expect(responseBody.subject).equal(contactForm.subject)
    expect(responseBody.description).equal(contactForm.message)
})


Given('Fill some contact form input fields with invalid data', () => {
    cy.visit('/')
    cy.get('.contact').should('be.visible').scrollIntoView()
    cy.invalidFillContactForm(contactForm)

})

When('I click on submit button & able to intercept invalid post request', () => {
    cy.intercept('POST', '/message').as('postRequest')
    cy.submitButton().click()
    cy.wait('@postRequest').then(response => {
        responseBody = response.request.body
        statusCode = response.response.statusCode
        statusMessage = response.response.statusMessage
    })

})

Then('The response status code should be 400', () => {
    expect(statusCode).equal(400)
})

Then('I should able to validate the api response body containing errors', () => {
    expect(statusMessage).equal('Bad Request')
})
