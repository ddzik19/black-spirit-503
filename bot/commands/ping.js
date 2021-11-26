const {SlashCommandBuilder} = require("discordjs/builder");
module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("REPLIES WITH PONG")
    ,async execute(interaction){
        await interaction.reply("Pong!");
    },
};