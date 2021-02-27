var emailSchema = require('./email-validate');
const schema =new emailSchema();

schema
// .isValidEmail()
.onlyGmail();

console.log(schema.validate("aditya.kumar.802203@gmail.com"));


