
var core = require('./utlis/core');



function _register(metd, args){
    this.properties.push({method: metd, argument: args})
    return this;
}

function _validEmail(property){
    
    return core[property.method].call(this, property.argument);
}

class emailValidato{

    constructor(){
        this.properties = [];
    }
    
    
    isNotEmpty(){
        _register.call(this, 'isNotEmpty', '');
    };

    minLength(length){
        console.log("main");
        
        _register.call(this, 'minLength', length.toString());
    };

    maxLength(length){
        _register.call(this, 'maxLength', length.toString());

    };

    isValidEmail(){
        _register.call(this, 'isValidEmail', '');
    };

    onlyGmail(){
        _register.call(this, 'onlyGmail', '');
    };

    onlyYahoomail(){
        _register.call(this, 'onlyYahooMAil', '');
    };

    onlyHotmail(){
        _register.call(this, 'onlyHotMail', '');
    };

    validate(emailId){
        this.data = emailId;
        return this.properties.every(_validEmail.bind(this));
    };
}

module.exports = emailValidato;