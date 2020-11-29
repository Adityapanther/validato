
class emailValidato{

    constructor(){
        this.properties = [];
    }
    hi(){
        this.properties.push(this.hi())
    }

    helloHi(){
        this.properties.forEach(e =>{
           console.log(e);
           
            
        })
    }
}

module.exports = emailValidato;