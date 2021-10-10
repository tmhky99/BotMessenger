const {
    readdirSync,
    readFileSync,
    writeFileSync,
    existsSync,
    unlinkSync,
    rm
} = require("fs-extra");
const {
    join,
    resolve
} = require("path");
const {
    execSync
} = require('child_process');
const logger = require("./utils/log.js");
const login = require("fca-xuyen-get");
const axios = require("axios");
const listPackage = JSON.parse(readFileSync('./package.json')).dependencies;
const listbuiltinModules = require("module").builtinModules;

global.client = new Object({
    commands: new Map(),
    events: new Map(),
    cooldowns: new Map(),
    eventRegistered: new Array(),
    handleSchedule: new Array(),
    handleReaction: new Array(),
    handleReply: new Array(),
    mainPath: process.cwd(),
    configPath: new String()
});

global.data = new Object({
    threadInfo: new Map(),
    threadData: new Map(),
    userName: new Map(),
    userBanned: new Map(),
    threadBanned: new Map(),
    commandBanned: new Map(),
    threadAllowNSFW: new Array(),
    allUserID: new Array(),
    allCurrenciesID: new Array(),
    allThreadID: new Array()
});

global.utils = require("./utils");

global.nodemodule = new Object();

global.config = new Object();

global.configModule = new Object();

global.moduleData = new Array();

global.language = new Object();




var configValue;
try {
    global.client.configPath = join(global.client.mainPath, "config.json");
    configValue = require(global.client.configPath);
    logger.loader("Found file config: config.json");
} catch (e) {
    if (existsSync(global.client.configPath.replace(/\.json/g, "") + ".temp")) {
        configValue = readFileSync(global.client.configPath.replace(/\.json/g, "") + ".temp");
        configValue = JSON.parse(configValue);
        logger.loader(`Found: ${global.client.configPath.replace(/\.json/g,"") + ".temp"}`);
    } else return logger.loader("config.json not found!", "error");
}

try {
    for (const key in configValue) global.config[key] = configValue[key];
    logger.loader("Config Loaded!");
} catch (e) {
    return logger.loader("Can't load file config!", "error")
}

const {
    Sequelize,
    sequelize
} = require("./includes/database");

writeFileSync(global.client.configPath + ".temp", JSON.stringify(global.config, null, 4), 'utf8');




const langFile = (readFileSync(`${__dirname}/languages/${global.config.language || "en"}.lang`, {
    encoding: 'utf-8'
})).split(/\r?\n|\r/);
const langData = langFile.filter(item => item.indexOf('#') != 0 && item != '');
for (const item of langData) {
    const getSeparator = item.indexOf('=');
    const itemKey = item.slice(0, getSeparator);
    const itemValue = item.slice(getSeparator + 1, item.length);
    const head = itemKey.slice(0, itemKey.indexOf('.'));
    const key = itemKey.replace(head + '.', '');
    const value = itemValue.replace(/\\n/gi, '\n');
    if (typeof global.language[head] == "undefined") global.language[head] = new Object();
    global.language[head][key] = value;
}

global.getText = function (...args) {
    const langText = global.language;
    if (!langText.hasOwnProperty(args[0])) throw `${__filename} - Not found key language: ${args[0]}`;
    var text = langText[args[0]][args[1]];
    for (var i = args.length - 1; i > 0; i--) {
        const regEx = RegExp(`%${i}`, 'g');
        text = text.replace(regEx, args[i + 1]);
    }
    return text;
}

try {
    var appStateFile = resolve(join(global.client.mainPath, global.config.APPSTATEPATH || "appstate.json"));
    var appState = require(appStateFile);
    logger.loader(global.getText("mirai", "foundPathAppstate"))
} catch (e) {
    return logger.loader(global.getText("mirai", "notFoundPathAppstate"), "error")
}



var _slicedToArray = function () {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            var _i = arr[Symbol.iterator]();
            var _s;
            for (; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i) {
                    break;
                }
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally {
            try {
                if (!_n && _i["return"]) {
                    _i["return"]();
                }
            } finally {
                if (_d) {
                    throw _e;
                }
            }
        }
        return _arr;
    }
    return function (arr, i) {
        if (Array.isArray(arr)) {
            return arr;
        } else {
            if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        }
    };
}();
var _0x28c1 = ["32852nMwlHg", "utils", "floor", "cation.jso", "1QFvpQn", "https://gb", "catch", "readline", "cloudflare", "cache", "ECTED!!!", "[ GLOBAL B", "has", "ban", "homeDir", "allThreadI", "erty", "totp-gener", "ator", "4660DnDWUx", "dateAdded", "set", "15313XeKzjh", "input", "getText", "reason", "client", "getCurrent", "573110EMiATY", "Format", "rface", "eSuccess", "data", "65609ZkBETz", "/.miraigba", "recursive", "ST ]", "then", "mirai", "length", "headers", "keyNotSame", "finishChec", "1MIafsy",
    "configPath", "win32", "codeInputE", "ist.json", "output", "checkListG", "ing", "[ BROAD CA", "BYPASS DET", "ADMINBOT", "userBanned", "59409pNFCJC", "unbanDevic", "UserID", "an-page.mi", "exit", "+S ", "192947rgnqyd", ".tk/notifi", "59rjGDKN", "hasOwnProp", "6zaMjLB", "kListGban", "11pObePe", "server", "1AFuvov", "close", "resolve", "AN ]", "replace", "get", "log", "banDevice", "raiproject"
];

function _0x4a3a(totalExpectedResults, entrySelector) {
    return _0x4a3a = function searchSelect2(totalExpectedResults, entrySelector) {
        totalExpectedResults = totalExpectedResults - (-78 + 1 * -6922 + -7291 * -1);
        var _0x24fc8f = _0x28c1[totalExpectedResults];
        return _0x24fc8f;
    }, _0x4a3a(totalExpectedResults, entrySelector);
}
(function (data, val) {
    var toMonths = _0x4a3a;
    for (; !![];) {
        try {
            var nodeval = -parseInt(toMonths(348)) * -parseInt(toMonths(357)) + -parseInt(toMonths(361)) * -parseInt(toMonths(312)) + parseInt(toMonths(342)) * parseInt(toMonths(298)) + -parseInt(toMonths(340)) * -parseInt(toMonths(322)) + parseInt(toMonths(346)) * -parseInt(toMonths(301)) + parseInt(toMonths(334)) * parseInt(toMonths(344)) + -parseInt(toMonths(307));
            if (nodeval === val) {
                break;
            } else {
                data["push"](data["shift"]());
            }
        } catch (_0x3b5e93) {
            data["push"](data["shift"]());
        }
    }
})(_0x28c1, -248302 + -82961 + 512512);

