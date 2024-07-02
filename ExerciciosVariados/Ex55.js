//Make a function that receive age, and return what they drink.
function peopleWithAgeDrink(age) {
    return age < 14 ? 'drink toddy' :
         age < 18 ? 'drink coke' :
         age < 21 ? 'drink beer' :
         'drink whisky';
  };

  console.log(peopleWithAgeDrink(53))