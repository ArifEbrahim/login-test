# Login page (updated)

An example of a login page that involves user input into a form, submission of data to an API and displaying data to a user.

The original exercise [here](https://github.com/bymiles-tech/tech-challenge-junior) was originally attempted in Oct 21 [here](https://github.com/ArifEbrahim/login-tech-test). I repeated this exercise to see what I'd do differenlty vs my original attempt and guage my level of improvement.

### Changes in this attempt

I implemented the following improvements:
- better folder structure seperating components from pages to be displayed
- extracted smaller components to make them reusable like input and button
- used CSS modules to make the CSS more specific
- fixed broken asyncronous tests that check the Policy page updates with data from the API once available
- added a test to check that the user is redirected e.g. when signing in or out
- refactored code to reduce hook dependancies and avoid re-render loops
- added a placeholder component to display whilst the App gets data from the API