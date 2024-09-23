function add(a, b, cb) {
    let result = a + b;
    cb(result);
}

add(23, 33, function(val) {
    console.log(val);
})