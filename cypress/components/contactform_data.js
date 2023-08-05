/**
 * Using Faker liberary to generate fake data 
 * for input field inside contact form section
 */
import { faker } from '@faker-js/faker';

function contactFormFields() {
    return {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        subject: faker.lorem.lines(1),
        message: faker.lorem.paragraph()
    }
};

module.exports = contactFormFields