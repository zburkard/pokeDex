import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokemonsService } from "../Services/PokemonsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPokemons() {
  let pokemons = appState.pokemons
  let template = ''
  pokemons.forEach(p => template += Pokemon.PokeDexTemplate(p))
  setHTML('wild-list', template)
}

function _drawActivePokemon() {
  let pokemon = appState.activePokemon
  setHTML('active-pokemon', pokemon.ActiveTemplate)
}




export class PokemonsController {

  constructor() {
    appState.on('pokemons', _drawPokemons)
    appState.on('activePokemon', _drawActivePokemon)
    this.getPokemons()
  }
  async getPokemons() {
    try {
      await pokemonsService.getPokemons()
    } catch (error) {
      Pop.error(error.message)
      console.error(error)
    }
  }
  async selectPokemon(name) {
    try {
      await pokemonsService.selectPokemon(name)
    } catch (error) {
      Pop.error(error.message)
      console.error(error)
    }

  }
}