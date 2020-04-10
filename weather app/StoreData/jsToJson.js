const todos=[
    {name:'nafisa',score:50},
    {name:'muna',score:52},
    {name:'afra',score:51}
];
console.log(JSON.stringify(todos));//json string have double quotes in all properties
localStorage.setItem('todos',JSON.stringify(todos)); //storing json data
const stored=localStorage.getItem('todos');
console.log(stored);
console.log(JSON.parse(stored)); //turning json data to array