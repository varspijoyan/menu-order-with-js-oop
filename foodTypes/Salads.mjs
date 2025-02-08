import Food from "../Food.mjs";

class CaesarSalad extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "chicken breast, parmesan cheese, lettuce, cheese, tomatoes";
    }
}

class ShrimpCaesarSalad extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "shrimp, parmesan, lettuce, cheese, tomatoes";
    }
}

class SalmonCaesarSalad extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "fish salmon, parmesan cheese, lettuce, cheese, tomatoes";
    }
}

class CanadianSalad extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "cheese, gouda, mar. corn, ham, millet";
    }
}

class ShrimpSalad extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "cabbage, crayfish. sticks, marinade, corn";
    }
}

class AphroditeSalad extends Food {
    constructor(name, price) {
        super(name, price);
        super.ingredients = "cooked chicken breast, carrots, mayonnaise, greens";
    }
}

export {CaesarSalad, SalmonCaesarSalad, ShrimpCaesarSalad, CanadianSalad, ShrimpSalad, AphroditeSalad};