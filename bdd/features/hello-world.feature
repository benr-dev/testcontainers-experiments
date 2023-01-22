Feature: Hello World
  Background: 
    Given the Hello World Service is running

  Scenario: Hello World service works
    When I GET the service homepage
    Then the page contains the words "Hello World"