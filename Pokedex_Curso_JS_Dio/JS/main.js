const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 12
let offset = 0;



function convertPokemonToLi(pokemon) {
    let pokemonTypeIcon;
    if (pokemon.types[0] === 'normal') {
        pokemonTypeIcon = 'https://archives.bulbagarden.net/media/upload/9/95/Normal_icon_SwSh.png'
    } else if (pokemon.types[0] === 'grass') {
        pokemonTypeIcon = 'https://archives.bulbagarden.net/media/upload/a/a8/Grass_icon_SwSh.png'
    } else if (pokemon.types[0] === 'fire') {
        pokemonTypeIcon = 'https://archives.bulbagarden.net/media/upload/a/ab/Fire_icon_SwSh.png'
    } else if (pokemon.types[0] === 'water') {
        pokemonTypeIcon = 'https://archives.bulbagarden.net/media/upload/8/80/Water_icon_SwSh.png'
    } else if (pokemon.types[0] === 'electric') {
        pokemonTypeIcon = 'https://archives.bulbagarden.net/media/upload/7/7b/Electric_icon_SwSh.png'
    } else if (pokemon.types[0] === 'ice') {
        pokemonTypeIcon = 'https://archives.bulbagarden.net/media/upload/1/15/Ice_icon_SwSh.png'
    } else if (pokemon.types[0] === 'flying') {
        pokemonTypeIcon = 'https://archives.bulbagarden.net/media/upload/b/b5/Flying_icon_SwSh.png'
    } else if (pokemon.types[0] === 'poison') {
        pokemonTypeIcon = 'https://archives.bulbagarden.net/media/upload/8/8d/Poison_icon_SwSh.png'
    } else if (pokemon.types[0] === 'fighting') {
        pokemonTypeIcon = 'https://archives.bulbagarden.net/media/upload/3/3b/Fighting_icon_SwSh.png'
    } else if (pokemon.types[0] === 'pyschic') {
        pokemonTypeIcon = 'https://archives.bulbagarden.net/media/upload/7/73/Psychic_icon_SwSh.png'
    } else if (pokemon.types[0] === 'dark') {
        pokemonTypeIcon = 'https://archives.bulbagarden.net/media/upload/d/d5/Dark_icon_SwSh.png'
    } else if (pokemon.types[0] === 'rock') {
        pokemonTypeIcon = 'https://archives.bulbagarden.net/media/upload/1/11/Rock_icon_SwSh.png'
    } else if (pokemon.types[0] === 'bug') {
        pokemonTypeIcon = 'https://archives.bulbagarden.net/media/upload/9/9c/Bug_icon_SwSh.png'
    } else if (pokemon.types[0] === 'ghost') {
        pokemonTypeIcon = 'https://archives.bulbagarden.net/media/upload/0/01/Ghost_icon_SwSh.png'
    } else if (pokemon.types[0] === 'steel') {
        pokemonTypeIcon = 'https://archives.bulbagarden.net/media/upload/0/09/Steel_icon_SwSh.png'
    } else if (pokemon.types[0] === 'dragon') {
        pokemonTypeIcon = 'https://archives.bulbagarden.net/media/upload/7/70/Dragon_icon_SwSh.png'
    } else {
        pokemonTypeIcon = 'https://archives.bulbagarden.net/media/upload/c/c6/Fairy_icon_SwSh.png'
    }

    return `         
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>


            <div  class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type} backgroundClr">${type}</li>`).join('')}
                </ol>
                <img class="TypeIcon" src="${pokemonTypeIcon}" alt="">
                <img onclick="handleClick('modal-${pokemon.name}')" class="pokemonImage" src="${pokemon.picture}" alt="${pokemon.name}">
                                         
                
            </div>
        </li>

        <div onclick="closeFade('fade')" id="fade">
            <div class="pokeModal" id="modal-${pokemon.name}">
                
            <div class="modal-header">
                    

                <img onclick="closeClick('modal-${pokemon.name}')" id="closeModal" src="https://static.wikia.nocookie.net/pokemon-vpk/images/4/45/Pok%C3%A9_Bola.png/revision/latest?cb=20160904234552&path-prefix=pt-br" alt="pokeball">

                <h2>${pokemon.name}</h2>
                
                <ol>
                <li>${pokemon.type}</li>
                <li>${pokemon.name}</li>
                <li>${pokemon.number}</li>
                
                </div>
                <div class="modal-body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, quam?
                        Quas accusantium id cupiditate iste veritatis repudiandae odio dolore
                        voluptas. Eum, deserunt quod. Sit similique laudantium assumenda
                        repellat vel necessitatibus.
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius alias
                        voluptate doloremque, totam inventore autem quis non error! Earum
                        ullam fuga, officiis voluptates pariatur unde et adipisci ducimus non
                        obcaecati.
                    </p>
                </div>
            </div>
        </div>
`
}


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNextPage = offset + limit

    if (qtdRecordsWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})


function handleClick(id) {
    let modal = document.getElementById(id)
    modal.style.display = "block";
    
    let fade = document.getElementById('fade')
    fade.style.display = "block";

    console.log(modal)
    console.log(modal.style.display)
}



function closeClick(id) {
    let closeMd = document.getElementById(id)
    closeMd.style.display = "none";
    
   
}


function closeFade(fade) {
    let fadeClose = document.getElementById(fade)
    fadeClose.style.display = "none";
}