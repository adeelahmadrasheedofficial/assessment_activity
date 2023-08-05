Feature: API Testing - Contact Form
  As a test user
  I want to verify the functionality of the contact form API requests

  Scenario: Verify contact form API response for valid data
    Given Fill all the contact form input fields
    When I click on submit button & able to intercept the post request
    Then The response status code should be 201
    Then I should able to validate the api response

  Scenario: Verify contact_form API response for invalid data
    Given Fill some contact form input fields with invalid data
    When I click on submit button & able to intercept invalid post request
    Then The response status code should be 400
    Then I should able to validate the api response body containing errors
