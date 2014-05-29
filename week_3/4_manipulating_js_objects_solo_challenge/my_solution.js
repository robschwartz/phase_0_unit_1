// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable
   the value of a JavaScript Object object with no properties.
- name a new variable “adam” and have it equal to empty curly braces
 
2. Give adam a name property with the value "Adam".
- give the name “Adam” by adding it using adam.name
 
3. Add a spouse property to terah and assign it the value of adam.
- add spouse property to terah that is equal to adam by using terah.spouse

4. Change the value of the terah weight property to 125.
-Use terah.weight to change the property to 125

5. Remove the eyeColor property from terah.
-Use delete to remove terah.eyecolor

6. Add a spouse property to adam and assign it the value of terah.
-Add object terah as adam.spouse

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties
- add the object to terah by using the terah.children method and have it eaqual to and empty 
-list using {}

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".
-create var carson that is equal to an empty hash. Then add the name "Carson" to carson. Lastly,
add the var carson to the children property of terah

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".
   -create var carter that is equal to an empty hash. Then add the name "Carter" to carson. Lastly,
add the var carter to the children property of terah

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".
    -create var colton that is equal to an empty hash. Then add the name "Colton" to carson. Lastly,
add the var colton to the children property of terah

11. Add a children property to adam and assign it the value of terah children.
- have adam.children be equal to terah.children

*/

// __________________________________________
// Write your code below.

1.  var adam = {};
2.  adam.name = “Adam”;
3.  terah.spouse = adam;
4.  terah.weight = 125;
5.  delete terah.eyeColor;
6.  adam.spouse = terah;
7.  terah.children = {};
8.  var carson = {};
    carson.name = "Carson";
    terah.children.carson = carson;
9.  var carter = {};
    carter.name = "Carter";
    terah.children.carter = carter;
10. var colton = {};
    colton.name = "Colton";
    terah.children.colton = colton;
11. adam.children = terah.children;







// __________________________________________
// Reflection: Use the reflection guidelines
// 
// This challenge was really nice transition into JS. It's the base that everything else is 
// going to be built on. It wasn't too challenging which gave me confidence in the 
// language. I had some trouble on a couple since I didn't know the exact syntax to call 
// but that was easily rectified with a quick google search. Research is one of my favorite 
// ways to learn since you get multiple "aha" moments.  

// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)