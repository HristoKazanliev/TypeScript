type CalorieObject = {
    [key: string]: number;
}

function getCalories(arrInput: string[]) : void {
    const foodCalories: CalorieObject = {};

    for (let index = 0; index < arrInput.length; index += 2) {
        let foodName = arrInput[index];
        let calories = Number(arrInput[index + 1]);
        
        foodCalories[foodName] = calories;
    }

    console.log(foodCalories);
}

getCalories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
getCalories(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
