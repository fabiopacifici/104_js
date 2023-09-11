/*
 * Social Posts
 * Creare una pagina che elenchi una lista di post socials a partire da un array di oggetti.
 * Gli attributi minimi del modello di un post: id, contenuto, immagine, 
 * autore (nome, avatar), numero di likes, data creazione.
 * Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like.
 * 
 * Immagini: va bene utilizzare qualsiasi servizio di placeholder
 * ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
 *
 * Bonus 1: Visualizzare la data con formato italiano (gg/mm/aaaa)
 * Bonus 2: Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene
 * le iniziali dell'utente (es. Sofia Perlari > SP)
 * Bonus 3: Click al pulsante "Mi Piace" incrementa il counter dei like al post.
 * 
*/

/***************************
    SET UP VARIABLES
****************************/
const container = document.getElementById('container');

// post a cui l'utente ha già messo like
const userLikes = [2, 3, 6];
// localStorage.setItem('userLiks', JSON.stringify(userLikes))
const posts = [
    {
        "id": 1,    
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
          "name": "Phil Mangione",
          "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,    
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
          "name": "Sofia Perlari",
          "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,    
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
          "name": "Chiara Passaro",
          "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,    
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
          "name": "Luca Formicola",
          "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,    
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
          "name": "Alessandro Sainato",
          "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }              
];



/***************************
    Render dei post
****************************/
for (let i = 0; i < posts.length; i++) {
    const currentPost = posts[i];
    container.innerHTML += postTemplate(currentPost);
}



/***************************
    FUNCTIONS
****************************/
// funnzione per generare la card di un post
function postTemplate(postData) {
    const { id, author, content, created, media, likes } = postData;
    return `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    ${author.image ? profileImageTemplate(author) : profileImageDefaultTemplate(author)}         

                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${author.name}</div>
                    <div class="post-meta__time">${formatDate(created)}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${content}</div>
        <div class="post__image">
            <img src="${media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button ${isPostLiked(id) ? 'like-button--liked' : ''} js-like-button" href="#" data-postid="${id}">
                        <i class="like-button__icon fas fa-thumbs-up"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>`;
}

// funzione per stampare l'immagine profilo (facoltativa, utile per fare bonus 2)
function profileImageTemplate (userData) {
    const { name, image } = userData;
    return `<img class="profile-pic" src="${image}" alt="${name}">`;
}

// Bonus 2: funzione di fallback immagine profilo
function profileImageDefaultTemplate (userData) {
    const { name } = userData;

    // ricaviamo le iniziali del nome
    const nameParts = name.split(' ');

    const letters = [];
    for (let i = 0; i < nameParts.length; i++) {
        const namePart = nameParts[i];
        const initialLetter = namePart[0]; // oppure namePart.charAt(0);
        letters.push(initialLetter);
    }
    console.log(letters);
    const initials = letters.join('');

    return `
        <div class="profile-pic-default">
            <span>${initials}</span>
        </div> 
    `;
}

// BONUS 1: visualizzare la data in formato italiano
function formatDate(dateStr) {
    console.log(dateStr);
    console.log(dateStr.split('-').reverse().join('/'));
    return dateStr.split('-').reverse().join('/');
}

// funzione usata nel ternario per aggiungere la classe "liked" al bottone del post (BONUS)
function isPostLiked(postId) {
    return userLikes.includes(postId);
}



/***************************
    BONUS 3: Like Button
****************************/
// ricordiamo che querySelector() restituisce il PRIMO elemento del DOM che corrisponde alla selezione
// per recuperare TUTTI gli elementi che hanno la stessa classe usiamo querySelectorAll()
const likeButtons = document.querySelectorAll('.js-like-button');
console.log(likeButtons);
const likeCounters = document.querySelectorAll('.js-likes-counter');

// aggiungiamo ad ogni pulsante l'event listener
for (let i = 0; i < likeButtons.length; i++) {
    const element = likeButtons[i];
    element.addEventListener('click', function (e){
        // se usiamo tag a mostriamo preventDefault(), altrimenti possiamo usare tag button
        e.preventDefault();

        if (!element.classList.contains('like-button--liked')) {

            element.classList.add('like-button--liked');
           
          
            const thisCounter = likeCounters[i];
            // leggo il valore attuale del contatore
            const number = parseInt(thisCounter.innerHTML);
            // incremento il valore del contatore 
            thisCounter.innerHTML = number + 1;

            // EXTRA: incrementare anche il numero di likes nell'array di oggetti
            // anche questo poco elegante ma, per mantenere le cose semplici, utilizzando sempre lo stesso indice i
            const likedPost = posts[i];
            likedPost.likes++;
        } else {
            // EXTRA BONUS: possiamo togliere il like
            element.classList.remove('like-button--liked');
            // recupero il contatore associato a questo post tramite l'indice i
            const thisCounter = likeCounters[i];
            // leggo il valore attuale del contatore
            const number = parseInt(thisCounter.innerHTML);
            // decremento il valore del contatore
            thisCounter.innerHTML = number - 1;

            // EXTRA: decrementiamo il numero di like dall'array di oggetti
            const likedPost = posts[i];
            likedPost.likes--;
        }
    });
}

localStorage.setItem('fabio', 'sta male')