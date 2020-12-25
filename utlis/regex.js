const gmailPattern = /[\w\d\.\!\#\$\%\^\&\*\(\)\-\_\=\+\|\{\}\?\`\~\ ]*[\@]gmail.com/mg;
const hotMailPattern = /[\w\d\.\!\#\$\%\^\&\*\(\)\-\_\=\+\|\{\}\?\`\~\ ]*[\@]hotmail.com/mg;
const yahooMailPattern = /[\w\d\.\!\#\$\%\^\&\*\(\)\-\_\=\+\|\{\}\?\`\~\ ]*[\@]yahoomail.com/mg;
const emailPattern = /[\w\d\.\!\#\$\%\^\&\*\(\)\-\_\=\+\|\{\}\?\`\~\ ]*[\@]\w{3,20}[\.]\w{2,15}/mg;

module.exports ={
    regex:{
        email: emailPattern,
        gmail: gmailPattern,
        hotmail: hotMailPattern,
        yahoomail: yahooMailPattern,
    }
}