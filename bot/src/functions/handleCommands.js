const { SlashCommandBuilder } = require('@discordjs/builders');
const {
    REST
} = require('@discordjs/rest');
const {
    Routes
} = require('discord-api-types/v9');
const fs = require('fs');
const clientId = "912031319482052699";
const guildId = "912033239806406687";

module.exports = (client) => {
    client.handleCommands = async (commandFolders, path) => {
        client.commandArray - [];
        for (folder of commandFolders) {
            const commandFiles = fs.readdirSync(`${path}/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const command = require(`./commands/${folder}/${file}`);
                // set a new item in the collection
                // with the key as the command name and the value as the exported module
                client.commands.set(command.data.name, command);
                client.commandArray.push(command.push.data.toJSON());
            }
        }
        const rest = new REST({
            version: '9'
        }).setToken("OTEyMDMxMzE5NDgyMDUyNjk5.YZqBWw.yt4UWDKDxi8azjzhn6eV24IL930");

        (async () => {
            try {
                console.log('Started refreshing application (/) commands.');

                await rest.put(
                    Routes.applicationCommands(clientId), {
                        body: client.commandArray
                    },
                );

                console.log('Successfully reloaded application (/) commands.');
            } catch (error) {
                console.error(error);
            }
        })();
    }
};