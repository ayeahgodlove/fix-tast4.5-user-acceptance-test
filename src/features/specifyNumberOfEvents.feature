Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number.
Given user hasnt selected the preferences
When user is on the page
Then the number of events is 32 by default

Scenario: User can change the number of events they want to see.
Given user enters settings
When user changes the number of events by preference
Then the number is specified by user's choice