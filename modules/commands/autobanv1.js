module.exports.config = {
    name: "autobanv1",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Hệ thống admin-bot",
    description: "Người chửi bot sẽ tự động bị ban khỏi hệ thống <3",
    commandCategory: "Hệ thống admin-bot",
    usages: "",
    cooldowns: 0,
    denpendencies: {}
};

module.exports.handleEvent = async({ event, api, Users }) => {
    var { threadID, messageID, body, senderID, reason } = event;
    const moment = require("moment-timezone");
    const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
    if (senderID == api.getCurrentUserID()) return;
    let name = await Users.getNameUser(event.senderID);
    //trả lời
    var msg = {
            body: `»Thông báo từ Admin«\n\n${name}, bạn thật sự ngu ngốc khi chửi bot vì vậy bot đã tự động ban bạn khỏi hệ thống\n\n💌Liên hệ Admin:\n💌Link fb: fb.me/Ledinh1905 để được gỡ ban bạn nhé \n\n🍑🍒Chúc bạn có 1 ngày đéo vui vẻ <3`
        }
        // Gọi bot
    const arr = ["botngu", "Botngu", "Bot ngu", "bot ngu", "bot gà", "Bot gà", "con bot lol", "Con bot lol", "Bot ngu lol", "bot ngu lol", "Bot chó", "bot chó", "dm bot", "Dm bot", "Đm bot", "đm bot", "dmm bot", "Dmm bot", "dmm bot", "Dmm bot", "Đmm bot", "đmm bot", "đb bot", , "Đb bot", "bot điên", "Bot điên", "bot dở", "Bot dở", "Bot khùng", "bot khùng", "đĩ bot", "Đĩ bot", "con bot lòn", "Con bot lòn", "cmm bot", "Cmm bot", "clap bot", "bot ncc", "Bot ncc", "bot oc", "Bot oc", "bot óc", "Bot óc", "bot óc chó", "Bot óc chó", "cc bot", "Cc bot", "bot tiki", "Bot tiki", "Lozzz bot", "lol bot", "Lol bot", "Loz bot", "loz bot", "lồn bot", "Lồn bot", "bot lồn", "Bot lồn", "bot lon", "Bot lon", "Bot cac", "bot cac", "bot nhu lon", "Bot nhu lon", "bot như cc", "bot cc", "Bot cc", "Con bot ngu", "con bot ngu", "Bot đb", "bot đb", "bot như đb", "Bot như đb", "bot óc", "Bot óc", "con bot ngu", "Con bot ngu", "con bot đần", "Con bot đần", "bot dốt", "Bot dốt", "Bot đần", "bot đần", "Con bot dốt", "con bot dốt", "Bot ngusi", "bot ngusi", "bot vcc", "Bot vcc", "bot ngudot", "Bot ngudot", "Bot như cc", "bot như bìu", "Bot như bìu", "Bot sida", "bot sida", "đcm bot", "Đcm bot", "bot đcm", "Bot đcm", "bot dcm", "Bot dcm", "Bot đcmm", "bot đcmm", "bot dcmm", "Bot dcmm", "cđm bot", "Cđm bot", "cđmm bot", "Cđmm bot", "cđcmm bot", "Cđcmm bot", "bot fake", "bot lazada", "bot shopee"];
    
    arr.forEach(i => {
        const uidUser = event.senderID;
        if (body == i) {
            modules = "chui bot:"
            console.log(name, modules, i);
            const data = Users.getData(uidUser).data || {};
            Users.setData(uidUser, { data });
            data.banned = 1;
            data.reason = i || null;
            data.dateAdded = time;
            global.data.userBanned.set(uidUser, { reason: data.reason, dateAdded: data.dateAdded });

            api.sendMessage(msg, threadID, () => {
                const listAdmin = global.config.ADMINBOT;
                var idad = listAdmin;
                for (var idad of listAdmin) {
                    api.sendMessage(`=== Bot Notification ===\n\n🆘Tội nhân: ${name}\n🔰Uid: ${uidUser}\n😥Chửi bot: ${i}\n\nĐã bị ban khỏi hệ thống`, idad);
                }
            })
        }
    });
};
module.exports.run = async({ event, api }) => {
    return api.sendMessage("( \\_/)                                                                            ( •_•)                                                                            // >🧠                                                            Đưa não cho bạn lắp vào đầu nè.\nCó biết là lệnh Noprefix hay không?", event.threadID)
}
