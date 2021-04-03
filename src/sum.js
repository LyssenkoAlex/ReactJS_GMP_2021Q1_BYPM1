function sum(a, b) {
  return a + b;
}

let a = [{x:5, y:6}, {x:3, y:2}]
let c = {x:5, y:6};

console.log(a.some((x) => (x.x === c.x & x.y === c.y)))

module.exports = sum;
