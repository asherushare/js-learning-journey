let arr = [33, 33, 3, 2];

console.log(arr);

const students = ['Patra', 'Mettle', 'Daniel', 'Baje', 23, 33];

console.log(students);
console.log(students.length);
console.log(students[3]);

students.push('Koraput');
console.log(students);

students.push('Siri', 'Kirsani');
students.push('🥳', {fname: 'Nanda', age: 23, Lname: 'Nandu'});
console.log(students);


console.log(students.indexOf('Baje'));
students.push('Odisha');

students.pop();

console.log(students.indexOf('NITK'));
console.log(students.reverse());