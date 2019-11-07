class TooMuchOpen extends Error {
  constructor() {
    super("the number of opening tokens is greater than the number of closing tokens")
  }
}

class TooMuchClose extends Error {
  constructor() {
    super("the number of closing tokens is greater than the number of opening tokens")
  }
}

module.exports = {TooMuchOpen, TooMuchClose}
