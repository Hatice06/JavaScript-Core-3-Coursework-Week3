const personOne = {
  name: "Popeye",
  age: 34,
  favoriteFood: "Spinach",
};

let{name, age, favoriteFood} = personOne;

function introduceYourself() {
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favorite food is ${favoriteFood}.`
  );
}

introduceYourself();
