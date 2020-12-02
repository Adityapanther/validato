var emailSchema = require('./email-validate');
const schema =new emailSchema();

schema.isNotEmpty()
schema.onlyGmail()
schema.onlyHotmail()



console.log(schema.validate("raj68518@hotmail.com"));


