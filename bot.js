const Discord = require('discord.js');
const client = new Discord.Client();
const generator = require('generate-password');
/*
client.on('ready', () => {
  var i = 0;
    while (i<10) { //Number of messages
var password = generator.generate({
    length: 16,
    numbers: true
    });
var channel = client.channels.get('682015187947225097');
 channel.send("https://discord.gift/" + password); //Channel ID
 //message.channel.send("https://discord.gift/" + password);
 i++;
}
});
*/

client.on('message', message => {
	if (message.content === "!gen") {
  		var i = 0;
    	while (i < 2) { //Number of messages
			var password = generator.generate({
		    	length: 16,
		    	numbers: true
   			});
			message.author.send("https://discord.gift/" + password); //Channel ID
			message.reply("Sent 2 links privately!");
		 	i++;
		}
	}
});

client.on('message', message => {
	if (message.content === "!drop") {
		var i = 0;
	    while (i < 10) { //Number of messages
		var password = generator.generate({
		    length: 16,
		    numbers: true
	    });
			var channel = client.channels.get('761649936193814558');
		 	message.channel.send("https://discord.gift/" + password);
			i++;
		}
	}
});

client.on('message', message => {
	if (message.content === "!spam") {
		var i = 0;
	    while (i < 100) { //Number of messages
		var password = generator.generate({
		    length: 16,
		    numbers: true
	    });
			var channel = client.channels.get('761649936193814558');
		 	channel.send("https://discord.gift/" + password);
			i++;
		}
	}
});

client.on('message', message => {
	if (message.content === "!spamlots") {
		var i = 0;
	    while (i < 1000) { //Number of messages
		var password = generator.generate({
		    length: 16,
		    numbers: true
	    });
			var channel = client.channels.get('761649936193814558');
		 	channel.send("https://discord.gift/" + password);
			i++;
		}
	}
});

client.on('message', message => {
	if (message.content === "!credit") {
		message.channel.send("Credit to Senshi Kai for main code. Owned by Skull Rewards");
	}
});
 
client.login('NzQ0NjczMTk5MzAzNjg4MjEy.Xzmo9g.fISiK1DdhAIunJoTVM4bf4X5Go4'); //Bot Token 
