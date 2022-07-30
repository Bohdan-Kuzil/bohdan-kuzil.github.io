let person={
    firstName:"Ivan",
    secondName:"Ivanov",
     showData () {
    console.log(this.firstName,this.secondName);
} 
}
console.log(person);
person.showData();
let newPerson=Object.assign({},person)

    newPerson.firstName="Petro",
    newPerson.secondName="Petriv"
newPerson.showData();