// spinner2.js
const spinner = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let time = 100;
for (const str of spinner) {
setTimeout(() => { 
  process.stdout.write('\r' + str + '     ');
}, time);
time = time + 200;
};