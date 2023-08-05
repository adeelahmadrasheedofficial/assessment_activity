import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import bookingFormFields from '../components/bookingform_data'

const bookingForm = bookingFormFields()

Given('I am on the homepage as a browser user', () => {
    cy.visit('/')
})

When('I navigate to the book a room section', () => {
    cy.bookingSection().scrollIntoView()
})

Then('I am able to choose a room from the list', () => {
    cy.selectRoom().first().click()

})
Then('I fill in the booking form with valid details', () => {
    cy.bookForToday().click({ force: true })
    cy.fillBookingForm(bookingForm)
})

When('I submit the booking form', () => {
    cy.bookButton().click()
    cy.wait(3000)
})

Then('I should see a success message', () => {
    // failing this assertion intentionally due to bug in booking module
    cy.get('.success').should('be.visible')
})

When('I submit the booking form without providing check-in and check-out dates', () => {
    cy.bookForToday().click({ force: true })
    cy.fillBookingForm(bookingForm)
    cy.bookButton().click()
    cy.wait(3000)
})
Then('I should see an error message indicating missing dates or null value', () => {
    cy.get('.alert').should('be.visible')
    cy.missingBookingFieldAlert()
})

When('I fill in the booking form with an invalid email', () => {
    cy.invalidBookingForm(bookingForm)
})
Then('I should see an error message indicating the invalid email', () => {
    cy.missingBookingFieldAlert()
})
