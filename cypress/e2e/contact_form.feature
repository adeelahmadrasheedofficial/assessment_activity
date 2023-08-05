Feature: Contact Form
  As a browser user
  I want to send a message using the contact form

  Background:
    Given I am on the homepage as a browser user


  Scenario: Submitting a valid contact form
    When I navigate to the contact form section
    Then I enter valid name, email, phone, subject, and message
    When I click on the "Submit" button
    Then I a success message is displayed
    
  Scenario: Submitting a contact form with missing fields
    When I submit the form without filling in all the required fields
    When I click on the "Submit" button
    Then I should see error messages for the missing fields

  Scenario: Submitting a contact form with invalid email
    When I fill in the contact form with an invalid email
    Then I submit the contact form
    Then I should see an error message indicating the invalid email
