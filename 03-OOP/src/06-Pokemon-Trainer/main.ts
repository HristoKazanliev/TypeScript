import { Pokemon } from "./Pokemon.ts";
import { Trainer } from "./Trainer.ts";

function pokemonTournament(input: string[]): void {
    const trainers: Map<string, Trainer> = new Map();
    
    let index = 0;
    let command: string = input[index];

    while (command !== "Tournament") {
        let [trainerName, pokemonName, pokemonElement, health] = command.split(" ");
         let pokemonHealth = Number(health);

        if (!trainers.has(trainerName)) {
            trainers.set(trainerName, new Trainer(trainerName));
        } 

        const pokemon = new Pokemon(pokemonName, pokemonElement, pokemonHealth);
        trainers.get(trainerName)!.addPokemon(pokemon);

        index++;
        command = input[index];
    }

    //To skip the "Tournament" command
    index++;
    command = input[index];

    while (command !== "End") {
        const element = command;

        trainers.forEach((trainer) => {
            trainer.pokemons.forEach((pokemon) => {
                if (pokemon.element === element) {
                    trainer.addBadge();
                } else {
                    pokemon.loseHealth();
                }
            })});

        index++;
        command = input[index];    
    }

    // Remove pokemons with health < 0
    for (const trainer of trainers.values()) {
        trainer.pokemons = trainer.pokemons.filter((pokemon) => pokemon.health >= 0);
    }

    // Sort by badges descending
    const sortedTrainers = Array.from(trainers.values()).sort((a, b) => b.badges - a.badges);

    sortedTrainers.forEach((trainer) => {
        console.log(`${trainer.name} ${trainer.badges} ${trainer.pokemons.length}`);
    });
}

pokemonTournament([
    "Peter Charizard Fire 100",
    "George Squirtle Water 38",
    "Peter Pikachu Electricity 10",
    "Tournament",
    "Fire",
    "Electricity",
    "End"
]);

console.log("----------------------");

pokemonTournament([
    "Sam Blastoise Water 18",
    "Narry Pikachu Electricity 22",
    "John Kadabra Psychic 90",
    "Tournament",
    "Fire",
    "Electricity",
    "Fire",
    "End"
]);