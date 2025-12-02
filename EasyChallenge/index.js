function exerciseOfTheDay(){
    const message = "Today's exercise is ";

    return function (NameofExercise){
        return `${message} : ${NameofExercise}`;
    };
}
 const exercise = exerciseOfTheDay();

 const resultElement =document.getElementById("resultOfExercise");

 const button = document.getElementById("exerciseButton");

 button.addEventListener("click", function (){
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    let chosenExercise;

    if (randomNumber === 1){
        chosenExercise = "Swimming";
    } else if (randomNumber === 2){
        chosenExercise = "Basketball";
    } else if (randomNumber === 3){
        chosenExercise = "Pickleball";
    } else if (randomNumber === 4){
        chosenExercise = "Archery";
    } else if (randomNumber === 5){
        chosenExercise = "Power Lifting";
    } else {
        chosenExercise = "Soccer";
    }

    const output = exercise(chosenExercise);

    console.log(output);

    resultElement.textContent = output;
 });