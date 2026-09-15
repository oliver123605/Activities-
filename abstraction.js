class notifier{
    #checkNetwork(){
        return true;
    }
    #connectServer(){
        console.log("connecting to server");
    }
    #formatmessage(text){
        return '[Encrypted] ${text}';
    }
    send(message){
    if (this.#checkNetwork()){
        this.connectServer();
        const readyMessage = this.#formatmessage(message);
        console.log('sent: "$readymessage}"');
    }
    }
}
const appNotifier = new notifier();
appNotifier.send("hello world!");
