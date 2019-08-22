// Recursive function to compared Nested Array
function arraysEqual(a, b) {
    if ((!Array.isArray(a)) || (!Array.isArray(b))){
        return;
    }
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    for (let i = 0; i<a.length; i++ ) {
        //console.log('Processing Array:'+a+' Line:'+a[i]+'...');
        if (Array.isArray(a[i]) && Array.isArray(b[i])){
            //console.log('Array detected!:'+a[i]);
            if (!arraysEqual(a[i], b[i])){
                return false;
            };
            continue;
        };
        //console.log('Non-Array detected!:'+a[i]);
        if (!(a[i] === b[i])) {
            console.log('DIFFERENCE @ LIST 1 LINE:'+a+' ELEMENT:'+a[i])
            return false;
        };
    }
    return true;
};

module.exports = arraysEqual;