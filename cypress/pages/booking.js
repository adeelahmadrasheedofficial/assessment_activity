/* Page Object Model
For Booking Section
Used this approach for demonstration purpose
*/

class bookingPage {
    // Locators
    fnameField = '.room-booking-form > .form-control';
    lnameField = '.col-sm-4 > :nth-child(2) > .form-control';
    emailField = '.col-sm-4 > :nth-child(3) > .form-control';
    phoneField = '.col-sm-4 > :nth-child(4) > .form-control';

    // Actions
    fillFname(fname) {
        cy.get(this.fnameField).type(fname);
    }

    fillLname(lname) {
        cy.get(this.lnameField).type(lname);
    }

    fillEmail(email) {
        cy.get(this.emailField).type(email);
    }

    fillPhone(phone) {
        cy.get(this.phoneField).type(phone);
    }

}

export default new bookingPage();
