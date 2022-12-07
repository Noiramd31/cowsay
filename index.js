const me2 = require('./information.js');
console.log(me2.me.name);
// const cowsay = require("cowsay")
// console.log(cowsay.say(`èkkdffs`));
var cowsay = require("cowsay");

console.log(cowsay.say({
    text: `${me2.me.name} ${me2.me.campus}`,
    e: "oO",
    T: "U "
}));