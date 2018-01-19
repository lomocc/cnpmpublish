#!/usr/bin/env node

var process = require('child_process');

var npm_registry = 'http://registry.npmjs.org';
// const cnpm_registry = 'https://registry.npm.taobao.org';
var cmd_get_registry = `npm config get registry`;

//直接调用命令
process.exec(cmd_get_registry, function(error, stdout, stderr) {
    if (error !== null) {
        console.log('[error]' + error);
    }else {
        var cnpm_registry = stdout.replace(/\s/g, '');
        var cmd_publish = `npm config set registry ${npm_registry} && npm publish && npm config set registry ${cnpm_registry} && ${cmd_get_registry}`;
        process.exec(cmd_publish, function(error, stdout, stderr) {
            if (error !== null) {
                console.log('[error]' + error);
            }else {
                console.log('[success]', stdout);
            }
        });
    }
});