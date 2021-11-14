module.exports.config = {
    name: "resetexp",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Thùy Fixby Lê Định",
    description: "Xoà hết bộ đếm tương tác đưa về 0",
    commandCategory: "admin",
    usages: "all",
    cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies }) => {
    const data = await api.getThreadInfo(event.threadID);
    for (const user of data.userInfo) {
        var currenciesData = await Currencies.getData(user.id)
        if (currenciesData != false) {
            var exp = currenciesData.exp;
            if (typeof exp != "undefined") {
                exp -= exp;
                await Currencies.setData(user.id, { exp });
            }
        }
    }
    return api.sendMessage("done", event.threadID);
}