Feature: Hello World
    Scenario: Hello World service works
        Given the Hello World Service is running
        When I GET the service homepage
        Then the page contains the words "Hello World"