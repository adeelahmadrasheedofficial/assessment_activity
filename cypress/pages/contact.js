/* Page Object Model
For Contact Section
Used this approach for demonstration purpose
*/

class contactPage {
    // Locators
    nameField = '[data-testid="ContactName"]';
    emailField = '[data-testid="ContactEmail"]';
    phoneField = '[data-testid="ContactPhone"]';
    subjectField = '[data-testid="ContactSubject"]';
    messageField = '[data-testid="ContactDescription"]';

    // Actions
    fillName(name) {
        cy.get(this.nameField).type(name);
    }

    fillEmail(email) {
        cy.get(this.emailField).type(email);
    }

    fillPhone(phone) {
        cy.get(this.phoneField).type(phone);
    }

    fillSubject(subject) {
        cy.get(this.subjectField).type(subject)
    }

    fillMessage(message) {
        cy.get(this.messageField).type(message)
    }
}

export default new contactPage();
