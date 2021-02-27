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
      console.log(regex.gmail.test(this.data));
      
      return regex.gmail.test(this.data);
    },

    onlyHotMail: function onlyHotmail(){
      return regex.hotmail.test(this.data);
    },

    onlyYahooMail: function onlyYahoomail() {
      return regex.yahoomail.test(this.data);
    },

    isValidEmail: function isValidEmail(){
      console.log(this.data.match(regex.email));
      
      return regex.email.test(this.data);
    }
}