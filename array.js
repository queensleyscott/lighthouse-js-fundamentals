let director = "Steven Spielberg";
let films = ["Jaws", "Raiders of the Lost Ark", "A.I."];

films[2] = "Jurassic Park";
films;
films.push("A.I.");
films;

console.log(films);

console.log(director + " is the director of " + films.length + " films");

films.push("E.T.");
console.log (director + " is the director of " + films.length + " films");