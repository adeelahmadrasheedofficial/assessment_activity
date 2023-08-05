import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import bookingFormFields from '../components/bookingform_data'

const bookingForm = bookingFormFields()
let responseBody
let statusCode
let statusMessage

Given('Filled all the booking form input fields', () => {
    cy.visit('/')
    cy.bookingSection().scrollIntoView()
    cy.selectRoom().first().click()
    cy.bookForToday().click({ force: true })
    cy.fillBookingForm(bookingForm)

    cy.visit('/')
    cy.bookingSection().scrollIntoView()
    cy.selectRoom().first().click()
    cy.bookForToday().click({ force: true })
    cy.fillBookingForm(bookingForm)
})

When('I click on book button & able to intercept the post request', () => {
    cy.intercept('POST', '/booking').as('postRequest')
    cy.bookButton().click()
    cy.wait('@postRequest').then(response => {
        responseBody = response.request.body
        statusCode = response.response.statusCode
        statusMessage = response.response.statusMessage
    })
})

Then('The response status code should be 201', () => {
    expect(statusCode).equal(201)
})

Then('I should able to validate API response', () => {
    expect(statusMessage).equal('Created')
    expect(responseBody.firstname).equal(bookingForm.fname)
    expect(responseBody.lastname).equal(bookingForm.lname)
    expect(responseBody.email).equal(bookingForm.email)
    expect(responseBody.phone).equal(bookingForm.phone)
})

Given('Fill input fields with invalid data or misses an input field', () => {
    cy.visit('/')
    cy.bookingSection().scrollIntoView()
    cy.selectRoom().first().click()
    cy.bookForToday().click({ force: true })
    cy.invalidBookingForm(bookingForm)
})

When('I click on book button & able to intercept the invalid post request', () => {
    cy.intercept('POST', '/booking').as('postRequest')
    cy.bookButton().click()
    cy.wait('@postRequest').then(response => {
        responseBody = response.request.body
        statusCode = response.response.statusCode
        statusMessage = response.response.statusMessage
    })
})

Then('The response status code should be 400', () => {
    expect(statusCode).equal(400)
})

Then('I should able to validate the API response for errors', () => {
    expect(statusMessage).equal('Bad Request')
})