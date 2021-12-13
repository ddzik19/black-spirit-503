const {
    MessageEmbed
} = require("discord.js");
// variables to be assigned to the embed
var eName = "";
var eTitle = "";
var desc = "";
var req = "";
var thumbnail = "";
var ingName = [];
var ingAmount = [];

const fs = require('fs');
// getting the JSON file and parsing it
const path = require('path');

// here we loop through each object in the recipes.json file. 
// looking for the name of recipe and filling in the values for the embed with the values from the json

// https://www.telerik.com/blogs/what-is-json-how-to-handle-unexpected-token-error

module.exports = {
    // thumbnail image from: https://bddatabase.net/us/recipe/132/
    name: eName,
    execute(msg, args) {
        let rawdata = fs.readFileSync(path.resolve(__dirname, 'recipes..json'));
        let json = JSON.parse(rawdata);
        for (var i = 0; i < json.length; i++) {
            var obj = json[i]
            if (obj.name == msg) {
                eName = obj.name;
                eTitle = obj.title;
                desc = obj.desc;
                req = obj.req;
                thumbnail = obj.thumbnail;
                for (var x = 0; x < obj.ingredients.length; x++) {
                    var ings = obj.ingredients[i];
                    ingName.push(ings.name);
                    ingAmount.push(ings.amount);
                }
            }
        }
        const newEmbed = new MessageEmbed()
            .setColor('#304281')
            .setTitle(eTitle)
            .addField(req)
            .setDescription(desc)
            .setThumbnail(thumbnail)
            .addFields({ // the fields with the names and amount of ingredients
                name: ingName[0],
                value: (ingAmount[0] * args),
                inline: true
            }, {
                name: ingName[1],
                value: (ingAmount[1] * args),
                inline: true
            }, {
                name: ingName[2],
                value: (ingAmount[2] * args),
                inline: true
            }, {
                name: ingName[3],
                value: (ingAmount[3] * args),
                inline: true
            }, );
        // creates the embed and sends it to the discord channel
        msg.channel.send({
            embeds: [newEmbed]
        });
    }
}