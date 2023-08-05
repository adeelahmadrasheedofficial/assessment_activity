// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Importing POM for contact & booking section
import contactPage from '../pages/contact'
import bookingPage from '../pages/booking'

Cypress.Commands.add('fillContactForm', (formData) => {
    contactPage.fillName(formData.name)
    contactPage.fillEmail(formData.email)
    contactPage.fillPhone(formData.phone)
    contactPage.fillSubject(formData.subject)
    contactPage.fillMessage(formData.message)
})

Cypress.Commands.add('invalidEmailInContactForm', (formData) => {
    contactPage.fillName(formData.name)
    contactPage.fillEmail('invalidemail')
    contactPage.fillPhone(formData.phone)
    contactPage.fillSubject(formData.subject)
    contactPage.fillMessage(formData.message)
})

Cypress.Commands.add('invalidFillContactForm', (formData) => {
    contactPage.fillEmail(formData.email)
    contactPage.fillPhone(formData.phone)
    contactPage.fillMessage(formData.message)
})

Cypress.Commands.add('verifyFormSubmission', (confirmationMessage) => {
    cy.get(':nth-child(2) > div > h2').should('contain.text', confirmationMessage)
})

Cypress.Commands.add('verifyMissingFields', () => {
    cy.get('.alert > :nth-child(2)')
        .invoke('text').then(errNameField => {
            // Check if the error message matches the expected value for either :nth-child(1), :nth-child(2) or :nth-child(3)
            expect(errNameField).to.satisfy(message => {
                return (message === 'Subject may not be blank' ||
                    message === 'Subject must be between 5 and 100 characters.' ||
                    message === 'Name may not be blank')
            })
        })
    cy.get('.alert > :nth-child(1)')
        .invoke('text').then(errSubjectField => {
            expect(errSubjectField).to.satisfy(message => {
                return (message === 'Subject may not be blank' ||
                    message === 'Subject must be between 5 and 100 characters.' ||
                    message === 'Name may not be blank')
            })
        })
})
Cypress.Commands.add('submitButton', () => {
    cy.get('#submitContact').should('be.visible')
})
Cypress.Commands.add('invalidEmailAlert', () => {
    cy.get('.alert > p').invoke('text').then(errEmail => {
        expect(errEmail).equal('must be a well-formed email address')

    })
})

Cypress.Commands.add('fillBookingForm', (formData) => {
    bookingPage.fillFname(formData.fname)
    bookingPage.fillLname(formData.lname)
    bookingPage.fillEmail(formData.email)
    bookingPage.fillPhone(formData.phone)
})

Cypress.Commands.add('invalidBookingForm', (formData) => {
    bookingPage.fillFname(formData.fname)
    bookingPage.fillLname(formData.lname)
    bookingPage.fillEmail('testemail')
    bookingPage.fillPhone(formData.phone)
})

Cypress.Commands.add('bookButton', () => {
    cy.get('.col-sm-4 > .btn-outline-primary').should('be.visible')
})

Cypress.Commands.add('selectRoom', () => {
    cy.get('.col-sm-7 > .btn').should('be.visible')
})
Cypress.Commands.add('bookForToday', () => {
    cy.get('.rbc-today').should('be.visible')
})
Cypress.Commands.add('bookingSection', () => {
    cy.get('.room-header > .col-sm-10').should('be.visible')
})
Cypress.Commands.add('missingBookingFieldAlert', () => {
    cy.get('.alert > :nth-child(1)')
        .invoke('text').then(errDateField => {
            expect(errDateField).to.satisfy(message => {
                return message === 'must not be null' ||
                    message === 'must be a well-formed email address'
            })
        })
    cy.get('.alert > :nth-child(2)')
        .invoke('text').then(errDateField => {
            expect(errDateField).to.satisfy(message => {
                return message === 'must not be null' ||
                    message === 'must be a well-formed email address'
            })
        })

})

