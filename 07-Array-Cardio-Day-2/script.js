
const people = [
    {name: 'Wes', year: 1998},
    {name: 'Kait', year: 1986},
    {name: 'Irv', year: 1970},
    {name: 'Lux', year: 2015}
];

const comments = [
    {text:'Love Ya!', id: 523423},
    {text:'So Good', id: 823423},
    {text:'This is best', id: 2039842},
    {text:'Bravo!!!', id: 123523},
    {text:'Nice Nice!', id: 542328},

];

//Some and Every Check
//Array.prototype.some() // is at least one person 19?
// const isAdult = people.some(function(person){
//     const currentYear = (new Date().getFullYear());
//     if(currentYear-person.year >= 19){
//         return true;
//     }
// });

const isAdults = people.some(person => ((new Date()).getFullYear())-person.year >= 19);
console.log({isAdults});

//Array.prototype.every() // is everyone 19?

const allAdults = people.every(person => ((new Date()).getFullYear())-person.year >= 19);
console.log({allAdults});

//Array.prototype.find() Find is like filter but instead returns just the one you are looking for.
//find the comment id of 823423

const comment = comments.find(comment => comment.id === 843423);
console.log(comment);

//Array.prototype.findIndex() 
//Find the comment with this id and delete the comment with the id of 823423

const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

//comments.splice(index, 1)

const newComments = [
    ...comments.slice(0),
    ...comments.slice(index +1)
];
