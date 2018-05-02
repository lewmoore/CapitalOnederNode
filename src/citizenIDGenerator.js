var generator = function(){
  return Math.floor(Math.random() * (100000 - 999999 + 1) + 999999)
}

module.exports = generator
