const caesar = function(str, shift) {
        let out = "";  
          
    for (let i = 0; i < str.length; i++) {
        let unicode = str.charCodeAt(i);

        if (unicode >= 65 && unicode < 65+26) {
            unicode -= 65;
            unicode = (unicode + shift) - 26*Math.floor((unicode + shift)/26);  // modulo for wrap-around
            unicode += 65;
        }

        if (unicode >= 97 && unicode < 97+26) {
            unicode -= 97;
            unicode = (unicode + shift) - 26*Math.floor((unicode + shift)/26);  // modulo for wrap-around
            unicode += 97;
        }

        out += String.fromCharCode(unicode);
        }

        return out;
    };

// Do not edit below this line
module.exports = caesar;
