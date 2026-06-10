
var xx : string = "Hello0 World"
console.log(xx.toUpperCase())
var y : string = "Hello World"
console.log(y.toLowerCase())
var z : string = "   Hello World   "
console.log(z.trim())
var str1 : string = "Hello"
var str2 : string = "World1"
console.log(str1.concat(" ",str2)) ;
console.log(xx.length)
console.log(xx.indexOf("World1"))
console.log(xx.slice(0,8))
console.log(xx.replace("World","TypeScript"))   
console.log(xx.split(" "));
console.log(xx.startsWith("Hello"))
console.log(xx.endsWith("World"))   
console.log(xx.includes("Hello"))
var yy = xx.repeat(3)
console.log(yy)
var zz = "Hello World"
console.log(zz.charAt(0))
console.log(zz.charCodeAt(0))   
var aaa = String.fromCharCode(72,101,108,108,111)
console.log(aaa)

console.log(zz.localeCompare("Hello World1"))
console.log(zz.match(/o/g))
console.log(zz.search(/World/)) 

var bbb = "Hello World"
bbb.split("").forEach(char => {
    console.log(char)
})
bbb ="vipul"
var ccc = bbb.split("");
for (let i = 0; i < ccc.length; i++) {
    console.log(ccc[i])
}





