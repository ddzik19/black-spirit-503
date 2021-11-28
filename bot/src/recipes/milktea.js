const {
    Client,
    Attachment,
    Message,
    MessageEmbed
} = require("discord.js");
module.exports = {
    name: "milktea",
    description: 'Milk Tea recipe, typically used for Imperial Cooking Boxes.',
    execute(msg, args) {
        // thumbnail image from: https://bddatabase.net/us/recipe/132/
        const newEmbed = new MessageEmbed()
            .setColor('#304281')
            .setTitle('Milk Tea')
            .setDescription('the official bdo database milk tea description here <===')
            .setThumbnail('https://bddatabase.net/items/new_icon/03_etc/07_productmaterial/00009263.png')
            .addFields({
                name: 'Milk',
                value: '3',
                inline: true
            }, {
                name: 'Honey',
                value: '3',
                inline: true
            }, {
                name: 'flour',
                value: '2',
                inline: true
            }, {
                name: 'Tea With Fine Scent',
                value: '2',
                inline: true
            }, );
        msg.channel.send({
            embeds: [newEmbed]
        });
        //msg.channel.send(newEmbed);
    }
}