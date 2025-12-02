const resultElement = document.getElementById("result")

function PII(name, ssn){
    let publicName = name;
    let _privateSSN = ssn;

    return{
        getName(){
            return publicName;
        }
    };
}

const patient2 = PII("Angel", "123-45-6789");

console.log(patient2.name);
console.log(patient2._ssn);
console.log(patient2.getName());

resultElement.textContent = "Name: " + patient2.getName();

//resultElement.textContent = "Name: " + patient2.getName() + patient2._ssn;