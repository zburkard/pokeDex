import { appState } from "../AppState.js";
import { sandboxPokemonsService } from "../Services/SandboxPokemonsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawMyPokemon() {
  let pokemon = appState.myPokemon
  let template = ''
  pokemon.forEach(p => template += p.MyPokemonTemplate)
  setHTML('my-pokemon', template)
  // let caughtPokemon = appState.myPokemon.length
  // setHTML('caught-list', `<div>${caughtPokemon}</div>`)
}


export class SandboxPokemonsController {
  constructor() {
    appState.on('myPokemon', _drawMyPokemon)
    this.getMyPokemon()
  }

  async getMyPokemon() {
    try {
      debugger
      await sandboxPokemonsService.getMyPokemon()

    } catch (error) {
      Pop.error(error.message)
      console.error(error)
    }
  }

  setPokemon(name) {
    sandboxPokemonsService.setPokemon(name)
  }

  async catchPokemon() {
    try {
      await sandboxPokemonsService.catchPokemon()
    } catch (error) {
      Pop.error(error.message)
      console.error(error)
    }
  }

  async deletePokemon() {
    try {
      await sandboxPokemonsService.deletePokemon()
    } catch (error) {
      Pop.error(error.message)
      console.error(error)
    }
  }



}