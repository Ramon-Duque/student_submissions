const names = [];
// Create

names.push("Dan");
names.push("Marina");
names.unshift("Bob");
// Delete

names.shift();
names.pop();

// Create and Replace

names.splice(0, 1, "Bob", "Nancy");

// Update

names [0] = "Dan";


// Adding a new value at index 3

names[3] = "Jim";

// Read

console.log(names);

for (let index = 0; index < names.length; index++) {
    const element = names[index];
    
}

for (const key in names) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

