require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
// console.log(accountSid);
const authToken = process.env.TWILIO_AUTH_TOKEN;

// Create Twilio REST Client
const client = require('twilio')(accountSid,authToken);

client.messages.create({
    to: '+12066393200',
    from: '+14153607114',
    body: 'Hello there! This is Potato.'
})
.then ((message) => console.log(message.sid));