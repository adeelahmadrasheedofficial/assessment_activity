Feature: API Testing - Booking Form
  As a test user
  I want to verify the functionality of the booking form API request

  Scenario: Verify booking_form API response for valid data
    Given Filled all the booking form input fields
    When I click on book button & able to intercept the post request
    Then The response status code should be 201
    Then I should able to validate API response

  Scenario: Verify booking_form API response for invalid data
    Given Fill input fields with invalid data or misses an input field
    When I click on book button & able to intercept the invalid post request
    Then The response status code should be 400
    Then I should able to validate the API response for errors