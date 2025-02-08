import Food from "../Food.mjs";

class Mojito extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "Classic, orange-kiwi, strawberry, apple, kiwi";
    }
}

class MilkShake extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "Strawberries, vanilla, chocolate, kiwi, banana, strawberry-banana, banana-orange, watermelon";
    }
}

class CocaCola extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "No ingredients for Coca Cola";
    }
}

class Fanta extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "No ingredients for Fanta";
    }
}

class Sprite extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "No ingredients for Sprite";
    }
}

export {Mojito, MilkShake, CocaCola, Fanta, Sprite};