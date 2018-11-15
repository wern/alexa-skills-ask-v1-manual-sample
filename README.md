# alexa-skills-ask-v1-manual-sample
Sample code for manual creation of an Alexa "Greeting" skill using the Amazon Developer Web-Interface. (WiP)

## Skill Creation

* Create a new Alexa skill in the Alexa Developer Console.
* Replace the content of the JSON editor with the code provided in `ask-skill/skill.json`.
* Link the Skill to the Lambda created below.

## Lambda Creation

* Create a new lambda funbction based on the alexa-skill-facts template. This sample uses the 'old' and deprecated alexa skill sdk version 1.0. 
* Replace the JS with the code provided in `aws-lambda/index.js`. 
* Copy the `APP_ID` from your Alexa skill into the lambda's code to enable access checks.
* Create a new Alexa Skill Trigger based on teh `APP_ID`.
