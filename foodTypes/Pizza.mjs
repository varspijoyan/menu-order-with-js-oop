import Food from "../Food.mjs";

class MargarittaPizza extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "Red sauce, cheese mozzarella";
    }
}

class PepperoniPizza extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "Red sauce, mozzarella, pepperoni, oregano";
    }
}

class BaconPizza extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "White sauce, mozzarella, bacon, oregano, mushrooms";
    }
}

class VeganPizza extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "Red sauce, mozzarella, onions, greens, b. pepper, mushrooms, tomatoes";
    }
}

class NewYorkPizza extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "Red sauce, mozzarella, servlet, smoked sausage, b. pepper, oregano, mushrooms";
    }
}

class PerfettoPizza extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "Red sauce, mozzarella, bacon, ham, oregano, mushrooms";
    }
}

export {MargarittaPizza, PepperoniPizza, BaconPizza, VeganPizza, NewYorkPizza, PerfettoPizza};