var emailSchema = require('./email-validate');
const schema =new emailSchema();

schema.isNotEmpty();
schema.onlyGmail();


console.log(schema.validate("raj68518@gmail.com"));


