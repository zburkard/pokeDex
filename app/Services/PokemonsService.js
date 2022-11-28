import { appState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"

const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})



class PokemonsService {
  async getPokemons() {
    const res = await pokeApi.get('?limit=151')
    console.log('getting pokemon list', res.data.results)
    appState.pokemons = res.data.results
  }

  async selectPokemon(name) {
    const res = await pokeApi.get(name)
    console.log('selected active pokemon', res.data)
    appState.activePokemon = new Pokemon(res.data)
  }




}



export const pokemonsService = new PokemonsService()