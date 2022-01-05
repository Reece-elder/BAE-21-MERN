console.log("File linked!");

// Objects - Unordered collections of related data in form of key value pairs
// Objects are data types, and are mutable

let zaph = {
    name: "Zaph",
    colour: "Chestnutty",
    fluffy: true,
    goodCatRating : 9
};

console.log(zaph);
console.log(zaph.colour);
console.log(zaph.fluffy);

// With objects you can manipulate them after being created
zaph.chonky = true;
console.log(zaph);


// An array of objects, what can we do with that info?

let cattery = [
    {name: "Oliver", colour: "Cinnamon", fluffy: false, goodCatRating: 7, chonky: true},
    {name: "Hazel", colour: "Beige Fawn", fluffy: true, goodCatRating: 8, chonky: false},
    {name: "Zaph", colour: "Chestnutty", fluffy: true, goodCatRating : 9}
];

console.log(cattery);

// Print out each individual cat from the cattery separately 

cattery.forEach((cat) => {
    console.log(cat.name);
});

for(cat of cattery){
    console.log(cat.colour);
}

// More useful for when you need specific conditions 
for (let i = 0; i < cattery.length; i++){
    console.log(cattery[i]);
}




// Destructuring - Extracting information from objects / arrays for ease of use
const movie = {
    title: "Starship Troopers",
    genre: "Sci-fi",
    runtime: 105
}

console.log(`My favourite movie is ${movie.title}, its genre is ${movie.genre} and lasts for ${movie.runtime}`);

// {} denote we are deconstructing the object and passing the values directly in
// title = movie.title
// genre = movie.genre
// length = 110 
// movieLength = movie.runtime
let {title, genre, length = 110, runtime: movieLength} = movie;

console.log(`My favourite movie is ${title}, its genre is ${genre} and lasts for ${length} or lasts for ${movieLength}`);