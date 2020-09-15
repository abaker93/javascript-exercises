const ftoc = function(deg) {
  return Math.round(((deg - 32) * (5/9)) * 10) / 10;
}

const ctof = function(deg) {
  return Math.round((deg * (9/5) + 32) * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}