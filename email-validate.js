
class emailValidato{
    emailId;

     data = [];
    
    isNotEmpty(){
        if (this.emailId != "" && this.emailId != "undefined") {
            this.data.push(true);
        }
        this.data.push(false);
    }

    minLength(length){
        if (this.emailId.length >= length) {
            return true;
        }
        return false;
    }

    maxLength(length){
        if (this.emailId.length <= length) {
            return true;
        }
        return false;
    }

    validate(emailId) {
        this.emailId = emailId;
        this.data.forEach(e => {
            if (e === true) {
                console.log("hi");
                
                return true
            } else {
                return false
            }
        })
    }
}

module.exports = emailValidato;