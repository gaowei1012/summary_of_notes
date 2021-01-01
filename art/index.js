const {parse, print, types} = require('recast')

const code = [
    "function add(a, b) {",
    "  return a +",
    "    // Weird formatting, huh?",
    "    b;",
    "}"
].join("\n");

const ast = parse(code)

// Grab a reference to the function declaration we just parsed.
const add  = ast.program.body[0];

// console.log(ast.program.body[0])

const n = types.namedTypes;

// Make sure it's a FunctionDeclaration (optional).
n.FunctionDeclaration.assert(add);

// console
console.log(n)


// If you choose to use recast.builders to construct new AST nodes, all builder
// arguments will be dynamically type-checked against the Mozilla Parser API.
const b = types.builders;

// This kind of manipulation should seem familiar if you've used Esprima or the
// Mozilla Parser API before.
ast.program.body[0] = b.variableDeclaration("var", [
    b.variableDeclarator(add.id, b.functionExpression(
      null, // Anonymize the function expression.
      add.params,
      add.body
    ))
]);


// Just for fun, because addition is commutative:
add.params.push(add.params.shift());

console.log(print(add))

