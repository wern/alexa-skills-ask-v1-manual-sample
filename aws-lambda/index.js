/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

'use strict';
const Alexa = require('alexa-sdk');
const APP_ID = '';

const handlers = {
    'LaunchRequest': function () {
        this.response.speak('Hey Du, sag mal was!')
                     .listen('Sag doch mal was.')
                     .shouldEndSession(false);
        this.emit(':responseReady');
    },
    'HeyDuIntent': function () {
        const name = this.event.request.intent.slots.name.value;
        this.response.speak('Hey ' + name + '!')
                     .shouldEndSession(false);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        this.response.ask('Wenn Du mir sagst wer Du bist antworte ich Dir.')
                     .listen('Sag mal was!');
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak('Ok, dann halt nicht.');
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak('Und tschüss.');
        this.emit(':responseReady');
    },
    'SessionEndedRequest': function () {
        this.response.speak('Bin dann mal weg.');
        this.emit(':responseReady');
    },
    'Unhandled': function () {
        this.response.speak('Oh oh, ich mus weg.');
        this.emit(':responseReady');
    }
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
