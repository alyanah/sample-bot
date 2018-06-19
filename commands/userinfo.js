const dateformat = require('dateformat');

module.exports = {
    "name": "userinfo",
    "callback": ({message, args}) => {
        let {member} = message;

        if (args[0] && args[0].member) {
            member = args[0].member;
        }

        if (!member) {
            return;
        }

        let name = member.nickname || member.user.username;
        let roles = member.roles.filter(r => !r.name.startsWith("@")).map(r => r.name);

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