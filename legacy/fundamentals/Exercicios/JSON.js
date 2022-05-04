let person = {
    "name": "Maria",
    "age": 96,
    "position": "Developer",
    "languages": ["JavaScript", "C#", "Java", "Rust", "C"]
};

console.log("Nome:", person.name);
console.log("Idade:",person.age, "anos");
console.log("Profissão:", person.position);
console.log("Fluência:", person.languages);

let JSON = {
    "quotes": "just double quotes",
    "comments": "Doesn't accept comments"
}
console.log("\n##### JSON #####")
console.log('>> ',JSON.quotes);
console.log('>> ', JSON.comments);