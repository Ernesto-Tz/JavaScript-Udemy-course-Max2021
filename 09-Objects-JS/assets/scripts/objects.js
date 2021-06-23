const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');

    if(movies.length === 0 ){
        movieList.classList.remove('visible');
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';
    
    // I need to use the !filter in order to convert the Falsy value. 
    // This expression is read as: If no filer is set I will use all movies array otherwise filter the movies array with the given filter .
    const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li');
        movieEl.textContent = movie.info.title;
        // If you want to display the other properties check video 222
        movieList.append(movieEl);        
    });
};

const addMovieHandler = () =>{
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if( title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '' )
    {
        return;
    }

    const newMovie = {
        info :{
            title, // notes  9.1
            [extraName]: [extraValue] 
        },
        id: Math.random()
    };

    movies.push(newMovie);
    renderMovies();
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);