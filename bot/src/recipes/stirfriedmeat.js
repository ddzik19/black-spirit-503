/*
    Author: Damian Dzik
    Date: 14/12/2021

    Image Used from: https: //bddatabase.net/us/recipe/165/
*/
const {
    MessageAttachment,
    MessageEmbed
} = require("discord.js");
const file = new MessageAttachment('./src/images/stirfriedmeat.png')
module.exports = {
    name: "stirfriedmeat",
    description: 'Milk Tea recipe, typically used for Imperial Cooking Boxes.',
    execute(msg, args) {
        try {
            // making sure we dont multiply by 0
            if (args != null) {
                // if args is null then assign a value of 1 to it
                args = 1;
            }

            // thumbnail image from: https://bddatabase.net/us/recipe/132/
            const newEmbed = new MessageEmbed()
                .setColor('#304281')
                .setTitle('Stir-Fried Meat')
                .setDescription('Skill level: Apprentice 1')
                .setThumbnail('https://bddatabase.net/items/new_icon/03_etc/07_productmaterial/00009426.png')
                .addFields({ // the fields with the names and amount of ingredients
                    name: 'Meat',
                    value: (7 * args).toString(),
                    inline: true
                }, {
                    name: 'Base Sauce',
                    value: (2 * args).toString(),
                    inline: true
                }, {
                    name: 'Onion',
                    value: (2 * args).toString(),
                    inline: true
                }, {
                    name: 'Hot Pepper',
                    value: (3 * args).toString(),
                    inline: true
                }, {
                    name: '- Crafting Result',
                    value: 'Stir Fried Meat \n Special Stir-Fried Meat',
                    inline: false
                }, {
                    name: 'Hint!',
                    value: '- Can substitute 2 Onion for \n "1 green grade Onion."'
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