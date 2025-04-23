Feature: End to end Ecommerce validation

    Scenario: Validate the ecommerce application
        Given I visit the ecommerce application
        When I log in to the application
        And I add items to Cart and checkout
        And validate the total price limit
        Then select the country submit and verify