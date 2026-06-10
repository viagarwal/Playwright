const userRoles: Record<string, string> = {
  "admin": "Full Access",
  "editor": "Edit Content",
  "viewer": "Read Only"
};

for (const [key, value] of Object.entries(userRoles)) {
  console.log(`${key}: ${value}`);
  console.log(key)
}



console.log(userRoles["admin"]);
console.log(Object.keys(userRoles).length); 

const userRoles1 = new Map<string, string>();
userRoles1.set("alice", "admin");
userRoles1.set("bob", "editor");
console.log(userRoles1.get("alice"));
console.log(userRoles1.has("bob"));
console.log(userRoles1.size);
console.log(userRoles1.keys());

for (const [user, role] of userRoles1) {
  console.log(`${user}: ${role}`);
}








const x11: Record<string, number> = {  
  "a": 1,
  "b": 2,
  "c": 3
};  
x11["d"] = 4;
console.log(x11);
console.log(x11["a"]);
console.log(Object.keys(x11).length);
for (const [key, value] of Object.entries(x11)) {
  console.log(`${key}: ${value}`);
  if (key === "b") {
    console.log("Found key 'b' with value:", value);
    break;
  }
} 


