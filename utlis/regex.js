const primaryPattern = /[\w\d\.\!\#\$\%\^\&\*\(\)\-\_\=\+\|\{\}\?\`\~\ ]*[\@]gmail.com/mg;
const gMailPattern = primaryPattern + "";
const hotMailPattern = primaryPattern + "[\@]hotmail.com";
const yahooMailPattern = primaryPattern + "[\@]yahoomail.com";
const anyEmailPattern = primaryPattern + "[\@]\w{3,20}[\.]\w{2,15}";

module.exports ={
    regex:{
        email: primaryPattern,
        gmail: new RegExp(gMailPattern),
        hotmail: new RegExp(hotMailPattern),
        yahoomail: new RegExp(yahooMailPattern),
    }
}