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
        return  this.data.match(regex.gmail);
    },

    onlyHotmail: function onlyHotmail(){
      return this.data.match(regex.hotmail);
    },

    onlyYahoomail: function onlyYahoomail() {
      return this.data.match(regex.yahoomail);
    }
}