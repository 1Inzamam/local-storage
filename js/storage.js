const handleAddToStorage = () =>{
   const number = 26;
   localStorage.setItem("age",number);

   const person = {
    name: "Karim",
    age: 36,
    friend: ["Moris"]
   }

   const convertToString = JSON.stringify(person);
   localStorage.setItem("Karim", convertToString);
   

}

const stringObj = localStorage.getItem("Karim");
const backToObj = JSON.parse(stringObj);
console.log(backToObj);