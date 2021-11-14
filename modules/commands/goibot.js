const fs = require("fs");
module.exports.config = {
	name: "gọi bot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Lê Định", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bot")==0 || (event.body.indexOf("Bot")==0)) {
		var msg = {
				body: "??? 🥲",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