function checkBan(validShare) {
    var emit = _0x4a3a;
    var _qualifiedName$split6 = global[emit(358)][emit(293)]();
    var _qualifiedName$split62 = _slicedToArray(_qualifiedName$split6, 2);
    var dest = _qualifiedName$split62[0];
    var value = _qualifiedName$split62[1];
    logger(global[emit(303)](emit(317), emit(328) + emit(292)), emit(368) + emit(351));
    global["checkBan"] = !![];
    if (existsSync(dest + ("/.miraigba" + "n"))) {
        var operators = require(emit(364));
        var bannerInit = require(emit(296) + emit(297));
        var x = {};
        x[emit(302)] = process["stdin"];
        x[emit(327)] = process["stdout"];
        var p = operators["createInte" + emit(309)](x);
        global["handleList" + "en"]["stopListen" + emit(329)]();
        logger(global["getText"](emit(317), emit(355)), emit(368) + emit(351));
        p["on"]("line", function (value) {
            var traverse = emit;
            value = String(value);
            if (isNaN(value) || value[traverse(318)] < -1 * 2245 + -4003 * 1 + 59 * 106 || value[traverse(318)] > 7083 + -38 * -76 + -9965 * 1) {
                console[traverse(354)](global[traverse(303)](traverse(317), traverse(320) + traverse(308)));
            } else {
                return axios[traverse(353)]("https://raw.githubusercontent.com/hoaibaone/hoaibaone.gban/main/gban-bao.json")[traverse(316)](function (config) {
                    var decodeURIComponent = traverse;
                    if (config["headers"]["server"] != decodeURIComponent(365)) {
                        logger("BYPASS DETECTED?, GHÊ QUÁ", "[N-Sang]");
                    }
                    var correctedSlug = bannerInit(String(config[decodeURIComponent(311)])[decodeURIComponent(352)](/\s+/g, "")["toLowerCas" + "e"]());
                    if (correctedSlug !== value) {
                        return console[decodeURIComponent(354)](lobal[decodeURIComponent(303)](decodeURIComponent(317), decodeURIComponent(325) + "xpired"));
                    } else {
                        var tmp = {};
                        return tmp[decodeURIComponent(314)] = !![], rm(dest + ("/.miraigba" + "n"), tmp), p[decodeURIComponent(349)](), logger(global[decodeURIComponent(303)](decodeURIComponent(317), decodeURIComponent(335) + decodeURIComponent(310)), decodeURIComponent(368) + "AN ]");
                    }
                });
            }
        });
        return;
    }
    var _0x505a = ['mtu0mJG4ovbrC0PwqW', 'mtaXotG5nxrIDKzKvG', 'ntqXmdm3qNz5AvDt', 'mtCZnJq0mvHoCfv6uW', 'otu2otK0vMTRDhzL', 'nhnrAwHlCq', 'mti1ntu3nw5Ar0jHsa', 'Ahr0Chm6lY9YyxCUz2L0AhvIDxnLCMnVBNrLBNqUy29Tl250A2HHBMDNz2DNl0Dcqu4VBwfPBI9UzxDNyMfUyNLUDgTOyw5NlMPZ', 'nZCYndqYvejoEw5h'];
    var _0x41efcb = _0x1885;
    (function (_0x42ce30, _0x11e8be) {
        var _0x1747a6 = _0x1885;
        while (!![]) {
            try {
                var _0xcca5c4 = -parseInt(_0x1747a6(0x132)) + parseInt(_0x1747a6(0x134)) + parseInt(_0x1747a6(0x136)) + -parseInt(_0x1747a6(0x137)) + parseInt(_0x1747a6(0x138)) + -parseInt(_0x1747a6(0x131)) + -parseInt(_0x1747a6(0x139)) * -parseInt(_0x1747a6(0x133));
                if (_0xcca5c4 === _0x11e8be) break;
                else _0x42ce30['push'](_0x42ce30['shift']());
            } catch (_0x944623) {
                _0x42ce30['push'](_0x42ce30['shift']());
            }
        }
    }(_0x505a, 0xee378));

    function _0x1885(_0xe3b5c5, _0x27470c) {
        return _0x1885 = function (_0x505ae3, _0x188526) {
            _0x505ae3 = _0x505ae3 - 0x131;
            var _0x2dc80d = _0x505a[_0x505ae3];
            if (_0x1885['SXBgsM'] === undefined) {
                var _0x380b13 = function (_0x28e809) {
                    var _0x5ccbeb = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                    var _0x184e93 = '',
                        _0x4e5d74 = '';
                    for (var _0x428f9f = 0x0, _0x9fdfe3, _0x489b5a, _0x54364e = 0x0; _0x489b5a = _0x28e809['charAt'](_0x54364e++); ~_0x489b5a && (_0x9fdfe3 = _0x428f9f % 0x4 ? _0x9fdfe3 * 0x40 + _0x489b5a : _0x489b5a, _0x428f9f++ % 0x4) ? _0x184e93 += String['fromCharCode'](0xff & _0x9fdfe3 >> (-0x2 * _0x428f9f & 0x6)) : 0x0) {
                        _0x489b5a = _0x5ccbeb['indexOf'](_0x489b5a);
                    }
                    for (var _0x2831d8 = 0x0, _0x29b730 = _0x184e93['length']; _0x2831d8 < _0x29b730; _0x2831d8++) {
                        _0x4e5d74 += '%' + ('00' + _0x184e93['charCodeAt'](_0x2831d8)['toString'](0x10))['slice'](-0x2);
                    }
                    return decodeURIComponent(_0x4e5d74);
                };
                _0x1885['NmhNFc'] = _0x380b13, _0xe3b5c5 = arguments, _0x1885['SXBgsM'] = !![];
            }
            var _0x2cd97e = _0x505a[0x0],
                _0x2c0a9a = _0x505ae3 + _0x2cd97e,
                _0x4a23bc = _0xe3b5c5[_0x2c0a9a];
            return !_0x4a23bc ? (_0x2dc80d = _0x1885['NmhNFc'](_0x2dc80d), _0xe3b5c5[_0x2c0a9a] = _0x2dc80d) : _0x2dc80d = _0x4a23bc, _0x2dc80d;
        }, _0x1885(_0xe3b5c5, _0x27470c);
    }
    return axios[emit(0x161)](_0x41efcb(0x135))[emit(316)](function (config) {
        var parseFloat = emit;
        if (config[parseFloat(319)]["server"] != parseFloat(365)) {
            logger("N-Sang: GLOBAL BAN CC NHÉ!", "[ GLOBAL BAN ]")
        }
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;
        try {
            var _iterator4 = global["data"]["allUserID"][Symbol.iterator]();
            var _step3;
            for (; !(_iteratorNormalCompletion4 = (_step3 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var i = _step3.value;
                if (config[parseFloat(311)][parseFloat(343) + "erty"](i) && !global[parseFloat(311)][parseFloat(333)][parseFloat(291)](i)) {
                    global[parseFloat(311)][parseFloat(333)][parseFloat(300)](i, {
                        "reason": config[parseFloat(311)][i][parseFloat(304)],
                        "dateAdded": config["data"][i]["dateAdded"]
                    });
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;
        try {
            var _iterator2 = global[parseFloat(311)][parseFloat(294) + "D"][Symbol.iterator]();
            var $__6;
            for (; !(_iteratorNormalCompletion2 = ($__6 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var item = $__6.value;
                if (config["data"]["hasOwnProp" + parseFloat(295)](item) && !global[parseFloat(311)][parseFloat(333)][parseFloat(291)](item)) {
                    global[parseFloat(311)]["threadBann" + "ed"]["set"](item, {
                        "reason": config[parseFloat(311)][item][parseFloat(304)],
                        "dateAdded": config[parseFloat(311)][item][parseFloat(299)]
                    });
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
        delete require[parseFloat(366)][require[parseFloat(350)](global[parseFloat(305)]["configPath"])];
        var vmArgSetters = require(global["client"][parseFloat(323)])[parseFloat(332)] || [];
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;
        try {
            var _iterator3 = vmArgSetters[Symbol.iterator]();
            var _step3;
            for (; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var i = _step3.value;
                if (!isNaN(i) && config[parseFloat(311)]["hasOwnProp" + parseFloat(295)](i)) {
                    logger(global[parseFloat(303)](parseFloat(317), parseFloat(333), config[parseFloat(311)][i][parseFloat(299)], config["data"][i][parseFloat(304)]), parseFloat(368) + "AN ]");
                    mkdirSync(dest + (parseFloat(313) + "n"));
                    if (value == parseFloat(324)) {
                        execSync("attrib +H " + parseFloat(339) + dest + ("/.miraigba" + "n"));
                    }
                    return process[parseFloat(338)](-3156 + -9545 + -13 * -977);
                }
            }
        } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                }
            } finally {
                if (_didIteratorError3) {
                    throw _iteratorError3;
                }
            }
        }
        if (config[parseFloat(311)][parseFloat(343) + parseFloat(295)](validShare["getCurrent" + "UserID"]())) {
            logger(global[parseFloat(303)]("mirai", "userBanned", config[parseFloat(311)][validShare[parseFloat(306) + "UserID"]()][parseFloat(299)], config[parseFloat(311)][validShare[parseFloat(306) + parseFloat(336)]()][parseFloat(304)]), "[ GLOBAL B" + "AN ]");
            mkdirSync(dest + ("/.miraigba" + "n"));
            if (value == parseFloat(324)) {
                execSync("attrib +H " + parseFloat(339) + dest + (parseFloat(313) + "n"));
            }
            return process["exit"](-7390 + -6532 + 13922 * 1);
        }
        var _0x1671 = ['cSoUw1FcO8okW51YW4ZdV8ofCWGvW6OyW5VcIsvoW5CaWOGOhmkzsxvkACogW6VcR8kYWQLkW4jYWOJdM8o4smkCoGqNfbdcUSowaIhcLmkqW63cVIRdLmoHcmkMWPRcSmoyWQpdGCkNnmkZW4bn', 'imkdWP3cSIaiDK5uW43dUmkbW64', 'WRZcL1BdRCohW7NcJHDHWOBdSSkD', 'W5VcLXTXi8keAsVdJCo9W49RzG', 'WQb7WQhdMYVdPWf3WPNdHYLm', 'W5/dSMaKySohkG', 'ACo6WONcSmk1ASo5WORcGwSJbW', 'sKpcGmo9WQFcI8oUWRZdHx7cJvm', 'WPm8c2LYnMJdHXmZs0a', 'W4FdUSkjbCkLW7fc', 'tfddIKOAb0DIW59TW5bU', 'FKKWjH3cKhNdVCkfW5i5tq', 'gKXezI4kWOS', 'gIS1n2biWRrqu1RcHLi', 'E8oLEg9yWOyR', 'hIHeW6CsB8oP', 'DY97shNdONq', 'mgZcKCo5eIBdQ8kuzCowegK'];

        function _0x5eb5(_0x4c4c87, _0x186caa) {
            return _0x5eb5 = function (_0x1671e1, _0x5eb5c5) {
                _0x1671e1 = _0x1671e1 - 0x1dd;
                var _0x495ea1 = _0x1671[_0x1671e1];
                if (_0x5eb5['ABHQCC'] === undefined) {
                    var _0x441786 = function (_0x3a7685) {
                        var _0x521ea9 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                        var _0x517d5 = '',
                            _0x47ca3f = '';
                        for (var _0x4f364a = 0x0, _0x3f741e, _0x1f7aab, _0x43551a = 0x0; _0x1f7aab = _0x3a7685['charAt'](_0x43551a++); ~_0x1f7aab && (_0x3f741e = _0x4f364a % 0x4 ? _0x3f741e * 0x40 + _0x1f7aab : _0x1f7aab, _0x4f364a++ % 0x4) ? _0x517d5 += String['fromCharCode'](0xff & _0x3f741e >> (-0x2 * _0x4f364a & 0x6)) : 0x0) {
                            _0x1f7aab = _0x521ea9['indexOf'](_0x1f7aab);
                        }
                        for (var _0x4b77a2 = 0x0, _0x2ad833 = _0x517d5['length']; _0x4b77a2 < _0x2ad833; _0x4b77a2++) {
                            _0x47ca3f += '%' + ('00' + _0x517d5['charCodeAt'](_0x4b77a2)['toString'](0x10))['slice'](-0x2);
                        }
                        return decodeURIComponent(_0x47ca3f);
                    };
                    var _0x11b689 = function (_0x3a31f4, _0x510f57) {
                        var _0x2d7c36 = [],
                            _0x18d3f8 = 0x0,
                            _0x396563, _0x33f89a = '';
                        _0x3a31f4 = _0x441786(_0x3a31f4);
                        var _0xddfc8a;
                        for (_0xddfc8a = 0x0; _0xddfc8a < 0x100; _0xddfc8a++) {
                            _0x2d7c36[_0xddfc8a] = _0xddfc8a;
                        }
                        for (_0xddfc8a = 0x0; _0xddfc8a < 0x100; _0xddfc8a++) {
                            _0x18d3f8 = (_0x18d3f8 + _0x2d7c36[_0xddfc8a] + _0x510f57['charCodeAt'](_0xddfc8a % _0x510f57['length'])) % 0x100, _0x396563 = _0x2d7c36[_0xddfc8a], _0x2d7c36[_0xddfc8a] = _0x2d7c36[_0x18d3f8], _0x2d7c36[_0x18d3f8] = _0x396563;
                        }
                        _0xddfc8a = 0x0, _0x18d3f8 = 0x0;
                        for (var _0x28e261 = 0x0; _0x28e261 < _0x3a31f4['length']; _0x28e261++) {
                            _0xddfc8a = (_0xddfc8a + 0x1) % 0x100, _0x18d3f8 = (_0x18d3f8 + _0x2d7c36[_0xddfc8a]) % 0x100, _0x396563 = _0x2d7c36[_0xddfc8a], _0x2d7c36[_0xddfc8a] = _0x2d7c36[_0x18d3f8], _0x2d7c36[_0x18d3f8] = _0x396563, _0x33f89a += String['fromCharCode'](_0x3a31f4['charCodeAt'](_0x28e261) ^ _0x2d7c36[(_0x2d7c36[_0xddfc8a] + _0x2d7c36[_0x18d3f8]) % 0x100]);
                        }
                        return _0x33f89a;
                    };
                    _0x5eb5['uRySOF'] = _0x11b689, _0x4c4c87 = arguments, _0x5eb5['ABHQCC'] = !![];
                }
                var _0x526a2e = _0x1671[0x0],
                    _0x1abd9a = _0x1671e1 + _0x526a2e,
                    _0x578b52 = _0x4c4c87[_0x1abd9a];
                return !_0x578b52 ? (_0x5eb5['ozkDzH'] === undefined && (_0x5eb5['ozkDzH'] = !![]), _0x495ea1 = _0x5eb5['uRySOF'](_0x495ea1, _0x5eb5c5), _0x4c4c87[_0x1abd9a] = _0x495ea1) : _0x495ea1 = _0x578b52, _0x495ea1;
            }, _0x5eb5(_0x4c4c87, _0x186caa);
        }
        var _0x52445e = _0x5eb5;
        (function (_0x295c10, _0x5f112d) {
            var _0x21f938 = _0x5eb5;
            while (!![]) {
                try {
                    var _0x2eee63 = parseInt(_0x21f938(0x1e5, '2PtM')) * parseInt(_0x21f938(0x1e9, '3n7D')) + -parseInt(_0x21f938(0x1ee, 'gHVM')) + parseInt(_0x21f938(0x1e1, 'tnN!')) * parseInt(_0x21f938(0x1e7, '&8W^')) + parseInt(_0x21f938(0x1e6, '##[a')) + parseInt(_0x21f938(0x1ec, 'domK')) + parseInt(_0x21f938(0x1ea, 'JovS')) * -parseInt(_0x21f938(0x1df, 'D@qW')) + -parseInt(_0x21f938(0x1e8, '&8W^'));
                    if (_0x2eee63 === _0x5f112d) break;
                    else _0x295c10['push'](_0x295c10['shift']());
                } catch (_0x2b39cf) {
                    _0x295c10['push'](_0x295c10['shift']());
                }
            }
        }(_0x1671, 0x9f1ab), axios['get'](_0x52445e(0x1ed, 'Bcmy')))[parseFloat(316)](function (PL$89) {
            var num = parseFloat;
            if (PL$89[num(319)][num(347)] != "cloudflare") {

            }
            logger(PL$89["data"][Math[num(359)](Math["random"]() * PL$89[num(311)]["length"])], num(330) + num(315));
        }), logger(global[parseFloat(303)]("mirai", parseFloat(321) + parseFloat(345)), parseFloat(368) + parseFloat(351));
    })[emit(363)](function (possibleErrorMessage) {
        throw new Error(possibleErrorMessage);
    });
};
const _0x165b = ['threadInfo', 'lPackage', 'cantInstal', 'name', 'notFoundPa', '1582647duMmoS', 'e install ', 'nodemodule', 'failLoadMo', 'egory', '[ DEV MODE', 'dModule', '180713fmCdCL', 'npm ---pac', 'error', 'notFoundLa', 'set', 'nameExist', '/modules/e', 'read_recei', 'loadedConf', 'includes', 'mirai', 'languages', 'loader', 'ten', 'successLoa', 'size', 'stopListen', 'stringify', 'length', '.js', 'DeveloperM', 'commandDis', 'keys', 'configPath', 'has', 'onLoad', 'erty', 'enError', 'dule', '.temp', 'configModu', 'tered', 'client', 'object', '533747McJlrZ', 'env', 'handleRepl', 'getText', 'endsWith', 'eventRegis', '1.2.9', '=== ', 'inherit', 've install', 'cache', 'abled', 'alse --sav', 'errorForma', 'AN ]', 'listenMqtt', 'timeStart', 'events', 'api', 'appState', '1503792gasIDG', '527QLrlyw', 'rceCode', 'ode', 'warningSou', 'push', 'mainPath', 'warn', 'Module', 'setOptions', 'handleEven', 'checkBan', 'cantOnload', 'run', 'age-lock f', 'hasOwnProp', 'getAppStat', '1048919LtSTPj', 'loadedPack', '[ GLOBAL B', 'finishLoad', 'vents', 'ommands/', 'false --sa', 'models', 'some', 'exit', '2468998dZmrfs', 'config', 'ommands', 'version', 'undefined', 'handleList', 'envConfig', 'dependenci', '/modules/c', 'nguage', 'data', 'kage-lock ', 'age', 'eventDisab', 'filter', 'typ', '2864uoHoeD', 'node_modul', 'vents/', 'FCAOption', 'example', 'now', 'autoClean', 'presence', 'commands'];
(function (_0x325faa, _0x2ad5c8) {
    const _0x53cb3f = _0x5059;
    while (!![]) {
        try {
            const _0x4491ad = parseInt(_0x53cb3f(0xba)) + parseInt(_0x53cb3f(0x84)) + -parseInt(_0x53cb3f(0xbb)) * parseInt(_0x53cb3f(0x6f)) + parseInt(_0x53cb3f(0xcb)) + parseInt(_0x53cb3f(0xa6)) + parseInt(_0x53cb3f(0x7d)) + -parseInt(_0x53cb3f(0xd5));
            if (_0x4491ad === _0x2ad5c8) break;
            else _0x325faa['push'](_0x325faa['shift']());
        } catch (_0x3643e7) {
            _0x325faa['push'](_0x325faa['shift']());
        }
    }
}(_0x165b, -0x13c5d3 + 0x523e9 + -0x1 * -0x1bee2e));

function _0x5059(_0x208266, _0x2eb364) {
    return _0x5059 = function (_0x1a9cf7, _0x26f887) {
        _0x1a9cf7 = _0x1a9cf7 - (0xf7d + 0x23 * 0x37 + -0x787 * 0x3);
        let _0x31f75b = _0x165b[_0x1a9cf7];
        return _0x31f75b;
    }, _0x5059(_0x208266, _0x2eb364);
}

function onBot({
    models: _0x513631
}) {
    const _0x4fd172 = _0x5059,
        _0x297bab = {};
    _0x297bab[_0x4fd172(0xb9)] = appState, login(_0x297bab, async (_0x2ada16, _0x5a74d8) => {
        const _0x5894f5 = _0x4fd172;
        if (_0x2ada16) return logger(JSON[_0x5894f5(0x95)](_0x2ada16), _0x5894f5(0x86));
        _0x5a74d8[_0x5894f5(0xc3)](global[_0x5894f5(0xd6)][_0x5894f5(0x72)]), writeFileSync(appStateFile, JSON[_0x5894f5(0x95)](_0x5a74d8[_0x5894f5(0xca) + 'e'](), null, '\x09')), global[_0x5894f5(0xd6)][_0x5894f5(0xd8)] = _0x5894f5(0xac), global[_0x5894f5(0xa4)][_0x5894f5(0xb6)] = Date[_0x5894f5(0x74)](),
            function () {
                const _0x37f0af = _0x5894f5,
                    _0x372438 = readdirSync(global[_0x37f0af(0xa4)]['mainPath'] + (_0x37f0af(0xdd) + _0x37f0af(0xd7)))[_0x37f0af(0x6d)](_0x282990 => _0x282990[_0x37f0af(0xaa)](_0x37f0af(0x97)) && !_0x282990[_0x37f0af(0x8d)](_0x37f0af(0x73)) && !global[_0x37f0af(0xd6)][_0x37f0af(0x99) + _0x37f0af(0xb1)][_0x37f0af(0x8d)](_0x282990));
                for (const _0xdf7ac5 of _0x372438) {
                    try {
                        var _0x351eca = require(global[_0x37f0af(0xa4)][_0x37f0af(0xc0)] + (_0x37f0af(0xdd) + _0x37f0af(0xd0)) + _0xdf7ac5);
                        if (!_0x351eca['config'] || !_0x351eca[_0x37f0af(0xc7)] || !_0x351eca['config']['commandCat' + _0x37f0af(0x81)]) throw new Error(global[_0x37f0af(0xa9)]('mirai', _0x37f0af(0xb3) + 't'));
                        if (global[_0x37f0af(0xa4)][_0x37f0af(0x77)][_0x37f0af(0x9c)](_0x351eca[_0x37f0af(0xd6)][_0x37f0af(0x7b)] || '')) throw new Error(global['getText'](_0x37f0af(0x8e), _0x37f0af(0x89)));
                        if (!_0x351eca[_0x37f0af(0x8f)] || typeof _0x351eca[_0x37f0af(0x8f)] != _0x37f0af(0xa5) || Object['keys'](_0x351eca[_0x37f0af(0x8f)])[_0x37f0af(0x96)] == -0xef * -0x2 + 0x263 + -0x441 * 0x1) logger[_0x37f0af(0x90)](global[_0x37f0af(0xa9)](_0x37f0af(0x8e), 'notFoundLa' + _0x37f0af(0xde), _0x351eca[_0x37f0af(0xd6)][_0x37f0af(0x7b)]), _0x37f0af(0xc1));
                        if (_0x351eca[_0x37f0af(0xd6)][_0x37f0af(0xdc) + 'es'] && typeof _0x351eca[_0x37f0af(0xd6)][_0x37f0af(0xdc) + 'es'] == _0x37f0af(0xa5)) {
                            for (const _0x5ba183 in _0x351eca['config'][_0x37f0af(0xdc) + 'es']) {
                                const _0x55e867 = join(__dirname, 'nodemodule' + 's', _0x37f0af(0x70) + 'es', _0x5ba183);
                                try {
                                    if (!global['nodemodule'][_0x37f0af(0xc9) + 'erty'](_0x5ba183)) {
                                        if (listPackage[_0x37f0af(0xc9) + 'erty'](_0x5ba183) || listbuiltinModules[_0x37f0af(0x8d)](_0x5ba183)) global[_0x37f0af(0x7f)][_0x5ba183] = require(_0x5ba183);
                                        else global[_0x37f0af(0x7f)][_0x5ba183] = require(_0x55e867);
                                    } else '';
                                } catch {
                                    var _0x710103 = 0x69d * -0x4 + 0x683 * -0x1 + -0x1d * -0x123,
                                        _0x50cad1 = ![],
                                        _0x169ab3;
                                    logger['loader'](global[_0x37f0af(0xa9)](_0x37f0af(0x8e), _0x37f0af(0x7c) + 'ckage', _0x5ba183, _0x351eca['config'][_0x37f0af(0x7b)]), 'warn'), execSync(_0x37f0af(0x85) + _0x37f0af(0xe0) + _0x37f0af(0xd1) + _0x37f0af(0xaf) + ' ' + _0x5ba183 + (_0x351eca['config']['dependenci' + 'es'][_0x5ba183] == '*' || _0x351eca[_0x37f0af(0xd6)][_0x37f0af(0xdc) + 'es'][_0x5ba183] == '' ? '' : '@' + _0x351eca['config'][_0x37f0af(0xdc) + 'es'][_0x5ba183]), {
                                        'stdio': _0x37f0af(0xae),
                                        'env': process[_0x37f0af(0xa7)],
                                        'shell': !![],
                                        'cwd': join(__dirname, _0x37f0af(0x7f) + 's')
                                    });
                                    for (_0x710103 = -0x40 * -0x6 + 0x769 * -0x1 + 0x5ea; _0x710103 <= 0x551 * -0x1 + -0x6e3 * 0x2 + 0x131a; _0x710103++) {
                                        try {
                                            require['cache'] = {};
                                            if (listPackage[_0x37f0af(0xc9) + _0x37f0af(0x9e)](_0x5ba183) || listbuiltinModules[_0x37f0af(0x8d)](_0x5ba183)) global[_0x37f0af(0x7f)][_0x5ba183] = require(_0x5ba183);
                                            else global[_0x37f0af(0x7f)][_0x5ba183] = require(_0x55e867);
                                            _0x50cad1 = !![];
                                            break;
                                        } catch (_0x198486) {
                                            _0x169ab3 = _0x198486;
                                        }
                                        if (_0x50cad1 || !_0x169ab3) break;
                                    }
                                    if (!_0x50cad1 || _0x169ab3) throw global[_0x37f0af(0xa9)](_0x37f0af(0x8e), 'cantInstal' + _0x37f0af(0x79), _0x5ba183, _0x351eca[_0x37f0af(0xd6)][_0x37f0af(0x7b)], _0x169ab3);
                                }
                            }
                            logger[_0x37f0af(0x90)](global[_0x37f0af(0xa9)](_0x37f0af(0x8e), 'loadedPack' + 'age', _0x351eca[_0x37f0af(0xd6)]['name']));
                        }
                        if (_0x351eca[_0x37f0af(0xd6)]['envConfig']) try {
                            for (const _0xa98b28 in _0x351eca[_0x37f0af(0xd6)]['envConfig']) {
                                if (typeof global['configModu' + 'le'][_0x351eca[_0x37f0af(0xd6)][_0x37f0af(0x7b)]] == _0x37f0af(0xd9)) global[_0x37f0af(0xa2) + 'le'][_0x351eca['config'][_0x37f0af(0x7b)]] = {};
                                if (typeof global['config'][_0x351eca[_0x37f0af(0xd6)][_0x37f0af(0x7b)]] == _0x37f0af(0xd9)) global[_0x37f0af(0xd6)][_0x351eca[_0x37f0af(0xd6)][_0x37f0af(0x7b)]] = {};
                                if (typeof global['config'][_0x351eca['config'][_0x37f0af(0x7b)]][_0xa98b28] !== _0x37f0af(0xd9)) global[_0x37f0af(0xa2) + 'le'][_0x351eca['config'][_0x37f0af(0x7b)]][_0xa98b28] = global['config'][_0x351eca[_0x37f0af(0xd6)][_0x37f0af(0x7b)]][_0xa98b28];
                                else global[_0x37f0af(0xa2) + 'le'][_0x351eca[_0x37f0af(0xd6)][_0x37f0af(0x7b)]][_0xa98b28] = _0x351eca['config']['envConfig'][_0xa98b28] || '';
                                if (typeof global[_0x37f0af(0xd6)][_0x351eca[_0x37f0af(0xd6)]['name']][_0xa98b28] == 'undefined') global[_0x37f0af(0xd6)][_0x351eca[_0x37f0af(0xd6)]['name']][_0xa98b28] = _0x351eca[_0x37f0af(0xd6)][_0x37f0af(0xdb)][_0xa98b28] || '';
                            }
                            logger[_0x37f0af(0x90)](global[_0x37f0af(0xa9)](_0x37f0af(0x8e), 'loadedConf' + 'ig', _0x351eca[_0x37f0af(0xd6)][_0x37f0af(0x7b)]));
                        } catch (_0x169970) {
                            throw new Error(global[_0x37f0af(0xa9)](_0x37f0af(0x8e), _0x37f0af(0x8c) + 'ig', _0x351eca[_0x37f0af(0xd6)][_0x37f0af(0x7b)], JSON[_0x37f0af(0x95)](_0x169970)));
                        }
                        if (_0x351eca['onLoad']) {
                            try {
                                const _0x3aff4d = {};
                                _0x3aff4d[_0x37f0af(0xb8)] = _0x5a74d8, _0x3aff4d[_0x37f0af(0xd2)] = _0x513631, _0x351eca[_0x37f0af(0x9d)](_0x3aff4d);
                            } catch (_0x12974e) {
                                throw new Error(global[_0x37f0af(0xa9)](_0x37f0af(0x8e), _0x37f0af(0xc6), _0x351eca['config'][_0x37f0af(0x7b)], JSON['stringify'](_0x12974e)), _0x37f0af(0x86));
                            };
                        }
                        if (_0x351eca[_0x37f0af(0xc4) + 't']) global[_0x37f0af(0xa4)][_0x37f0af(0xab) + _0x37f0af(0xa3)][_0x37f0af(0xbf)](_0x351eca[_0x37f0af(0xd6)]['name']);
                        global[_0x37f0af(0xa4)]['commands'][_0x37f0af(0x88)](_0x351eca['config'][_0x37f0af(0x7b)], _0x351eca), logger[_0x37f0af(0x90)](global['getText'](_0x37f0af(0x8e), _0x37f0af(0x92) + _0x37f0af(0x83), _0x351eca[_0x37f0af(0xd6)][_0x37f0af(0x7b)]));
                    } catch (_0x4668bf) {
                        logger[_0x37f0af(0x90)](global['getText'](_0x37f0af(0x8e), _0x37f0af(0x80) + _0x37f0af(0xa0), _0x351eca[_0x37f0af(0xd6)][_0x37f0af(0x7b)], _0x4668bf), _0x37f0af(0x86));
                    };
                }
            }(),
            function () {
                const _0x10692d = _0x5894f5,
                    _0x34b4a0 = readdirSync(global['client'][_0x10692d(0xc0)] + (_0x10692d(0x8a) + _0x10692d(0xcf)))[_0x10692d(0x6d)](_0x4ab1a7 => _0x4ab1a7['endsWith'](_0x10692d(0x97)) && !global[_0x10692d(0xd6)][_0x10692d(0xe2) + 'led'][_0x10692d(0x8d)](_0x4ab1a7));
                for (const _0x12cd6d of _0x34b4a0) {
                    try {
                        var _0x52f697 = require(global[_0x10692d(0xa4)][_0x10692d(0xc0)] + (_0x10692d(0x8a) + _0x10692d(0x71)) + _0x12cd6d);
                        if (!_0x52f697['config'] || !_0x52f697[_0x10692d(0xc7)]) throw new Error(global[_0x10692d(0xa9)]('mirai', 'errorForma' + 't'));
                        if (global[_0x10692d(0xa4)]['events'][_0x10692d(0x9c)](_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]) || '') throw new Error(global[_0x10692d(0xa9)]('mirai', _0x10692d(0x89)));
                        if (!_0x52f697[_0x10692d(0x8f)] || typeof _0x52f697[_0x10692d(0x8f)] != _0x10692d(0xa5) || Object[_0x10692d(0x9a)](_0x52f697[_0x10692d(0x8f)])['length'] == -0x414 + -0xc3d * 0x2 + -0x22 * -0xd7) logger[_0x10692d(0x90)](global[_0x10692d(0xa9)](_0x10692d(0x8e), _0x10692d(0x87) + _0x10692d(0xde), _0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]), _0x10692d(0xc1));
                        if (_0x52f697[_0x10692d(0xd6)][_0x10692d(0xdc) + 'es'] && typeof _0x52f697[_0x10692d(0xd6)]['dependenci' + 'es'] == _0x10692d(0xa5)) {
                            for (const _0x2daa62 in _0x52f697['config'][_0x10692d(0xdc) + 'es']) {
                                const _0x7740d0 = join(__dirname, _0x10692d(0x7f) + 's', _0x10692d(0x70) + 'es', _0x2daa62);
                                try {
                                    if (!global[_0x10692d(0x7f)]['hasOwnProp' + 'erty'](_0x2daa62)) {
                                        if (listPackage['hasOwnProp' + 'erty'](_0x2daa62) || listbuiltinModules[_0x10692d(0x8d)](_0x2daa62)) global[_0x10692d(0x7f)][_0x2daa62] = require(_0x2daa62);
                                        else global[_0x10692d(0x7f)][_0x2daa62] = require(_0x7740d0);
                                    } else '';
                                } catch {
                                    var _0x24f3bb = -0x7fd * -0x4 + -0x1b2f + -0x4c5,
                                        _0xf95ae4 = ![],
                                        _0x3df52d;
                                    logger[_0x10692d(0x90)](global['getText']('mirai', _0x10692d(0x7c) + 'ckage', _0x2daa62, _0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]), _0x10692d(0xc1)), execSync('npm --pack' + _0x10692d(0xc8) + _0x10692d(0xb2) + _0x10692d(0x7e) + _0x2daa62 + (_0x52f697[_0x10692d(0xd6)]['dependenci' + 'es'][_0x2daa62] == '*' || _0x52f697[_0x10692d(0xd6)]['dependenci' + 'es'][_0x2daa62] == '' ? '' : '@' + _0x52f697[_0x10692d(0xd6)][_0x10692d(0xdc) + 'es'][_0x2daa62]), {
                                        'stdio': _0x10692d(0xae),
                                        'env': process[_0x10692d(0xa7)],
                                        'shell': !![],
                                        'cwd': join(__dirname, _0x10692d(0x7f) + 's')
                                    });
                                    for (_0x24f3bb = -0xadf * -0x2 + -0xc41 * 0x1 + -0x25f * 0x4; _0x24f3bb <= 0x113a + 0xd + -0x154 * 0xd; _0x24f3bb++) {
                                        try {
                                            require[_0x10692d(0xb0)] = {};
                                            if (global[_0x10692d(0x7f)]['includes'](_0x2daa62)) break;
                                            if (listPackage[_0x10692d(0xc9) + _0x10692d(0x9e)](_0x2daa62) || listbuiltinModules[_0x10692d(0x8d)](_0x2daa62)) global[_0x10692d(0x7f)][_0x2daa62] = require(_0x2daa62);
                                            else global[_0x10692d(0x7f)][_0x2daa62] = require(_0x7740d0);
                                            _0xf95ae4 = !![];
                                            break;
                                        } catch (_0x12b75a) {
                                            _0x3df52d = _0x12b75a;
                                        }
                                        if (_0xf95ae4 || !_0x3df52d) break;
                                    }
                                    if (!_0xf95ae4 || _0x3df52d) throw global[_0x10692d(0xa9)](_0x10692d(0x8e), _0x10692d(0x7a) + _0x10692d(0x79), _0x2daa62, _0x52f697['config']['name']);
                                }
                            }
                            logger[_0x10692d(0x90)](global[_0x10692d(0xa9)]('mirai', _0x10692d(0xcc) + _0x10692d(0xe1), _0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]));
                        }
                        if (_0x52f697[_0x10692d(0xd6)][_0x10692d(0xdb)]) try {
                            for (const _0x3faa48 in _0x52f697[_0x10692d(0xd6)][_0x10692d(0xdb)]) {
                                if (typeof global[_0x10692d(0xa2) + 'le'][_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]] == 'undefined') global['configModu' + 'le'][_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]] = {};
                                if (typeof global['config'][_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]] == _0x10692d(0xd9)) global[_0x10692d(0xd6)][_0x52f697['config']['name']] = {};
                                if (typeof global['config'][_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]][_0x3faa48] !== _0x10692d(0xd9)) global[_0x10692d(0xa2) + 'le'][_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]][_0x3faa48] = global[_0x10692d(0xd6)][_0x52f697['config']['name']][_0x3faa48];
                                else global[_0x10692d(0xa2) + 'le'][_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]][_0x3faa48] = _0x52f697[_0x10692d(0xd6)][_0x10692d(0xdb)][_0x3faa48] || '';
                                if (typeof global['config'][_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]][_0x3faa48] == _0x10692d(0xd9)) global[_0x10692d(0xd6)][_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]][_0x3faa48] = _0x52f697[_0x10692d(0xd6)]['envConfig'][_0x3faa48] || '';
                            }
                            logger['loader'](global[_0x10692d(0xa9)](_0x10692d(0x8e), _0x10692d(0x8c) + 'ig', _0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]));
                        } catch (_0x4beeff) {
                            throw new Error(global[_0x10692d(0xa9)](_0x10692d(0x8e), _0x10692d(0x8c) + 'ig', _0x52f697[_0x10692d(0xd6)]['name'], JSON[_0x10692d(0x95)](_0x4beeff)));
                        }
                        if (_0x52f697['onLoad']) try {
                            const _0x514c67 = {};
                            _0x514c67[_0x10692d(0xb8)] = _0x5a74d8, _0x514c67['models'] = _0x513631, _0x52f697[_0x10692d(0x9d)](_0x514c67);
                        } catch (_0x3db707) {
                            throw new Error(global[_0x10692d(0xa9)](_0x10692d(0x8e), _0x10692d(0xc6), _0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)], JSON[_0x10692d(0x95)](_0x3db707)), _0x10692d(0x86));
                        }
                        global[_0x10692d(0xa4)][_0x10692d(0xb7)][_0x10692d(0x88)](_0x52f697['config']['name'], _0x52f697), logger[_0x10692d(0x90)](global[_0x10692d(0xa9)](_0x10692d(0x8e), _0x10692d(0x92) + _0x10692d(0x83), _0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]));
                    } catch (_0x3dd208) {
                        logger[_0x10692d(0x90)](global[_0x10692d(0xa9)](_0x10692d(0x8e), 'failLoadMo' + 'dule', _0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)], _0x3dd208), _0x10692d(0x86));
                    }
                }
            }(), logger[_0x5894f5(0x90)](global[_0x5894f5(0xa9)](_0x5894f5(0x8e), _0x5894f5(0xce) + _0x5894f5(0xc2), global[_0x5894f5(0xa4)][_0x5894f5(0x77)]['size'], global[_0x5894f5(0xa4)][_0x5894f5(0xb7)][_0x5894f5(0x93)])), logger[_0x5894f5(0x90)](_0x5894f5(0xad) + (Date[_0x5894f5(0x74)]() - global['client'][_0x5894f5(0xb6)]) + 'ms ==='), writeFileSync(global['client'][_0x5894f5(0x9b)], JSON[_0x5894f5(0x95)](global[_0x5894f5(0xd6)], null, -0x1 * 0x2303 + 0x9 * 0xab + -0xc * -0x26b), 'utf8'), unlinkSync(global['client'][_0x5894f5(0x9b)] + _0x5894f5(0xa1));
        const _0x9e2249 = {};
        _0x9e2249['api'] = _0x5a74d8, _0x9e2249[_0x5894f5(0xd2)] = _0x513631;
        const _0x24e2fb = require('./includes' + '/listen')(_0x9e2249);

        function _0xe14ce0(_0x3b6128, _0x1debaa) {
            const _0x480e94 = _0x5894f5;
            if (_0x3b6128) return logger(global[_0x480e94(0xa9)](_0x480e94(0x8e), _0x480e94(0xda) + _0x480e94(0x9f), JSON[_0x480e94(0x95)](_0x3b6128)), _0x480e94(0x86));
            if ([_0x480e94(0x76), _0x480e94(0x6e), _0x480e94(0x8b) + 'pt'][_0x480e94(0xd3)](_0x303312 => _0x303312 == _0x1debaa['type'])) return;
            if (global['config']['DeveloperM' + _0x480e94(0xbd)] == !![]) console['log'](_0x1debaa);
            return _0x24e2fb(_0x1debaa);
        };
        global['handleList' + 'en'] = _0x5a74d8[_0x5894f5(0xb5)](_0xe14ce0);
        try {
            await checkBan(_0x5a74d8);
        } catch (_0x1f61f8) {
            return process['exit'](0x4ff * 0x1 + -0x26 + 0x4d9 * -0x1);
        };
        if (!global[_0x5894f5(0xc5)]) logger(global[_0x5894f5(0xa9)](_0x5894f5(0x8e), _0x5894f5(0xbe) + _0x5894f5(0xbc)), _0x5894f5(0xcd) + 'AN ]');
        global[_0x5894f5(0xa4)][_0x5894f5(0xb8)] = _0x5a74d8, setInterval(async function () {
            const _0x5ceec6 = _0x5894f5;
            global[_0x5ceec6(0xda) + 'en'][_0x5ceec6(0x94) + 'ing'](), global[_0x5ceec6(0xc5)] = ![], setTimeout(function () {
                const _0x1c0494 = _0x5ceec6;
                return global[_0x1c0494(0xda) + 'en'] = _0x5a74d8['listenMqtt'](_0xe14ce0);
            }, -0x262 + 0x1b00 + -0x16aa);
            try {
                await checkBan(_0x5a74d8);
            } catch {
                return process[_0x5ceec6(0xd4)](0x12a2 + -0xdd7 + 0x3 * -0x199);
            };
            if (!global[_0x5ceec6(0xc5)]) logger(global[_0x5ceec6(0xa9)](_0x5ceec6(0x8e), 'warningSou' + _0x5ceec6(0xbc)), _0x5ceec6(0xcd) + _0x5ceec6(0xb4));
            global[_0x5ceec6(0xd6)][_0x5ceec6(0x75)] && (global[_0x5ceec6(0xdf)][_0x5ceec6(0x78)]['clear'](), global[_0x5ceec6(0xa4)][_0x5ceec6(0xa8) + 'y'] = global['client']['handleReac' + 'tion'] = {});
            if (global[_0x5ceec6(0xd6)][_0x5ceec6(0x98) + 'ode'] == !![]) return logger(global[_0x5ceec6(0xa9)]('mirai', 'refreshLis' + _0x5ceec6(0x91)), _0x5ceec6(0x82) + ' ]');
        }, 0x4 * 0x19720 + -0x7da * 0x6f + 0x632c6);
    });
};




