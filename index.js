var emailSchema = require('./email-validate');
const schema =new emailSchema();

schema.isValidEmail();



// console.log(schema.validate("aditya.kumar.802203@gmail.com"));


var wsy = new RegExp('(([\w\d])*@gmail.com)', 'gm');

console.log(wsy.test("@gml.com"));
