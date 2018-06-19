const lazybot = require('lazybot');

const auth = require('./conf/auth.json');
const config = require('./conf/config.json');

var client = new lazybot.Client();

// Set the command prefix.
client.commands.prefix = config.prefix;

// Load commands from the commands directory. Returns a promise that resolves once all
// commands have been loaded.
client.commands.load("./commands")
.then(() => {
    client.login(auth.token);
});