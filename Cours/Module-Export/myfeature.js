const a = 2;
const b = 3;
const foisDeux = (x) => x*2;

const mymodule = function() {
    const test2 = 'Hello';
    console.log(test2);
}


module.exports.mymodule = mymodule;
module.exports.a = a;
module.exports.b = b;
module.exports.foisDeux = foisDeux;