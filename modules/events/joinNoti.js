module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.3",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event, Users }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Kết nối thành công :<" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`𝑵𝒉𝒐́𝒎 𝒄𝒖̉𝒂 𝒃𝒂̣𝒏 đ𝒂̃ đ𝒖̛𝒐̛̣𝒄 𝒑𝒉𝒆́𝒑 𝒔𝒖̛̉ 𝒅𝒖̣𝒏𝒈 𝒃𝒐𝒕 ❤️\n😇𝑺𝒖̛̉ 𝒅𝒖̣𝒏𝒈 𝒍𝒆̣̂𝒏𝒉: /help đ𝒆̂̉ 𝒙𝒆𝒎 𝒏𝒉𝒖̛̃𝒏𝒈 𝒍𝒆̣̂𝒏𝒉 đ𝒂̃ đ𝒖̛𝒐̛̣𝒄 𝒕𝒉𝒊𝒆̂́𝒕 𝒍𝒂̣̂𝒑 𝒔𝒂̆̃𝒏 𝒕𝒓𝒆̂𝒏 𝑩𝒐𝒕\n🌺Đ𝒂̂𝒚 𝒍𝒂̀ 𝑳𝒆̂ Đ𝒊̣𝒏𝒉-𝑩𝒐𝒕𝑴𝒆𝒔𝒔𝒆𝒏𝒈𝒆𝒓`, threadID);
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache"js);
			const pathGif = join(path, `join.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);

				if (!global.data.allUserID.includes(id)) {
					await Users.createData(id, { name: userName, data: {} });
					global.data.allUserID.push(id);
					logger(global.getText("handleCreateDatabase", "newUser", id), "[ DATABASE ]");
				}
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "𝑿𝒊𝒏 𝑪𝒉𝒂̀𝒐 𝑻𝒉𝒂̀𝒏𝒉 𝑽𝒊𝒆̂𝒏 𝑴𝒐̛́𝒊 : {name} 🥰\n𝑪𝒉𝒂̀𝒐 𝒎𝒖̛̀𝒏𝒈 {type} đ𝒂̃ đ𝒆̂́𝒏 𝒗𝒐̛́𝒊 𝒏𝒉𝒐́𝒎: {threadName}\n🍓{type} đ𝒂̃ 𝒕𝒓𝒐̛̉ 𝒕𝒉𝒂̀𝒏𝒉 𝒕𝒉𝒂̀𝒏𝒉 𝒗𝒊𝒆̂𝒏 𝒕𝒉𝒖̛́ {soThanhVien}\n𝑵𝒉𝒐̛́ 𝒕𝒖̛𝒐̛𝒏𝒈 𝒕𝒂́𝒄 𝒏𝒉𝒊𝒆̂̀𝒖 𝒗𝒂̀𝒐 𝒏𝒉𝒆́ 🌺" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  '𝒄𝒂́𝒄 𝒃𝒂̣𝒏' : '𝒃𝒂̣𝒏')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}
