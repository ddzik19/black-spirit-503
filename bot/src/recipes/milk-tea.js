const name = "milk-tea";
module.exports = {
    name: name,
    description: 'Milk Tea recipe, typically used for Imperial Cooking Boxes.',
    execute(msg, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#304281')
            .setTitle('Milk Tea')
            .setDescription('the official bdo database milk tea description here <===')
            .addFields({
                name: 'Milk',
                value: 3
            }, {
                name: 'Honey',
                value: 3
            }, {
                name: 'flour',
                value: 2
            }, {
                name: 'Tea With Fine Scent',
                value: 2
            })
        msg.channel.send(newEmbed);
        System.out.println(name);
    }

}