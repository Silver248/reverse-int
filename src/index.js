module.exports = function reverse (n) {
    let ss = Math.abs(n)+'';
    let rever = ss.split('').reverse().join('');
    return rever;
}
