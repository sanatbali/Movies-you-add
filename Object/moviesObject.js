const addMovies=document.getElementById('add-movie-btn');
const movies=[];
const searchButn=document.getElementById('search-btn');

const renderMovies=(filter='')=>
{
    const ul=document.getElementById('movie-list');
    if(movies.length===0)
    {ul.classList.remove('visible');return;}
    else{ul.classList.add('visible')}
    ul.innerHTML="";
    const filterValue=!filter?movies:movies.filter(movie=>movie.info.title.includes(filter));
        filterValue.forEach((movie)=>{
            const newCard=document.createElement('li');
            let text=movie.info.title + '-';
            for (const Key in movie.info) {
                if(Key!=='title'){
                    text=text +`${Key} : ${movie.info[Key]}`;}
            }
            newCard.textContent=text;
            ul.append(newCard);
    });
}
const addMoviesHandler=()=>{
    let titlei=document.getElementById('title');
    const extraMoviei=document.getElementById('extra-name');
    const extraValuei=document.getElementById('extra-value');

    let title=titlei.value;
    let extraMovie=extraMoviei.value;
    let extraValue=extraValuei.value;

    if(title.trim()==='' || extraMovie.trim() ==='' || extraValue=== ''){return;}
const newMoviesObject={
    info:{
        title,
        [extraMovie]:extraValue
    },
    id:Math.random()
};
movies.push(newMoviesObject);

titlei.value="";
extraMoviei.value="";
extraValuei.value="";

renderMovies();
}
const searching=()=>
{
    const filterValue=document.getElementById('filter-title').value;
    renderMovies(filterValue);
}
searchButn.addEventListener('click',searching);
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