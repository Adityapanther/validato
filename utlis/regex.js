const gmailPattern = /[\w\d\!\#\$\%\^\&\*\+\-\=\_\{\|\}\?\.\`\~]{1,50}\@gmail.com/mg;
const hotMailPattern = /[\w\d\!\#\$\%\^\&\*\+\-\=\_\{\|\}\?\.\`\~]{1,50}\@hotmail.com/mg;
const yahooMailPattern = /[\w\d\!\#\$\%\^\&\*\+\-\=\_\{\|\}\?\.\`\~]{1,50}\@yahoomail.com/mg;
const emailPattern = /[\w\d\!\#\$\%\^\&\*\+\-\=\_\{\|\}\?\.\`\~]{1,50}\@[\w\d\_\-]{2,50}\.[\w]{2,20}/mg;

module.exports ={
    regex:{
        email: emailPattern,
        gmail: gmailPattern,
        hotmail: hotMailPattern,
        yahoomail: yahooMailPattern,
    }
}