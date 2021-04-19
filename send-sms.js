require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// Create Twilio REST Client
const client = require('twilio')(accountSid,authToken)

// Array of phone numbers
const phoneNumbers = ["+1111-222-3333", "+1222-333-4444", "+1333-444-5555", "+1123-456-7890", "+1987-654-3210"];

client.messages.create({
    to: process.env.MY_PHONENUMBER,
    from: process.env.TWILIO_NUMBER,
    body: 'Hello there! This is Potato.'
})
.then ((message) => console.log(message.sid))
.catch((err) => console.log(err));