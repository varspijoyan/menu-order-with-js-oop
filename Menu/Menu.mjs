import {Mojito, MilkShake, CocaCola, Fanta, Sprite} from "../foodTypes/Drinks.mjs"
import {ChickenShawarma, PorkShawarma, BeefShawarma, ChickenBurger, ChickenGyros} from "../foodTypes/FastFood.mjs"
import {Lasagne, ShrimpRizotto, Carbonara, Fettucine, Tagliatelle} from "../foodTypes/Pasta.mjs"
import {MargarittaPizza, PepperoniPizza, BaconPizza, VeganPizza, NewYorkPizza, PerfettoPizza} from "../foodTypes/Pizza.mjs"
import {CaesarSalad, SalmonCaesarSalad, ShrimpCaesarSalad, CanadianSalad, ShrimpSalad, AphroditeSalad} from "../foodTypes/Salads.mjs"
import {KappaMakiSushi, EbiCheeseSushi, UnagiMakiSushi, AvocadoSushi, TunaSushi} from "../foodTypes/Sushies.mjs"

export default class Menu {
    constructor() {
        this.drinks = [];
        this.fastFoods = [];
        this.pastas = [];
        this.pizzas = [];
        this.salads = [];
        this.sushies = [];
    }

    drinkType = {
        mojito: new Mojito("Mojito", 1.82),
        milkShake: new MilkShake("Milk Shake", 1.95),
        cocaCola: new CocaCola("Coca Cola", 1.04),
        fanta: new Fanta("Fanta", 1.04),
        sprite: new Sprite("Sprite", 1.04)
    };

    fastFoodType = {
        chickenShawarma: new ChickenShawarma("Chicken Shawarma", 2.21),
        porkShawarma: new PorkShawarma("Pork Shawarma", 2.47),
        beefShawarma: new BeefShawarma("Beef Shawarma", 2.21),
        chickenBurger: new ChickenBurger("Chicken Burger", 1.82),
        chickenGyros: new ChickenGyros("Chicken Gyros", 2.34)
    };

    pastaType = {
        lasagne: new Lasagne("Lasagne", 2.60),
        shrimpRizotto: new ShrimpRizotto("Shrimp Rizotto", 2.86),
        carbonara: new Carbonara("Carbonara", 3.35),
        fettucine: new Fettucine("Fettucine", 3.25),
        tagliatelle: new Tagliatelle("Tagliatelle", 3.25)
    };

    pizzaType = {
        margarittaPizza: new MargarittaPizza("Margaritta Pizza", 4.68),
        pepperoniPizza: new PepperoniPizza("Pepperoni Pizza", 5.72),
        baconPizza: new BaconPizza("Bacon Pizza", 6.50),
        veganPizza: new VeganPizza("Vegan Pizza", 4.68),
        newYorkPizza: new NewYorkPizza("New York Pizza", 5.46),
        perfettoPizza: new PerfettoPizza("Perfetto Pizza", 5.46)
    };

    saladType = {
        caesarSalad: new CaesarSalad("Caesar Salad", 2.86),
        shrimpCaesarSalad: new ShrimpCaesarSalad("Shrimp Caesar Salad", 3.77),
        salmonCaesarSalad: new SalmonCaesarSalad("Salmon Caesar Salad", 6.24),
        canadianSalad: new CanadianSalad("Canadian Salad", 1.95),
        shrimpSalad: new ShrimpSalad("Shrimp Salad", 1.43),
        aphroditeSalad: new AphroditeSalad("Aphrodite Salad", 1.69)
    };

    sushiType = {
        kappaMakiSushi: new KappaMakiSushi("Kappa Maki Sushi", 2.34),
        ebiCheeseSushi: new EbiCheeseSushi("Ebi Cheese Sushi", 2.86),
        unagiMakiSushi: new UnagiMakiSushi("Unagi Maki Sushi", 4.81),
        avocadoSushi: new AvocadoSushi("Avocado Sushi", 2.99),
        tunaSushi: new TunaSushi("Tuna Sushi", 3.77)
    };

    getDrinks() {
        this.drinks.push(this.drinkType.mojito);
        this.drinks.push(this.drinkType.milkShake);
        this.drinks.push(this.drinkType.cocaCola);
        this.drinks.push(this.drinkType.fanta);
        this.drinks.push(this.drinkType.sprite);

        this.drinks.forEach((food, index) => {
            console.log(`
                ${index+1}. ${food.name} - $${food.price}
                    • ${food.ingredients}
            `)
        });
    }

    getFastFoods() {
        this.fastFoods.push(this.fastFoodType.chickenShawarma);
        this.fastFoods.push(this.fastFoodType.porkShawarma);
        this.fastFoods.push(this.fastFoodType.beefShawarma);
        this.fastFoods.push(this.fastFoodType.chickenBurger);
        this.fastFoods.push(this.fastFoodType.chickenGyros);

        this.fastFoods.forEach((food, index) => {
            console.log(`
                ${index+1}. ${food.name} - $${food.price}
                    • ${food.ingredients}  
            `)
        });
    }

    getPastas() {
        this.pastas.push(this.pastaType.lasagne);
        this.pastas.push(this.pastaType.shrimpRizotto);
        this.pastas.push(this.pastaType.carbonara);
        this.pastas.push(this.pastaType.fettucine);
        this.pastas.push(this.pastaType.tagliatelle);

        this.pastas.forEach((food, index) => {
            console.log(`
                ${index+1}. ${food.name} - $${food.price}
                    • ${food.ingredients}
            `)
        });
    }

    getPizzas() {
        this.pizzas.push(this.pizzaType.margarittaPizza);
        this.pizzas.push(this.pizzaType.pepperoniPizza);
        this.pizzas.push(this.pizzaType.baconPizza);
        this.pizzas.push(this.pizzaType.veganPizza);
        this.pizzas.push(this.pizzaType.newYorkPizza);
        this.pizzas.push(this.pizzaType.perfettoPizza);

        this.pizzas.forEach((food, index) => {
            console.log(`
                ${index+1}. ${food.name} - $${food.price}
                    • ${food.ingredients}
            `)
        });
    }

    getSalads() {
        this.salads.push(this.saladType.caesarSalad);
        this.salads.push(this.saladType.shrimpCaesarSalad);
        this.salads.push(this.saladType.salmonCaesarSalad);
        this.salads.push(this.saladType.canadianSalad);
        this.salads.push(this.saladType.shrimpSalad);
        this.salads.push(this.saladType.aphroditeSalad);

        this.salads.forEach((food, index) => {
            console.log(`
                ${index+1}. ${food.name} - $${food.price}
                    • ${food.ingredients}
            `)
        });
    }

    getSushies() {
        this.sushies.push(this.sushiType.kappaMakiSushi);
        this.sushies.push(this.sushiType.ebiCheeseSushi);
        this.sushies.push(this.sushiType.unagiMakiSushi);
        this.sushies.push(this.sushiType.avocadoSushi);
        this.sushies.push(this.sushiType.tunaSushi);

        this.sushies.forEach((food, index) => {
            console.log(`
                ${index+1}. ${food.name} - $${food.price}
                    • ${food.ingredients}    
            `)
        });
    }

    displayMenu() {
        this.getDrinks();
        this.getFastFoods();
        this.getPastas();
        this.getPizzas();
        this.getSalads();
        this.getSushies();
    }
}