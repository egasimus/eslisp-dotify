module.exports = function dotify (node) {

  if (node.type === "list") {

    if (node.values[0]                  &&
        node.values[0].type === "atom"  &&
        node.values[0].value[0] === "." &&
        node.values[0].value.length > 1 ) {

      if (node.values[0].value[1] === "-") {
        attributeAccess(node)
      } else {
        methodCall(node)
      }

    }

    if (node.type === "list") node.values.forEach(dotify)

  }

  return node

}

function attributeAccess (node) {

  // (.-foo bar) -> (. bar foo)

  if (node.values.length != 2) {
    throw Error('(.-<property> <obj>) form needs exactly 2 atoms')
  }

  var first = node.values[0].value

  node.values = [ { type: 'atom', value: '.' }, node.values[1] ]

  first.slice(2).split('.').forEach(function (token) {
    node.values.push({ type: 'atom', value: token })
  })

}

function methodCall (node) {

  // (.foo bar baz) -> ((. bar foo) baz)

  if (node.values.length < 2) {
    throw Error('(.<method> <obj> [<args>]) form needs at least 2 atoms')
  }

  var first  = node.values[0].value
    , second = node.values[1]

  node.values = [
    { type: 'list', values: [ { type: 'atom', value: '.' }, second ] }
  ].concat(node.values.slice(2))

  first.slice(1).split('.').forEach(function (token) {
    node.values[0].values.push({ type: 'atom', value: token })
  })

}
