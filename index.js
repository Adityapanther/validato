var emailSchema = require('./email-validate');
const schema =new emailSchema();

schema.isNotEmpty();
schema.onlyGmail();


console.log(schema.validate("raj68518@gmail.com"));






"raj68518@gmail.com"
"aditya.kumar.802203@gmail.com"
"adityar617@gmail.com"
"teachnicalwithme@gmail.com"
"aditya.&kumar.802202@gmail.com"