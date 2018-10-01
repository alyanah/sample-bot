const lazybot = require('lazybot');
const dateformat = require('dateformat');

module.exports = new lazybot.Command({
    // The name of the command as it would be typed in Discord.
    "name": "serverinfo",
    // The command handler run when this command is executed.
    "handler": new lazybot.CommandHandler((params) => {
        let {message} = params;
        let {guild} = message;

        // If this command isn't used in a channel, ignore.
        if (!guild) {
            return Promise.resolve();
        }

        // Send an embed to the channel with the server details.
        message.channel.send("", {
            "embed": {
                "thumbnail": {
                    "url": guild.iconURL
                },
                "title": `:notepad_spiral: Server Info: ${guild.name}`,
                "description": `**ID**: ${guild.id}\n` +
                    `**Name**: ${guild.name}\n` +
                    `**Created**: ${dateformat(guild.createdAt, "mmmm dS, yyyy 'at' h:MM TT")}\n` +
                    `**Owner**: ${guild.owner.nickname}\n` +
                    `**Members**: ${guild.memberCount}`
            }
        });

        return Promise.resolve();
    })
});