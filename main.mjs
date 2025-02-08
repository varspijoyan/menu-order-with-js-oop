import Order from "./Order/Order.mjs";
import FoodError from "./FoodError/FoodError.mjs";
import Menu from "./Menu/Menu.mjs";

function chooseCategory(category) {
    let choice = prompt(`Choose what type of ${category} you want to order`);
    if(choice) {
        return choice;
    }
} 

function chooseCategoryTypeToAdd(category, categoryType) {
    let menu = food[category]; // ex. food["pizza"]
    let menuType = menu[categoryType]; // ex. food["pizza"]["margaritta pizza"]
    let amount = +prompt(`Choose how many of the ${categoryType} you want to order`);

    if(!menu) {
        alert(`We don't have ${menu} in our menu`);
        return;
    }

    if(!Number.isInteger(amount) || amount <= 0) {
        throw new FoodError("Invalid amount");
    }

    if(menuType) {
        order.addToTheOrder(menuType, amount);
    } else {
        alert(`We don't have ${categoryType} in our menu to add`);
    }
}

function makeAnOrder(category) {
    let type = chooseCategory(category);
    if(type) {
        chooseCategoryTypeToAdd(category, type);
    }
}

function chooseCategoryTypeToRemove(category, categoryType) {
    let menu = food[category];
    let menuType = menu[categoryType];
    let amount = +prompt(`Choose how many of the $${categoryType} you want to remove`);

    if(!menu) {
        alert(`We don't have ${menu} in our menu`);
        return;
    }

    
    if(!Number.isInteger(amount) || amount <= 0) {
        throw new FoodError("Invalid amount");
    }

    if(menuType) {
        order.removeFromTheOrder(menuType, amount);
    } else {
        alert(`We don't have ${categoryType} in our menu to remove`)
    }
}

function remove(category) {
    let type = chooseCategory(category);
    if(type) {
       chooseCategoryTypeToRemove(category, type);
    }
}

function showOrders() {
    if(order.orders.length === 0) {
        console.log("No order added");
    } else {
        const orderedItems = order.orders.map(item => `${item.amount} ${item.food}`).join(', ');
        console.log("Order:", orderedItems);
        order.getTotalPrice();
    }
}

const menu = new Menu();
const order = new Order();

const food = {
    "drink": {
        "mojito": menu.drinkType.mojito,
        "milk Shake": menu.drinkType.milkShake,
        "coca Cola": menu.drinkType.cocaCola,
        "fanta": menu.drinkType.fanta,
        "sprite": menu.drinkType.sprite 
    },
    "fast food": {
        "chicken shawarma": menu.fastFoodType.chickenShawarma,
        "pork shawarma": menu.fastFoodType.porkShawarma,
        "beef shawarma": menu.fastFoodType.beefShawarma,
        "chicken burger": menu.fastFoodType.chickenBurger,
        "chicken gyros": menu.fastFoodType.chickenGyros
    },
    "pasta": {
        "lasagne": menu.pastaType.lasagne,
        "shrimp rizotto": menu.pastaType.shrimpRizotto,
        "carbonara": menu.pastaType.carbonara,
        "fettucine": menu.pastaType.fettucine,
        "tagliatelle": menu.pastaType.tagliatelle
    },
    "pizza": {
        "margaritta pizza": menu.pizzaType.margarittaPizza,
        "pepperoni pizza": menu.pizzaType.pepperoniPizza,
        "bacon pizza": menu.pizzaType.baconPizza,
        "vegan pizza": menu.pizzaType.veganPizza,
        "new york pizza": menu.pizzaType.newYorkPizza,
        "perfetto pizza": menu.pizzaType.perfettoPizza
    },
    "salad": {
        "caesar salad": menu.saladType.caesarSalad,
        "shrimp caesar salad": menu.saladType.shrimpCaesarSalad,
        "salmon caesar salad": menu.saladType.salmonCaesarSalad,
        "canadian salad": menu.saladType.canadianSalad,
        "shrimp salad": menu.saladType.shrimpSalad,
        "aphrodite salad": menu.saladType.aphroditeSalad
    },
    "sushi": {
        "kappa maki sushi": menu.sushiType.kappaMakiSushi,
        "ebi cheese sushi": menu.sushiType.ebiCheeseSushi,
        "unagi maki sushi": menu.sushiType.unagiMakiSushi,
        "avocado sushi": menu.sushiType.avocadoSushi,
        "tuna sushi": menu.sushiType.tunaSushi
    }
};

menu.displayMenu();

try {
    let orderFood = prompt(`Make an order`);
    makeAnOrder(orderFood);
    while(true) {
        let orderAgain = confirm('Do you want to order again? press "ok" if you want to, press "cance" if you do not want to order again');
        if(orderAgain) {
            orderFood = prompt("What else do you want?...");
            makeAnOrder(orderFood);
        } else {
            let toRemove = prompt("Before finishing your order, is there a food you wanto ro remove from the order? y/n");
            if(toRemove === 'y' || toRemove === "Y") {
                let removeOrder = prompt("Choose food to remove");
                remove(removeOrder);
            } else if(toRemove === 'n' || toRemove === 'N') {
                alert("Thanks for your order");
                break;
            } else {
                alert("Invalid input");
            }
        } 
    }
    showOrders();
} catch(error) {
    console.error("An error occurred");
}