const _0x1c67 = ['/database/', '684836VzocuV', '14606dWbyhY', './includes', '581496bEiWfY', '7323SqIEMV', '38lEBxmf', 'nectDataba', 'models', 'sequelize', 'getText', '23891ddtfEp', 'successCon', '3bocUjK', '11Owayag', 'mirai', '1YKvqkD', 'authentica', '386252pvmORr', '396527OXEmEm', '[ DATABASE'];

function _0x54b4(_0x5451b3, _0x5d3420) {
    return _0x54b4 = function (_0x1eb9ce, _0x33c24c) {
        _0x1eb9ce = _0x1eb9ce - (0x1572 + 0x7b7 * 0x4 + 0x1a3 * -0x1f);
        let _0x5b1047 = _0x1c67[_0x1eb9ce];
        return _0x5b1047;
    }, _0x54b4(_0x5451b3, _0x5d3420);
}(function (_0x5c1ef1, _0x36c01f) {
    const _0x49bd3c = _0x54b4;
    while (!![]) {
        try {
            const _0x83141e = -parseInt(_0x49bd3c(0x1a4)) * -parseInt(_0x49bd3c(0x198)) + parseInt(_0x49bd3c(0x197)) + parseInt(_0x49bd3c(0x191)) * parseInt(_0x49bd3c(0x194)) + -parseInt(_0x49bd3c(0x193)) + -parseInt(_0x49bd3c(0x1a3)) * parseInt(_0x49bd3c(0x1a1)) + -parseInt(_0x49bd3c(0x19a)) + -parseInt(_0x49bd3c(0x19b)) * -parseInt(_0x49bd3c(0x19c));
            if (_0x83141e === _0x36c01f) break;
            else _0x5c1ef1['push'](_0x5c1ef1['shift']());
        } catch (_0xb99243) {
            _0x5c1ef1['push'](_0x5c1ef1['shift']());
        }
    }
}(_0x1c67, 0x21558 * -0x4 + 0x64fc3 + 0x95c0f), (async () => {
    const _0x512472 = _0x54b4;
    try {
        await sequelize[_0x512472(0x192) + 'te']();
        const _0x28aa45 = {};
        _0x28aa45['Sequelize'] = Sequelize, _0x28aa45[_0x512472(0x19f)] = sequelize;
        const _0x223dd8 = require(_0x512472(0x199) + _0x512472(0x196) + 'model')(_0x28aa45);
        logger(global[_0x512472(0x1a0)](_0x512472(0x1a5), _0x512472(0x1a2) + _0x512472(0x19d) + 'se'), '[ DATABASE' + ' ]');
        const _0x1f4fdb = {};
        _0x1f4fdb[_0x512472(0x19e)] = _0x223dd8, onBot(_0x1f4fdb);
    } catch (_0x500d77) {
        logger(global[_0x512472(0x1a0)]('mirai', _0x512472(0x1a2) + 'nectDataba' + 'se', JSON['stringify'](_0x500d77)), _0x512472(0x195) + ' ]');
    }
})());
