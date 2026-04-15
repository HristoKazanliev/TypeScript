interface Town {
    town: string;
    latitude: number;
    longitude: number;
}

function createTowns(arrInput: string[]): void{
    const towns: Town[] = [];

    for (const townInfo of arrInput) {

        const [town, latitude, longitude] = townInfo.split(' | ');

        //toFixed(2) returns a string      
        //+ Unary plus operator
        towns.push({
            town,
            latitude: Number(parseFloat(latitude).toFixed(2)),
            longitude: Number(parseFloat(longitude).toFixed(2)),
        });
    }     

    console.log(towns);
}

createTowns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);

createTowns(['Plovdiv | 136.45 | 812.575']);