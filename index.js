var emailSchema = require('./email-validate');
const schema =new emailSchema();

schema.isValidEmail();



schema.validate("aditya.kumar.802203@gmail.com")
