const twilio = require('twilio');

require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// Create Twilio REST Client
const client = require('twilio')(accountSid,authToken)

// Array of phone numbers
const phoneNumbers = ["111-222-3333", "222-333-4444", "333-444-5555", "123-456-7890", "987-654-3210"];

// Create a for each loop
phoneNumbers.forEach(function(numbers) {
    // Check that loop works properly by console logging
    console.log(numbers)

    // Send SMS - Instantiating Twilio client to create and send messages
    client.messages
        // Create the message, taking to and from phone numbers, and body of SMS 
        .create({
            to: '+1' + numbers,
            from: process.env.TWILIO_NUMBER,
            body: 'Do you prefer fries or tots?'
        })
        // Console log the message SID to verify the SMS has been sent
        .then ((message) => console.log(message.sid))
        // Error handling: if there is an error, catch the error and console log the error code
        .catch(console.error);
});



// client.messages.create({
//     to: process.env.MY_PHONENUMBER,
//     from: process.env.TWILIO_NUMBER,
//     body: 'Hello there! This is Potato.'
// })
// .then ((message) => console.log(message.sid))
// .catch((err) => console.log(err));