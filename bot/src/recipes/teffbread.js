/*
    Author: Damian Dzik
    Date: 22/12/2021
*/
const {
    MessageAttachment
} = require('discord.js')

const nodeHtmlToImage = require('node-html-to-image')

module.exports = {
    name: 'teffbread',
    async execute(msg, args) {
        try {
            const _htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
        *{
            box-sizing: border-box;
        }
        body{
            font-family: Tahoma,Verdana,Helvetica,sans-serif;;
            background-color: black;
            color: #fff;
            max-width: 300px;     
        }
        .app {
            max-width: 400px;
            padding: 15px;
            background: #161313;
            align-items: left;
            box-shadow: 0 0 5px 1px rgb(250 207 77 / 50%);
        }
        table{
            text-align: left;
            border-collapse: collapse;
            border-spacing: 0;
            text-indent: initial;
            border: 0;
            display: table;
        }
        tbody{
            display: table-row-group;
            vertical-align: middle;
            border-color: inherit;
        }
        tr{
            display: table-row;
            vertical-align: inherit;
        }
        td{
            display: table-cell;
            vertical-align: inherit;
            padding: 0;
        }
        td, th{
            padding: 0;
        }
        span{
            float: left;
            clear: left;
        }
        .line{
            border: 0;
            height: 1px;
            background-color: #554b4b;
            margin-top: 5px;
            margin-bottom: 3px;
        }
        .smalltext{
            font-size: 0.8em!important;
        }
        h1{
            margin: unset;
            display: block;
            font-size: 1.4em;
            color: #0391c4;
        }
        .itemaname{
            font-size: 16px;
            text-transform: uppercase;
            line-height: 1.1;
        }
    </style>
</head>
<body>
    <div class="app">
        <table>
            <tbody class="smalltext">
                <tr>
                    <td colspan="2">
                        <span class="itemname">
                            <h1>Teff Bread</h1>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src= "../images/foodimages/teffbread.png">
                    </td>
                    <td>
                        <span style="color: grey;">Recipe</span>
                        <span style="color: goldenrod;">Cooking</span>
                        <span>Skill level: Beginner 6</span>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <hr class="line">
                        <span style="color: goldenrod;">-- Crafting Materials</span>
                        <br>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>`

            // creating the image with the html and filling out configurations
            const images = await nodeHtmlToImage({
                html: _htmlTemplate,
                quality: 100,
                type: 'jpeg',
                puppeteerArgs: {
                    args: ['--no-sandbox'],
                },
                encoding: 'buffer',
            })

            // creating a new message attachment
            const file = new MessageAttachment(images, 'teffbread.jpeg')
            // files such as message attachments need to be sent like this 
            return msg.channel.send({
                files: [file]
            })
        } catch (error) {
            console.log(error)
        }
    }
}