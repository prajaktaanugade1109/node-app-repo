
console.log("=============== Built in Module - OS =======================");

const os = require('os');

console.log(`Arch: ${os.arch()}`);
console.log('CPU Information:' , os.cpus());
console.log(`Available Memory Information(in bytes): ${os.freemem()}`);
console.log(`Total Memory: ${os.totalmem()}`);
console.log(`Host name: ${os.hostname()}`);
console.log(`Platform Information: ${os.platform()}`);
console.log(`Release Information: ${os.release()}`);
console.log(`Operating System Type: ${os.type()}`);
console.log(`System Uptime: ${os.uptime()}`);
console.log('User Information:' , os.userInfo());




