const lazybot = require('lazybot');

const auth = require('./conf/auth.json');
const config = require('./conf/config.json');

var client = new lazybot.Client();

client.commands.prefix = config.prefix;

client.commands.load("./commands")
.then(() => {
    client.login(auth.token);
});