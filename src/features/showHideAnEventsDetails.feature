Feature: show/hide an event's details

Scenario: An event element is collapsed by default.
Given user is on the home page
When nothing is selected
Then the event list will stay hiden

Scenario: User can expand an event to see its details.
Given the user wants to check a particular event
When user clicks of event
Then it shows the events details

Scenario: User can collapse an event to hide its details.
Given user already checked the details
When user exits the event details
Then the event collapse back to hide