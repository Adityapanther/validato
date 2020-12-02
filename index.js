var emailSchema = require('./email-validate');
const schema =new emailSchema();

schema
.isNotEmpty()





console.log(schema.validate("raj68518@hotmail.com"));


