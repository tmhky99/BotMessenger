module.exports.config = {
    name: "yêubot",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "LVĐ",
    description: "",
    commandCategory: "không cần dấu lệnh",
    usages: "",
    cooldowns: 10,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "yêubot.gif")) request("https://i.pinimg.com/originals/5d/05/87/5d05873082dce0ed9c4f074b83446c80.gif").pipe(fs.createWriteStream(dirMaterial + "yêubot.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `Cảm ơn cậu 🥰\nBot cũng yêu cậu lắm 😘`,
                attachment: fs.createReadStream(__dirname + `/noprefix/yêubot.gif`)
            }
    if (event.body.toLowerCase() == "yêu bot"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "iu bot"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
    }
