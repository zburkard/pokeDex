export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.nickName = data.nickName || 'None'
    this.img = data.sprites ? data.sprites.front_default : data.img
    this.weight = data.weight
    this.height = data.height
    this.type = data.type || data.types.map(t => t.type.name[0].toUpperCase() + t.type.name.slice(1)).join(' | ')
    // this.type1 = data.types[0] ? data.types[0].type.name : data.type
    // this.type2 = data.types[1] ? data.types[1].type.name : data.type
    // this.ability1 = data.abilities[0] ? data.abilities[0].ability.name : ''
    // this.ability2 = data.abilities[1] ? data.abilities[1].ability.name : ''
  }




  get MyPokemonTemplate() {
    return `
      <div class="selectable rounded p-2 m-1" onclick="app.sandboxPokemonsController.setPokemon('${this.name}')">${this.name.toUpperCase()}</div>
    `
  }

  get ActiveTemplate() {
    return `
          <section class="sticky-top">
            <div class="col-12 text-center p-3">
              <h4>${this.name[0].toUpperCase() + this.name.slice(1)}</h4>
              <img class="poke-img" src="${this.img}" alt=""></div>
            <div class="col-md-4 col-12 mx-1 p-2"><b>Weight</b> : ${this.weight}</div>
            <div class="col-md-4 col-12 mx-1 p-2"><b>Height</b> : ${this.height}</div>
            <div class="col-md-4 col-12 mx-1 p-2"><b>Types</b> : ${this.type}</div>
            <div class="col-12 text-center"><button class="btn button-red text-center" onclick="app.sandboxPokemonsController.catchPokemon()">Catch Pokemon</button></div>
          </section>
    `
  }

  static PokeDexTemplate(pokemon) {
    return `
  <div class="selectable rounded p-2 m-1 bg-dark" onclick="app.pokemonsController.selectPokemon('${pokemon.name}')">${pokemon.name.toUpperCase()}</div>
  `
  }



}