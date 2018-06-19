const dateformat = require('dateformat');

module.exports = {
    // The name of the command as it would be typed in Discord.
    "name": "userinfo",
    // The callback function called when this command is executed.
    "callback": ({message, args}) => {
        let {member} = message;

        // By default use the member who executed this command.

        // If the first argument is specified as an @member, use that member instead.
        if (args[0] && args[0].member) {
            member = args[0].member;
        }

        // If this command isn't used in a channel, or the member can't be found, ignore.
        if (!member) {
            return;
        }

        let name = member.nickname || member.user.username;
        let roles = member.roles.filter(r => !r.name.startsWith("@")).map(r => r.name);

        // Send an embed to the channel with the server details.
        message.channel.send("", {
            "embed": {
                "thumbnail": {
                    "url": member.user.avatarURL
                },
                "title": `:notepad_spiral: User Info: ${name}`,
                "description": `**ID**: ${member.id}\n` +
                    `**Name**: ${name}\n` +
                    `**Username**: ${member.user.username}\n` +
                    `**Created**: ${dateformat(member.user.createdAt, "mmmm dS, yyyy 'at' h:MM TT")}\n` +
                    `**Joined**: ${dateformat(member.joinedAt, "mmmm dS, yyyy 'at' h:MM TT")}\n` +
                    `**Roles**: ${roles.join(", ")}`
            }
        });
    }
};