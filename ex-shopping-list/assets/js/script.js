const movies = [
  'Starwars',
  'Matrix',
  'Avatar'
];

const moviesElement = document.querySelector('.movies') // dom node
//console.log(moviesElement);
const moviesElements = document.querySelectorAll('.movies') // array
//console.log(moviesElements);

/* for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];
  console.log(movie);
} */

let i = 0;
while ( i < movies.length) {
  const movie = movies[i];
  console.log(movie);

  const listItemMarkup = `
  	<li class="list-group-item d-flex justify-content-between align-items-center ${i === 0 ? 'active' : ''}">
				${movie}
				<span class="badge bg-secondary badge-pill">${i + 1}</span>
			</li>
	`

  //moviesElement.appendChild(listItemMarkup)
  
  moviesElement.insertAdjacentHTML('beforeend', listItemMarkup)
  
  i++
}





