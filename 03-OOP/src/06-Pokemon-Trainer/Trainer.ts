import { Pokemon } from "./Pokemon.ts";

export class Trainer {
    name: string;
    badges: number;
    pokemons: Pokemon[];

    constructor(name: string) {
        this.name = name;
        this.badges = 0;
        this.pokemons = [];
    }

    addPokemon(pokemon: Pokemon): void {
        this.pokemons.push(pokemon);
    }

    addBadge(): void {
        this.badges++;
    }
}