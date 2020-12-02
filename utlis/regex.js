const defaultsPattern = "[(\w\d\s)(!#$^&'*+-/=?_`{|}~)]*";
const gMailPattern = defaultsPattern + "@gmail.com";
const hotMailPattern = defaultsPattern + "@hotmail.com";
const yahooMailPattern = defaultsPattern + "@yahoomail.com"

module.exports ={
    regex:{
        gmail: gMailPattern,
        hotmail: hotMailPattern,
        yahoomail: yahooMailPattern
    }
}