type Hero = {
    name: string;
    level: number;
    items?: string;
}

function createHeroes(heroesInput: string[]) {
    let heroes: Hero[] = [];
    
    for (const heroLine of heroesInput) {
        const heroInfo = heroLine.split(" / ");

        const hero: Hero = {
            name: heroInfo[0],
            level: Number(heroInfo[1]),
            items: heroInfo[2],
        };

        heroes.push(hero);
    }

    const sortedHeroes = heroes.sort((a,b) => a.level - b.level);

    // sortedHeroes.forEach(hero => {
    //     console.log(`Hero: ${hero.name}`);
    //     console.log(`level => ${hero.level}`);
    //     console.log(`items => ${hero.items ? hero.items : "None"}`);
    // });

    sortedHeroes.forEach((hero) => 
        console.log(`Hero: ${hero.name}\n level => ${hero.level}\n Items => ${hero.items}`)
    );
}

createHeroes([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
]);

createHeroes([
'Batman / 2 / Banana, Gun',
'Superman / 18 / Sword',
'Poppy / 28 / Sentinel, Antara'
]
);
