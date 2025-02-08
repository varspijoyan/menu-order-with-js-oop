import Food from "../Food.mjs";

class Lasagne extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "Pork, beef, tomatoes, carrots, bell pepper";
    }
}

class ShrimpRizotto extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "Shrimp, rice, parmesan";
    }
}

class Carbonara extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "Tomatoes cherry, becon, parmesan";
    }
}

class Fettucine extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "chicken, mushrooms, parmesan";
    }
}

class Tagliatelle extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "Smoked Chicken breast, mushrooms, parmesan";
    }
}

export {Lasagne, ShrimpRizotto, Carbonara, Fettucine, Tagliatelle};