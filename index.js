var emailSchema = require('./email-validate');
const schema =new emailSchema();

schema.isValidEmail();



console.log(schema.validate("@yahoomail.com"));


