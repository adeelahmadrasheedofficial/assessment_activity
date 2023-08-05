/**
 * Using Faker liberary to generate fake data 
 * for input field inside booking form section
 */
import { faker } from '@faker-js/faker';

function bookingFormFields() {
    return {
        fname: faker.person.firstName(),
        lname: faker.person.lastName(),
        email: faker.internet.email().toLowerCase(),
        phone: faker.phone.number(),
    }
};


module.exports = bookingFormFields