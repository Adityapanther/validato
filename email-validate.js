
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
        return this;
    };

    minLength(length){
        _register.call(this, 'minLength', length.toString());
        return this;
    };

    maxLength(length){
        _register.call(this, 'maxLength', length.toString());
        return this;
    };

    isValidEmail(){
        _register.call(this, 'isValidEmail', '');
        return this;
    };

    onlyGmail(){
        _register.call(this, 'onlyGmail', '');
        return this;
    };

    onlyYahoomail(){
        _register.call(this, 'onlyYahooMAil', '');
        return this;
    };

    onlyHotmail(){
        _register.call(this, 'onlyHotMail', '');
        return this;
    };

    validate(emailId){
        this.data = emailId.toString();
        return this.properties.every(_validEmail.bind(this));
    };
}

module.exports = emailValidato;