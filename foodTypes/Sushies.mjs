import Food from "../Food.mjs";

class KappaMakiSushi extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "Cucumber, sesame";
    }
}

class EbiCheeseSushi extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "Shrimp, cheese";
    }
}

class UnagiMakiSushi extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "Eel, cucumber, sesame";
    }
}

class AvocadoSushi extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "Avocado";
    }
}

class TunaSushi extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "Tuna";
    }
}

export {KappaMakiSushi, EbiCheeseSushi, UnagiMakiSushi, AvocadoSushi, TunaSushi}