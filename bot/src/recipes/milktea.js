const {
    MessageEmbed
} = require("discord.js");
module.exports = {
    name: "milktea",
    description: 'Milk Tea recipe, typically used for Imperial Cooking Boxes.',
    execute(msg, args) {
        let m = 3
        let h = 3
        let f = 2
        let t = 2
        if (args != null) {
            m = (3 * args)
            h = (3 * args)
            f = (2 * args)
            t = (2 * args)
        }

        // thumbnail image from: https://bddatabase.net/us/recipe/132/
        const newEmbed = new MessageEmbed()
            .setColor('#304281')
            .setTitle('Milk Tea')
            .setDescription('NOTE: In the Black Desert the craft is heavily affected by your skill level. At higher skill levels you can use less materials and get more products.')
            .setThumbnail('https://bddatabase.net/items/new_icon/03_etc/07_productmaterial/00009263.png')
            .addFields({ // the fields with the names and amount of ingredients
                name: 'Milk',
                value: m.toString(),
                inline: true
            }, {
                name: 'Honey',
                value: h.toString(),
                inline: true
            }, {
                name: 'Flour',
                value: f.toString(),
                inline: true
            }, {
                name: 'Tea With Fine Scent',
                value: t.toString(),
                inline: true
            }, );
        // creates the embed and sends it to the discord channel
        msg.channel.send({
            embeds: [newEmbed]
        });
    }
}