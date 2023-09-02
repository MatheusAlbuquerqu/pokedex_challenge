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
    
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type} backgroundClr">${type}</li>`).join('')}
                </ol>
                <img class="TypeIcon" src="${pokemonTypeIcon}" alt="">
                <img src="${pokemon.picture}" alt="${pokemon.name}">
            </div>
        </li>
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


