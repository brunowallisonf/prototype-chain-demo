# prototype-chain-demo
This code explain how protype and proto works on javascript

Every object has a prototype and when a object is instantiated The function points to the Object prototype

Javascript makes inheriterance based on __proto__ property, to find property of the parent classes of an object, so to find the object's property defined in his parents
javascript walks through a prototype chain like object.__proto__.__proto.__proto___ for as much as __proto__ is different of null.
