'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Terrible Dad Jokes';

/**
 * Array containing space facts.
 */
var FACTS = [
    "Our wedding was so beautiful, even the cake was in tiers.",
    "I went to a book store and asked the saleswoman where the Self Help section was, she said if she told me it would defeat the purpose.",
    "What did the mountain climber name his son? Cliff.",
    "I was thinking about moving to Moscow but there is no point Russian into things.",
    "People are making apocalypse jokes like there’s no tomorrow.",
    "Why do crabs never give to charity? Because they’re shellfish.",
    "What do you call an Argentinian with a rubber toe? Roberto.",
    "When you have a bladder infection, urine trouble.",
    "Without geometry life is pointless.",
    "What’s the advantage of living in Switzerland? Well, the flag is a big plus.",
    "I’ve deleted the phone numbers of all the Germans I know from my mobile phone. Now it’s Hans free.",
    "How do you organize a space party? You planet.",
    "What do you call a group of killer whales playing instruments? An Orca-stra.",
    "A Sandwich walks into a bar, the bartender says “Sorry, we don’t serve food here.",
    "“Doctor, I’ve broken my arm in several places” Doctor “Well don’t go to those places.”",
    "What cheese can never be yours? Nacho cheese."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your super funny dad joke: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a dad joke, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};