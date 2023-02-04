const fetch = require('node-fetch');
const events = require('events');

class mcstatus extends events.EventEmitter {

    constructor(options){
        super();
        this.type = null;
        this.ip = null;
    }
    
    
}