//store data in local storage
localStorage.setItem('name','nafisa');
localStorage.setItem('age','21'); //anything in local storage saves as string

//get or retrieve data from local storage
let name=localStorage.getItem('name');
console.log(name);
let age=localStorage.getItem('age');
console.log(age);

//update data
localStorage.setItem('name','tuli');
localStorage.age=20;//using dot notation
name=localStorage.getItem('name');
age=localStorage.getItem('age');
console.log(name,age);

//deleting data from local storage
/*localStorage.removeItem('name');
name=localStorage.getItem('name');
console.log(name);*/
localStorage.clear();
name=localStorage.getItem('name');
age=localStorage.getItem('age');
console.log(name,age); 
