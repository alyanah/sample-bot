const dateformat = require('dateformat');

module.exports = {
    "name": "serverinfo",
    "callback": ({message}) => {
        let {guild} = message;

        if (!guild) {
            return;
        }

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