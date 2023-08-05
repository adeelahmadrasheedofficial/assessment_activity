Feature: Booking Form
  As a browser user
  I want to book a room using the booking form

  Background:
    Given I am on the homepage as a browser user


  Scenario: Booking a room with valid details
    When I navigate to the book a room section
    Then I am able to choose a room from the list
    Then I fill in the booking form with valid details
    When I submit the booking form
    Then I should see a success message

  Scenario: Booking a room without providing check-in and check-out dates
    When I navigate to the book a room section
    Then I am able to choose a room from the list
    When I submit the booking form without providing check-in and check-out dates
    Then I should see an error message indicating missing dates or null value

  Scenario: Booking a room with invalid email
    When I navigate to the book a room section
    Then I am able to choose a room from the list
    When I fill in the booking form with an invalid email
    Then I submit the booking form
    Then I should see an error message indicating the invalid email
