'use strict';

module.exports = function(text) {
    let ret = [];
    text = Array.from(text);

    while(text.length) {
        let rand = Math.floor(Math.random() * text.length);
        ret.push(text.splice(rand, 1));
    }

    return ret.join('');
};
