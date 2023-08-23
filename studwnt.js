//What is an Object?
//Object is something which possess 
// 1. Properties
// 2. Functions
// Notation ->   {} Curly Bracktes
let teacher = {
    name: "Zeeshan",
    experience: "10",
    teach() {
        console.log("The Responsiblity of a Good Teacher is to Deliver the knowledge not teaching!");
    },
    check(marks, name) {
        console.log(`Your Name ${name} & Marks are : ${marks}`);
    }
};
//To Access/Reterive the values of an object
let objName = teacher.name; //Storing Object property in a variable
let objExpr = teacher.experience; //Storing  Object property in a variable
//console.log(`Name:${objName}, Experience: ${objExpr}`);  //Printing the value of object property through variable
//Directly accessing the values of properties of object teacher
//console.log(`Name:${teacher.name}, Experience: ${teacher.experience}`);  
//To Set/Change the value of object's property
teacher.name = "Zia Ullah Khan";
teacher.experience = "50";
//console.log(`Name:${teacher.name}, Experience: ${teacher.experience}`);              
objName = "Sadiq";
objExpr = "39";
//console.log(`Name:${teacher.name}, Experience: ${teacher.experience}`);              
//Inline or Annonimous Objects
printObject({
    key: "01",
    value: "Alpha"
});
let annObj;
function printObject(obj) {
    console.log(obj);
    let hasKeyProp = obj.hasOwnProperty("key");
    let keys = Object.keys;
    annObj = obj;
}
console.log(annObj);
export {};
// printObject({
//     objName,
//     objExpr
// });
//Objects Methods/Function Invoking
// teacher.teach();
// teacher.check(10,"Sadiq");
