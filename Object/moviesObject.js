const addMovies=document.getElementById('add-movie-btn');
let counter=-1;
const movies=[];



const addMoviesHandler=()=>{
    const title=document.getElementById('title').value;

    const extraMovie=document.getElementById('extra-name').value;
    const extraValue=document.getElementById('extra-value').value;
    if(title.trim()==='' || extraMovie.trim() ==='' || extraValue=== ''){return;}
const newMoviesObject={
    info:{
        title,
        [extraMovie]:extraValue
    },
    id:Math.random()
};
    counter+=1;
movies.push(newMoviesObject);
console.log(movies);
renderMovies(counter);
}
addMovies.addEventListener('click',addMoviesHandler);




//IMPORTANT KEYNOTES

// If you want to access objects nested we usually go with dynamica access
//for example : if you have a object called
//newMoves={info:{title,[extra-name]:extraValue},id:Math.random()}
//and store it into movies.push(newMovies);

//Here you cannot do like this movies.info[extra-name]//because here extra name isnt into block of code its local
//In order to fullfill this gap we use dynamic object accessing using forIn loop
// for(const key in movies.info)
// {
//     const text=`$[key]:${movies.info[key]}`//this here we will get the key name
//     example: level: inside movie it will look into info with [level] object name will render
// }