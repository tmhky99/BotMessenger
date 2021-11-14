module.exports.config = {
	name: "thathinh",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VĐT&NTH",
	description: "Ca Dao Việt Nam",
	commandCategory: "giải trí",
	usages: "",
	cooldowns: 30
};

module.exports.run = async ({ api, event }) => {
const axios = require('axios');
const res = await axios.get(`http://le31.glitch.me/poem`);
var thính = res.data.data
return api.sendMessage(` ${thính} `, event.threadID, event.messageID)
}
