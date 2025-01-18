// CREATING A SHOPPING LIST
let shoppingList = ["apple", "egg", "bread"];

// ARRAY APPLICATIONS
// adding two items to the list, and outputting the updated list
// use push, splice, unshift to add items
shoppingList.push(
  "orange",
  "milk",
  "potato",
  "tomato",
  "rice",
  "onion",
  "chicken",
  "butter",
  "peanut butter"
);
console.log(shoppingList);
shoppingList.splice(2, 0, "banana");
console.log(shoppingList);
shoppingList.unshift("carrot");
console.log(shoppingList);

// delete the last item from the list, and outputting the updated list
// use pop, shift, slice and splice to remove items
shoppingList.pop();
console.log(shoppingList);
shoppingList.shift();
console.log(shoppingList);
shoppingList.slice(2, 5); // slice cannot modify the original array
console.log(shoppingList);
shoppingList.splice(1, 0, "chocolate", "strawberry", "blueberry");
console.log(shoppingList);

// CONDITIONS AND LOOPS
// create a function that checks if the item number is more than 5, outputting in console that "Your shopping cart is full!"
const checkShoppingCartFull = () =>
  shoppingList.length > 5
    ? "Your shopping cart is full!"
    : "Your shopping cart can add more!";

console.log(checkShoppingCartFull()); // output the message

// use a loop to iterate over the shopping list and print each item in the console with a prefix of index
const printShoppingList = () => {
  shoppingList.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
};

printShoppingList(); // output the shopping list with index

// FUNCTION AND OBJECTS
// create a function that takes the item name as a parameter, and returns a message indicating whether the item is already in the list or not
const checkItemInList = (itemName) => {
  return shoppingList.includes(itemName)
    ? `${itemName} is already in the list!`
    : `${itemName} is not in the list.`;
};

console.log(checkItemInList("apple")); // output the message

// create an object called "item" with properties for name, quantity, and price, and methods for updating the quantity and price
const item = {
  // initialize the properties
  name: "",
  quantity: 0,
  price: 0,

  // method to set the default values for the properties
  setInitialValues(itemName, itemQuantity, itemPrice) {
    this.name = itemName;
    this.quantity = itemQuantity;
    this.price = itemPrice;
  },

  // method to update the quantity
  updateQuantity(newQuantity) {
    if (newQuantity >= 0) {
      this.quantity = newQuantity;
    } else {
      console.log("Quantity cannot be negative!");
    }
  },

  // method to update the price
  updatePrice(newPrice) {
    if (newPrice >= 0) {
      this.price = newPrice;
    } else {
      console.log("Price cannot be negative!");
    }
  },

  // method to display the item details
  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Quantity: ${this.quantity}`);
    console.log(`Price: $${this.price}`);
  },
};

item.setInitialValues("Apple", 5, 0.5);
item.displayInfo();

item.updateQuantity(10);
item.updatePrice(0.75);
item.displayInfo();
