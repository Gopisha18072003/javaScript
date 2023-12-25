const marvel_char = ["thor", "spiderman", "ironman"]
const dc_char = ["superman", "batman", "aquanman"]

// marvel_char.push(dc_char)
// console.log(marvel_char)

const all_char = marvel_char.concat(dc_char)
console.log(all_char);

const new_all_char = [...marvel_char, ...dc_char]
console.log(new_all_char);

const nested_array = [1,2,3, [4, 5, 6], [7, 8, 9, [10, 11]]]
const flat_array = nested_array.flat(Infinity);
console.log(flat_array);

console.log(Array.isArray("Gopi"))
console.log(Array.from("Gopi"))

console.log(Array.from({name: "Gopi"})) // Interesting case

let score1 = 100
let score2 = 200
let score3 = 300

const score_array = Array.of(score1, score2, score3);
console.log(score_array)