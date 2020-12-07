const primaryPattern = "[\w\d\.\!\#\$\%\^\&\*\(\)\-\_\=\+\|\{\}\?\`\~\ ]*";
const gMailPattern = primaryPattern + "[\@]gmail.com";
const hotMailPattern = primaryPattern + "[\@]hotmail.com";
const yahooMailPattern = primaryPattern + "[\@]yahoomail.com";
const anyEmailPattern = primaryPattern + "[\@]\w{3,20}[\.]\w{2,15}";

module.exports ={
    regex:{
        email: new RegExp(anyEmailPattern),
        gmail: new RegExp(gMailPattern),
        hotmail: new RegExp(hotMailPattern),
        yahoomail: new RegExp(yahooMailPattern),
    }
}