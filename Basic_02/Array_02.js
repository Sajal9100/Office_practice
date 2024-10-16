const marvel_Heros = ["ironman", "thor", "Hulk"]
const DC_heros = ["SUPERMAN","BatMan","Flash"]

// marvel_Heros.push(DC_heros)
// console.log(marvel_Heros);

const All_Heroes = marvel_Heros.concat(DC_heros)

console.log(All_Heroes);

const ALL_New_HEROS = [...marvel_Heros,...DC_heros]
console.log(ALL_New_HEROS);

let wrong_Array = [1,2,3,[4,5,[6,7,[8,9]]]]

const right_array = wrong_Array.flat(Infinity)

let My_name = "Sajal singh"
 console.log(Array.from(My_name));
 



