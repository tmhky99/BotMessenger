module.exports.config = {
  name: "boy",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NTKhang",
  description: "Random ảnh boy",
  commandCategory: "hình ảnh",
  usages: "boy",
  cooldowns: 5,
  dependencies: {"axios": "", "fs-extra": ""}
};

module.exports.run = async function({ api, event, args, Currencies }) {
  const money = (await Currencies.getData(event.senderID)).money;
  var trutien = 20;
  if(money < trutien) return api.sendMessage(`Bạn không đủ tiền để xem ảnh trai, số tiền bạn đang có là: ${money}, còn thiếu ${trutien-money}$ nữa thôi.`, event.threadID, event.messageID);
  var link =["https://i.imgur.com/oq4f87f.jpg",
"https://i.imgur.com/epThBlZ.jpg",
"https://i.imgur.com/wMBN6K7.jpg",
"https://i.imgur.com/2atpJzj.jpg",
"https://i.imgur.com/7JLuYbu.jpg",
"https://i.imgur.com/00YvDcR.jpg",
"https://i.imgur.com/rOa63Tq.jpg",
"https://i.imgur.com/kBL2l1P.jpg",
"https://i.imgur.com/DKYQ7kV.jpg",
"https://i.imgur.com/BBLEhmS.jpg",
"https://i.imgur.com/oYdndAt.jpg",
"https://i.imgur.com/V8XWjx2.jpg",
"https://i.imgur.com/eURx7sM.jpg",
"https://i.imgur.com/usTg8Zp.jpg",
"https://i.imgur.com/RJyW8Gn.jpg",
"https://i.imgur.com/eycBp5h.jpg",
"https://i.imgur.com/NjJbvT6.jpg",
"https://i.imgur.com/HS5aQTq.jpg",
"https://i.imgur.com/J6fStUC.jpg",
"https://i.imgur.com/EZfeHFM.jpg",
"https://i.imgur.com/U5eUBs9.jpg",
"https://i.imgur.com/lyLPIvT.jpg",
"https://i.imgur.com/977wThF.jpg",
"https://i.imgur.com/zOdlDvr.jpg",
"https://i.imgur.com/Irqu6CX.jpg",
"https://i.imgur.com/EEdAqZY.jpg",
"https://i.imgur.com/aXmbFnV.jpg",
"https://i.imgur.com/BLf7EAY.jpg",
"https://i.imgur.com/PYERMm2.jpg",
"https://i.imgur.com/DktkKNY.jpg",
"https://i.imgur.com/wPnudiZ.jpg",
"https://i.imgur.com/mAmTQ78.jpg",
"https://i.imgur.com/TNtKGrL.jpg",
"https://i.imgur.com/dkK3sB1.jpg",
"https://i.imgur.com/2hxfzz6.jpg",
"https://i.imgur.com/NUEheJr.jpg",
"https://i.imgur.com/LoyYI0k.jpg",
"https://i.imgur.com/7PFQp1P.jpg",
"https://i.imgur.com/OvuYqkr.jpg",
"https://i.imgur.com/Fo4P7nO.jpg",
"https://i.imgur.com/VIuhjbp.jpg",
"https://i.imgur.com/oveMzon.jpg",
"https://i.imgur.com/G7J5wD0.jpg",
"https://i.imgur.com/t4q8vJ0.jpg",
"https://i.imgur.com/gCnua3O.jpg",
"https://i.imgur.com/T3GhJfg.jpg",
"https://i.imgur.com/bQeTvch.jpg",
"https://i.imgur.com/rmILT2x.jpg",
"https://i.imgur.com/sUEjhO0.jpg",
"https://i.imgur.com/Toyb6aR.jpg",
"https://i.imgur.com/p9N93oR.jpg",
"https://i.imgur.com/0VF3Rqj.jpg",
"https://i.imgur.com/ycjEuIF.jpg",
"https://i.imgur.com/KxcOPHy.jpg",
"https://i.imgur.com/KpE2es2.jpg",
"https://i.imgur.com/QdB4Nni.jpg",
"https://i.imgur.com/TVTziiP.jpg",
"https://i.imgur.com/a9mcRfZ.jpg",
"https://i.imgur.com/LWR2bDd.jpg",
"https://i.imgur.com/hFtWZYZ.jpg",
"https://i.imgur.com/gM45t43.jpg",
"https://i.imgur.com/ekSjTwU.jpg",
"https://i.imgur.com/Z8kwShy.jpg",
"https://i.imgur.com/BPNa18o.jpg",
"https://i.imgur.com/uGRPBwz.jpg",
"https://i.imgur.com/ZzOU9Ms.jpg",
"https://i.imgur.com/HWnAgZZ.jpg",
"https://i.imgur.com/dbF5Oip.jpg",
"https://i.imgur.com/MIfi3MD.jpg",
"https://i.imgur.com/uXX8dbd.jpg",
"https://i.imgur.com/aQkI19u.jpg",
"https://i.imgur.com/Op8acRb.jpg",
"https://i.imgur.com/zcv9LxC.jpg",
"https://i.imgur.com/94eKE2j.jpg",
"https://i.imgur.com/pr7zPjP.jpg",
"https://i.imgur.com/VERHJ4v.jpg",
"https://i.imgur.com/aYLfyTh.jpg",
"https://i.imgur.com/UF5GhpP.jpg",
"https://i.imgur.com/jpXOVGi.jpg",
"https://i.imgur.com/bxl0osW.jpg",
"https://i.imgur.com/bjYYC8v.jpg",
"https://i.imgur.com/PGFGVxi.jpg",
"https://i.imgur.com/0JtVVTF.jpg",
"https://i.imgur.com/oGh17sb.jpg",
"https://i.imgur.com/8l4VZa8.jpg",
"https://i.imgur.com/mQDizCa.jpg",
"https://i.imgur.com/Fi2d9S3.jpg",
"https://i.imgur.com/nK4PCSD.jpg",
"https://i.imgur.com/POB92dR.jpg",
"https://i.imgur.com/yiEXFb0.jpg",
"https://i.imgur.com/pVBzeht.jpg",
"https://i.imgur.com/fbhmUDO.jpg",
"https://i.imgur.com/0kCGT5p.jpg",
"https://i.imgur.com/Q2IOc17.jpg",
"https://i.imgur.com/ObXNJZ5.jpg",
"https://i.imgur.com/rI2MIYF.jpg",
"https://i.imgur.com/ANhek4x.jpg",
"https://i.imgur.com/AgNYAr6.jpg",
"https://i.imgur.com/MmovRWq.jpg",
"https://i.imgur.com/eEH8W2P.jpg",
"https://i.imgur.com/tZlXawA.jpg",
"https://i.imgur.com/epThBlZ.jpg",
"https://i.imgur.com/wMBN6K7.jpg",

];

  var random = Math.floor(Math.random() * link.length);
  var imglink = link[random];
  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  var path = __dirname+"/cache/boy.png";
  let getfile = (await axios.get(imglink, { responseType: "arraybuffer" })).data;
  fs.writeFileSync(path, Buffer.from(getfile, "utf-8"));
  
  return api.sendMessage({body: `- Đã trừ ${trutien}$.\nĐây là ảnh của bạn`,attachment: fs.createReadStream(path)}, event.threadID, async (err, info) => {
    if(err) return api.sendMessage(err, event.threadID, event.messageID);
    await Currencies.decreaseMoney(event.senderID, parseInt(trutien));
    fs.unlinkSync(path);
  },event.messageID);
}
