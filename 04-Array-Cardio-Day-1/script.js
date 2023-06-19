const inventors = [
{first: 'Albert', last: 'Einstein', year:1879, passed: 1955},
{first: 'Isaac', last: 'Newton', year:1643, passed: 1727},
{first: 'Galileo', last: 'Galilei', year:1564, passed: 1642},
{first: 'Marie', last: 'Curie', year:1867, passed: 1934},
{first: 'Johannes', last: 'Kepler', year:1571, passed: 1630},
{first: 'Nicolaus', last: 'Copernicus', year:1473, passed: 1543},
{first: 'Max', last: 'Planck', year:1858, passed: 1947},
];

const people = ['Beck,Glenn','Becker,Carl','Beckett,Samuel','Beddoes,Mick','Beecher,Henry','Beethoven,Ludwig','Begin,Menachen','Alican,Delibalta','Kazim,Karabekir','Ince,Memed'];

//Array.prototype.filter();
//Greater than 1500 and up, of inventor's born.

const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year<1600))
console.table(fifteen);

//Array.prototype.map();
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

//Array.prototype.sort();
//Sort the investors by birthdate, oldest to youngest.
//first way:
// const ordered = inventors.sort(function(a,b){
//     if (a.year > b.year)
//     {
//         return 1;
//     }
//     else 
//     return -1;
// })
//Second way with ternary:
const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
console.table(ordered);

//Array.prototype.reduce();
//How many year did all the investors live.

const totalYears = inventors.reduce((total,inventor)=> {
    return total + (inventor.passed -inventor.year);
}, 0);

console.log(totalYears);

//Sort inventors by the years lived
const oldest = inventors.sort(function(a,b){
    const lastGuy = a.passed -a.year;
    const nextGuy = b.passed -b.year;
    return lastGuy > nextGuy ? -1 : 1;
});

console.table(oldest);


//Create a list from wikipedia.
//https://tr.wikipedia.org/wiki/İstanbul%27un_mahalleleri

// const category = document.querySelector('.div-col')
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('köy'));

//Sort the people alphabetically by last name.
const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst]= lastOne.split(', ');
    const [bLast, bFirst]= nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});
console.log(alpha);

//Sum up instance of each of these.
const data = ['car','car','car','bike','bike','chocolate','student','student','stu','dent','dent'];

const transportation= data.reduce(function(obj,item){
if (!obj[item]) {
    obj[item] = 0;
}
obj[item]++;
return obj;
}, {});

console.log(transportation);