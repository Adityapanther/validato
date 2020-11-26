var e = require('./email-validate');
var d =new e();
d.isNotEmpty()

console.log(d.validate("raj68518@gmail.com"));
setTimeout( ()=>{
    var dot = d.validate("ajfiuf")
    console.log(dot);
    
}, 5000)
