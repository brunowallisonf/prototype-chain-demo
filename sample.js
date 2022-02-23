const obj = {}
const arr = []
const fn = () => { }
const assert = require("assert")
console.log("new Object() is {}", new Object().__proto__ === {}.__proto__)

assert.deepStrictEqual(new Object().__proto__, {}.__proto__)

console.log(obj.__proto__ === Object.prototype)
assert.deepStrictEqual(obj.__proto__, Object.prototype)

console.log(fn.__proto__ === Function.prototype)
assert.deepStrictEqual(fn.__proto__, Function.prototype)

console.log(arr.__proto__ === Array.prototype)
assert.deepStrictEqual(arr.__proto__, Array.prototype)



function Employee() {

}

Employee.prototype.salary = () => "salary**"

function Supervisor() {

}
Supervisor.prototype = Object.create(Employee.prototype)
Supervisor.prototype.profitShare = () => "Profit"

function Manager() {

}

Manager.prototype = Object.create(Supervisor.prototype)

Manager.prototype.monthlyBonuses = () => "monthlyBonuses**"

console.log(Manager.prototype.salary())
console.log(Manager.prototype.__proto__ === Supervisor.prototype);
console.log(Manager.prototype.__proto__.__proto__ === Employee.prototype);


