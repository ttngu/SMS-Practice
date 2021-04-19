const twilio = require('twilio');

require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// Create Twilio REST Client
const client = require('twilio')(accountSid,authToken)

// Array of phone numbers
const phoneNumbers = ["111-222-3333", "222-333-4444", "333-444-5555", "123-456-7890", "987-654-3210"];

phoneNumbers.forEach(function(numbers) {
    console.log(numbers)

    client.messages
        .create({
            to: '+1' + numbers,
            from: process.env.TWILIO_NUMBER,
            body: 'Do you prefer fries or tots?'
        })
        .then ((message) => console.log(message.sid))
        .catch((err) => console.log(err));
});



// client.messages.create({
//     to: process.env.MY_PHONENUMBER,
//     from: process.env.TWILIO_NUMBER,
//     body: 'Hello there! This is Potato.'
// })
// .then ((message) => console.log(message.sid))
// .catch((err) => console.log(err));