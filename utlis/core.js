var regex = require('./regex').regex;

module.exports = {
    isNotEmpty : function isNotEmpty(){
      
     if (this.data === '' || this.data === undefined) {
         return false
     }else {
       return true
     }
    },

    onlyGmail : function onlyGmail(){
      return regex.gmail.test(this.data)
    },

    onlyHotMail: function onlyHotmail(){
      return regex.hotmail.test(this.data);
    },

    onlyYahooMail: function onlyYahoomail() {
      return regex.yahoomail.test(this.data);
    },

    isValidEmail: function isValidEmail(){
      console.log(new RegExp('[\w\d.\!\#\$\%\^\&\*\(\)\-\_\=\+\|\{\}\?\`\~ ][\@]gmail.com').exec("aditya.kumar.802203@gmail.com"));
      console.log(this.data);
        return regex.email.test(this.data)
    }
}