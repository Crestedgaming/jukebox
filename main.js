/* -------------- PSEUDO KOD ----------------
    - Skapa 3 knappar med olika humör.
    - Skappa en array med objekt i som har egenskaper (name, artist, rating, category).
    - Knapparna är Happy, Sad, Angry och när man trycker på respektive knapp ska bara dom låtarna som hör till dyka upp.
*/

// import '/style.css';

// ---------------------------------------------------------
// ----------------------------- Array ---------------------
// ---------------------------------------------------------

const songs = [
    {
        name: 'Happy',
        artist: 'Pharell Williams',
        rating: 4,
        category: 'Happy',
    },
    {
        name: 'Don´t stop me now',
        artist: 'Queen',
        rating: 5,
        category: 'Happy',
    },
    {
        name: 'Hey ya',
        artist: 'Outkast',
        rating: 4,
        category: 'Happy',
    },
    {
        name: 'Sorry seems to be the hardest word',
        artist: 'Elton John',
        rating: 3,
        category: 'Sad',
    },
    {
        name: 'Everybody hurts',
        artist: 'R.E.M',
        rating: 4,
        category: 'Sad'
    },
    {
        name: 'Break stuff',
        artist: 'Limp Bizkit',
        rating: 2,
        category: 'Angry'
    },
    {
        name: 'Fuck you',
        artist: 'Lily Allen',
        rating: 5,
        category: 'Angry'
    },
    {
        name: 'Before he cheats',
        artist: 'Carrie Underwood',
        rating: 1,
        category: 'Angry'
    }
];

let filteredSongs = Array.from(songs);
const songList = document.querySelector('#songs');


// ---------------------------------------------------------
// ----------------------------- Filter buttons ------------
// ---------------------------------------------------------

const happyFilterBtn = document.querySelector('#happyBtn');
const sadFilterBtn = document.querySelector('#sadBtn');
const angryFilterBtn = document.querySelector('#angryBtn');
const resetFilterBtn = document.querySelector('#resetBtn');



happyFilterBtn.addEventListener('click', showHappySongs);
sadFilterBtn.addEventListener('click', showSadSongs);
angryFilterBtn.addEventListener('click', showAngrySongs);
resetFilterBtn.addEventListener('click', resetSongs);

// ---------------------------------------------------------
// ----------------------------- Events --------------------
// ---------------------------------------------------------

function showHappySongs() {
    document.body.style.backgroundColor = 'yellow';

}
function showSadSongs() {
    document.body.style.backgroundColor = 'purple';

}
function showAngrySongs() {
    document.body.style.backgroundColor = 'red';

}
function resetSongs() {
    document.body.style.backgroundColor = 'inherit';

}

function showAllSongs() {
    filteredSongs = Array.from(songs);
    printSongs()
}

console.log(showAllSongs)