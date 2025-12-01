
const exercise = exerciseOfTheDay();
const resultElement = document.getElementById("resultOfExercise")

function exerciseOfTheDay(){
    const message = "Today's exercise is :";

    return function(NameofExercise){
        const output = `${message} ${NameofExercise}`;
    
    console.log(output);

    resultElement.textContent = output;
    };
}

console.log(exercise("Swimming"));
console.log(exercise("Basketball"));
console.log(exercise("Pickleball"));
console.log(exercise("Archery"));
console.log(exercise("Power Lifting"));
console.log(exercise("Soccer"));