# MEET app
To build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

# FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS

_"As a user, i should be able to hide and expand the events list so that I could see less or more details I want to."_

# Scenario 1: An event element is collapsed by default.

- Given user is on the home page
- When nothing is selected
- Then the event list will stay hiden

# Scenario 2: User can expand an event to see its details.

- Given the user wants to check a particular event
- When user clicks of event
- Then it shows the events details

# Scenario 3: User can collapse an event to hide its details.

- Given user already checked the details
- When user exits the event details
- Then the event collapse back to hide

# FEATURE 3: SPECIFY NUMBER OF EVENTS

_"As a user, I should be able to choose the amount of events I want to see"._

# Scenario 1: When user hasn’t specified a number, 32 is the default number.

- Given user hasnt selected the preferences
- When user is on the page
- Then the number of events is 32 by default

# Scenario 2: User can change the number of events they want to see.

- Given user enters settings
- When user changes the numver of events by preference
- Then the number is specified by user's choice

# FEATURE 4: USE THE APP WHEN OFFLINE

_"As a user I should be able to use the app even when there is no available internet."_
# Scenario 1: Show cached data when there’s no internet connection.

- Given there's no internet
- When user enters page
- Then user still have accessability even offline to the site

# Scenario 2: Show error when user changes the settings (city, time range).

- Given user is offline
- When changing location, or time
- Then shows error while doing so

# FEATURE 5: DATA VISUALIZATION

_"As a user, I should be able to see the event list in the city I am."_
# Scenario 1: Show a chart with the number of upcoming events in each city.

- Given user is on the main page
- When checking the events in a specific city
- Then there a chart showing the number of events
