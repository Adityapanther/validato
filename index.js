var emailSchema = require('./email-validate');
const schema =new emailSchema();

schema.isNotEmpty();

"raj68518@gmail.com"
"aditya.kumar.802203@gmail.com"

console.log(schema.validate("raj68518@gmail.com"));

