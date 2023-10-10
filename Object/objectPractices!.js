const person={
    // my age is :23//this is not valid syntax
    'my age is' :23,//this is valid syntax
    address:'NoWhere',
    profession:'Software Engineer',
    greet:()=>{return 'Good Evening!'}
}


person.isAdmin=true;
delete person.isAdmin;
console.log(person['my age is']);


//IMPORTANT THING TO REMEMBER ALWAYS
//undefined vs null
//undefined are data types which are default value in Javascript they are total different from null
//undefined are directed shown as prompt if some object is undefined with showing an error
//but null is something which is different because null specifies us that it's not same it assiged value which we specified rather then Javascript did!
