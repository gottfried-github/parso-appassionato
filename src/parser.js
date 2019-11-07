const {TooMuchOpen} = require("./errors.js")

function parseNodes(sequence, closeNode, parseNodes) {
  // log("parseNodes", sequence)
  let open = sequence.nextOpen()
  // if (null === open) return null // throw new NoFirstOccuringOpen()
  if (null === open || false === open) return sequence

  sequence = closeNode(sequence)
  if (null === sequence.nextOpen(true)) return sequence

  return parseNodes(sequence)
}

function closeNode(sequence, parseNodes, closeNode) { // , parseNode
  // log("closeNode", sequence)
  let close = sequence.nextClose()

  if (null === close) throw new TooMuchOpen()
  if (false !== close) return sequence

  sequence = parseNodes(sequence)
  if (null === sequence.nextOpen(true)) throw new TooMuchOpen()

  return closeNode(sequence)
}

module.exports = {parseNodes, closeNode}
