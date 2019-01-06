const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS";
    } else {
        let current = 1;
        let last = 0;
        for (i=1; i < number; i++) {
            next_local = current + last;
            last = current;
            current = next_local;
        };
        return current;
    }
}

module.exports = fibonacci
