module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người rời khỏi nhóm",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "𝒕𝒖̛̣ 𝒄𝒖𝒐̂́𝒏 𝒈𝒐́𝒊 𝒗𝒂̀ 𝒃𝒂̂́𝒎 𝒏𝒖́𝒕 𝒕𝒉𝒐𝒂́𝒕 𝒓𝒂" : "𝒃𝒊̣ 𝑸𝒖𝒂̉𝒏 𝑻𝒓𝒊̣ 𝑽𝒊𝒆̂𝒏 𝒏𝒉𝒐́𝒎 𝒎𝒐̛̀𝒊 𝒓𝒂";
	const path = join(__dirname, "cache", "leaveGif");
	const gifPath = join(path, `leave.gif`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

	(typeof data.customLeave == "undefined") ? msg = "📢𝑮𝒊𝒂 Đ𝒊̀𝒏𝒉 𝒄𝒉𝒖́𝒏𝒈 𝒕𝒐̂𝒊 𝒗𝒐̂ 𝒄𝒖̀𝒏𝒈 𝒕𝒉𝒖̛𝒐̛𝒏𝒈 𝒕𝒊𝒆̂́𝒄 𝒃𝒂́𝒐 𝒕𝒊𝒏:\n𝑪𝒐𝒏 𝒗𝒐̛̣: {name} Đ𝒂̃ {type} 𝒌𝒉𝒐̉𝒊 𝒏𝒉𝒐́𝒎🥲\n🥺𝑿𝒊𝒏 𝑽𝒊̃𝒏𝒉 𝑩𝒊𝒆̣̂𝒕 𝑪𝒖̣🤧" : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);

	if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}
