/*
    Author: Damian Dzik
    Date: 14/12/2021

    Image Used from: https: //bddatabase.net/us/recipe/139/
*/
const {
    MessageAttachment,
    MessageEmbed
} = require("discord.js");
// creating a message attachment with the path to the image
const file = new MessageAttachment('./src/images/foodimages/teawithfinescent.png')
module.exports = {
    name: "teawithfinescent",
    description: 'Milk Tea recipe, typically used for Imperial Cooking Boxes.',
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
                .setTitle('Tea With Fine Scent ')
                .setDescription('Skill level: Apprentice 1')
                .setThumbnail('attachment://teawithfinescent.png')
                .addFields({ // the fields with the names and amount of ingredients
                    name: 'Plants',
                    value: (4 * args).toString(),
                    inline: true
                }, {
                    name: 'Fruits',
                    value: (4 * args).toString(),
                    inline: true
                }, {
                    name: 'Mineral Water',
                    value: (7 * args).toString(),
                    inline: true
                }, {
                    name: 'Honey',
                    value: (3 * args).toString(),
                    inline: true
                }, {
                    name: '- Crafting Result',
                    value: 'Tea With Fine Scent \n Tea With Strong Scent'
                }, {
                    name: 'Hint!',
                    value: '- Use 1 blue grade "Sunflower" for plant. \n - Buy "Strawberries" from "Milano Belucci"  \n in Calpheon.'
                })

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