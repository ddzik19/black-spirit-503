/*
    Author: Damian Dzik
    Date: 14/12/2021

    Image Used from: https: //bddatabase.net/us/recipe/132/
*/
const {
    MessageAttachment,
    MessageEmbed
} = require("discord.js");
// creating a message attachment with the path to the image
const file = new MessageAttachment('./src/images/foodimages/milktea.png')
module.exports = {
    name: "milktea",
    execute(msg, args) {
        try {
            // making sure we dont multiply by 0
            if (args == null) {
                // if args is null then assign a value of 1 to it
                args = 1;
            }

            // thumbnail image from: https://bddatabase.net/us/recipe/132/
            const newEmbed = new MessageEmbed()
                .setColor('#304281')
                .setTitle('Milk Tea')
                .setDescription('Skill level: Skilled 1.')
                .setThumbnail('attachment://milktea.png')
                .addFields({ // the fields with the names and amount of ingredients
                    name: 'Milk',
                    value: (3 * args).toString(),
                    inline: true
                }, {
                    name: 'Honey',
                    value: (3 * args).toString(),
                    inline: true
                }, {
                    name: 'Flour',
                    value: (2 * args).toString(),
                    inline: true
                }, {
                    name: 'Tea With Fine Scent',
                    value: (2 * args).toString(),
                    inline: true
                }, {
                    name: '- Crafting Result',
                    value: 'Milk Tea \n Smooth Milk Tea',
                    inline: false
                }, {
                    name: 'Hint!',
                    value: '- Can substitute 2 Tea With Fine Scent \n for "1 Tea With Strong Scent"',
                    inline: false
                });
            // creates the embed and sends it to the discord channel
            msg.channel.send({
                embeds: [newEmbed],
                files: [file]
            });
        } catch (error) {
            console.log(error)
        }
    }
}