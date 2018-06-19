const dateformat = require('dateformat');

module.exports = {
    // The name of the command as it would be typed in Discord.
    "name": "serverinfo",
    // The callback function called when this command is executed.
    "callback": ({message}) => {
        let {guild} = message;

        // If this command isn't used in a channel, ignore.
        if (!guild) {
            return;
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
    }
};