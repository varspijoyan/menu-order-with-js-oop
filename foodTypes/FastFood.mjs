import Food from "../Food.mjs";

class ChickenShawarma extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = " No ingredients for chicken shawarma";
    }
}

class PorkShawarma extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "No ingredients for pork shawarma";
    }
}

class BeefShawarma extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "No ingredients for beef shawarma";
    }
}

class ChickenBurger extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "No ingredients for chicken burger";
    }
}

class ChickenGyros extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "No ingredients for chicken gyros";
    }
}

export {ChickenShawarma, PorkShawarma, BeefShawarma, ChickenBurger, ChickenGyros};