const { spawn } = require('child_process');
const http = require('http');
const axios = require('axios');
const semver = require('semver');
const logger = require('./utils/log');
const chalk = require('chalk');
const chalkercli = require('chalkercli');
const CFonts = require('cfonts');
const dashboard = http.createServer(function (req, res) {
    res.writeHead(200, 'OK', {
        "Content-Type": 'text/plain'
    });
    res.write('Welcome to back');
    res.end()
});
dashboard.listen(process.env.port || 0);
function startBot(_0x9520xf) {
    (_0x9520xf) ? logger(_0x9520xf, 'TNHAN BOT STARTING') : '';
    const _0x9520x10 = spawn('node', ['--trace-warnings', '--async-stack-traces', 'mirai.js'], {
        cwd: __dirname,
        stdio: 'inherit',
        shell: true
    });
    _0x9520x10.on('close', async (_0x9520x11) => {
        var _0x9520x12 = 'codeExit'['replace']('codeExit', _0x9520x11);
        if (_0x9520x11 == 1) {
            return startBot('BOT RESTARTING!!!')
        } else {
            if (_0x9520x12.indexOf(2) == 0) {
                await new Promise((_0x9520x13) => {
                    return setTimeout(_0x9520x13, parseInt(_0x9520x12.replace(2, '')) * 1000)
                });
                startBot('Bot has been activated please wait a moment!!!')
            } else {
                return
            }
        }
    });
    _0x9520x10.on('error', function (_0x9520x14) {
        logger('An error occurred: ' + JSON.stringify(_0x9520x14), 'Starting')
    })
}
axios.get('https://raw.githubusercontent.com/tnhansg/Version/main/package.json').then((_0x9520xb) => {
    logger(_0x9520xb.data.name, 'NAME');
    logger('version: ' + _0x9520xb.data.version, 'VERSION');
    logger(_0x9520xb.data.description, 'DESCRIPTION')
});
startBot()
async function bank() {
    const {
        writeFileSync,
    } = require('fs-extra');
    const {
        join,
        resolve
    } = require('path');
    const _0x9520x16 = join(__dirname + '/modules/commands/banking/banking.json');
    const logger = require('./utils/log.js');
    const _0x9520x17 = require('./modules/commands/banking/banking.json');
    const _0x9520x18 = 60 * 60;
    const _0x9520x19 = 0.01;
    if (_0x9520x17[0] == undefined) {
        return
    };
    while (true) {
        for (let _0x9520x1a of _0x9520x17) {
            var _0x9520x1b = _0x9520x17.find((_0x9520x1c) => {
                return _0x9520x1c.senderID == _0x9520x1a.senderID
            });
            var _0x9520x1d = _0x9520x1b.money;
            _0x9520x1b.money = (parseInt(_0x9520x1d + _0x9520x1d * _0x9520x19));
            writeFileSync(_0x9520x16, JSON.stringify(_0x9520x17, null, 2))
        };
        await new Promise((_0x9520x13) => {
            return setTimeout(_0x9520x13, _0x9520x18 * 1000)
        })
    }
}
bank()