module.exports.config = {
    name: "UwU",
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
    if (!fs.existsSync(dirMaterial + "UwU.gif")) request("https://i.pinimg.com/originals/be/2d/22/be2d2241c92d7a226740b7b5e572a64a.gif").pipe(fs.createWriteStream(dirMaterial + "UwU.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `UwU\n👉👈`,
                attachment: fs.createReadStream(__dirname + `/noprefix/UwU.gif`)
            }
    if (event.body.toLowerCase() == "uwu"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "👉🏿👈🏿"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "👉🏾👈🏾"){
       return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "👉🏽👈🏽"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "👉🏼👈🏼"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "👉🏻👈🏻"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "👉👈"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
    }
