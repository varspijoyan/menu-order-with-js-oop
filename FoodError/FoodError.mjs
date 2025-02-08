export default class FoodError extends Error {
    constructor(message) {
        super(message);
        this.name = "FoodError";
    }
}