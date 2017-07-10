let EventEmitter = require('events');

let util = require('util');


function Man () {
    
}

util.inherits(Man,EventEmitter);

let man = new Man();

function buyCar (who, who1) {
    console.log("买车给",who+who1)
}


function buyBag (who, who1) {
    console.log("买包给",who+who1)
}

// man.on('有钱',buyCar);
// man.on('有钱',buyBag);

man.once('有钱',buyCar);
man.once('有钱',buyBag);

man.emit('有钱','妹纸','妹纸1');

man.emit('有钱','妹纸','妹纸1');

man.emit('有钱','妹纸','妹纸1');

