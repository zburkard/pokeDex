import { PokemonsController } from "./Controllers/PokemonsController.js";
import { SandboxPokemonsController } from "./Controllers/SandboxPokemonsController.js";

class App {

  pokemonsController = new PokemonsController();
  sandboxPokemonsController = new SandboxPokemonsController()
}

window["app"] = new App();
