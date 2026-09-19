class userprofile{
    #username
    constructor(username){
        this.#username = username;
    }
    //get
    get username(){
        return this.#username;

    }
    //set
    set username(newUsername){
        if(typeof newUsername !=="string"|| newUsername.trim ===""){
            throw new error("invalid userprofile");
        }
        this.#username = newUsername.trim();
    }
}
const user = new userprofile("alex");
console.log(user.username);
