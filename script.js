// The Pizza Oven

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional", ["provolone"], ["pepperoni", "sausage"]);
console.log(p1);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);
var p3 = pizzaOven("Flat Bread", "Pesto", ["Gorgonzola"], ["Ham", "Pineapple"]);
console.log(p3);
var p4 = pizzaOven("Cheese Crust", "Alfredo Sauce", ["Matured Cheddar"], ["Chicken thigh", "Mushrooms", "cherry tomatoes"]);
console.log(p4);


function randomPizza() {
    var pizza = {};
    var crustType = ["deep dish", "hand tossed", "Flat Bread", "Cheese Crust"];
    var sauceType = ["traditional", "marinara", "Pesto", "Alfredo Sauce"];
    var cheeses = ["provolone", "mozzarella", "feta", "Gorgonzola", "Matured Cheddar"];
    var toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "Ham", "Pineapple", "Chicken thigh", "cherry tomatoes"];

    pizza.crustType = crustType[Math.floor(Math.random() * crustType.length)];
    pizza.sauceType = sauceType[Math.floor(Math.random() * sauceType.length)];
    pizza.cheeses = cheeses[Math.floor(Math.random() * cheeses.length)];
    pizza.toppings = toppings[Math.floor(Math.random() * toppings.length)];
    pizza.toppings2 = toppings[Math.floor(Math.random() * toppings.length)];
    return pizza;
}
console.log(randomPizza());



