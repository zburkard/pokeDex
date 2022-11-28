import { appState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"


const sandBoxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/zak/pokemon'
})



class SandboxPokemonsService {

  async getMyPokemon() {
    const res = await sandBoxApi.get()
    console.log(res.data)
    appState.myPokemon = res.data.map(p => new Pokemon(p))
  }
  setPokemon(name) {
    let pokemon = appState.myPokemon.find(p => p.name == name)
    appState.activePokemon = pokemon
  }
  async catchPokemon() {
    let pokemon = appState.activePokemon
    const res = await sandBoxApi.post('', pokemon)
    appState.myPokemon = [...appState.myPokemon, new Pokemon(res.data)]
  }
  async deletePokemon() {
    const pokemon = appState.activePokemon
    const res = await sandBoxApi.delete(pokemon.name)
    appState.myPokemon = appState.myPokemon.filter(p => p.name != pokemon.name)
    appState.activePokemon = null
  }






}


export const sandboxPokemonsService = new SandboxPokemonsService()