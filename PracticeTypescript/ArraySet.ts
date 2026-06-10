var marks :number[] = [1, 2, 3, 4, 5];
console.log(marks[0]);
var names : string[] = ["Alice", "Bob", "Charlie"];
console.log(names[1]);
console.log(marks.length);
console.log(names.length);
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

var mixedArray : (number | string)[] = [1, "Hello", 2, "World"];
console.log(mixedArray);

var nestedArray : number[][] = [[1, 2], [3, 4], [5, 6]];
console.log(nestedArray[0][1]);
console.log(nestedArray[1][0]);
console.log(nestedArray[2][1]); 

var emptyArray : string[] = Array(5)
emptyArray[0] = "First";
emptyArray[1] = "Second";
emptyArray[2] = "Third";
emptyArray[3] = "Fourth";
emptyArray[4] = "Fifth";
emptyArray[5] = "Sixth";
// emptyArray.push("Sixth");
console.log(emptyArray);
const ids = new Set<string | number>();
ids.add(1);
ids.add(1);
ids.add("vipul");
var bool : boolean = ids.has("vipul");
console.log(bool);
console.log(ids.size);  
ids.delete(1);
console.log(ids.size);  
ids.clear();
console.log(ids.size);  
ids.add(1);
ids.add("vipul");
console.log(ids.size);  
ids.add("vipul");
console.log(ids.size);
