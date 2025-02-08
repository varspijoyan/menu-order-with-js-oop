export default class Order {
    constructor() {
        this.orders = [];
        this.quantity = 0;
        this.totalPrice = 0;
    }

    increment(amount) {
        this.quantity += amount;
    }

    decrement(amount) {
        this.quantity -= amount;
    }

    addToTheOrder(food, amount) {
        let isExist = this.orders.find(foodName => food.name === foodName);
        if(isExist) {
            this.quantity += amount;
            console.log(`Added ${amount} to the existing ${isExist.name} food`);
        }
        this.increment(amount);
        this.orders.push({
            food: food.name,
            price: food.price,
            amount: amount
        });
        console.log(`Added ${amount} ${food.name} in the order`);
    }

    removeFromTheOrder(food, amount) {
        let findFood = this.orders.findIndex(foodName => food.name === foodName);
        if(findFood > -1) {
            let item = this.orders[findFood];
            if(amount > item.quantity) {
                console.log(`The amount you gave is bigger than the actual quantity, you cannot remove`);
            } else {
                this.decrement(amount);
                this.quantity -= amount;
                console.log(`You removed ${amount} of ${food.name}`);
            }

            if(item.quantity === 0) {
                this.orders.splice(findFood, 1);
            }
        } else {
            console.log(`${food.name} does not exits in the order to remove`);
        }
    }

    getTotalPrice() {
        this.totalPrice = this.orders.reduce((acc, item) => {
            return acc + (item.price * item.quantity)
        }, 0);
        console.log(`Total price: ${this.totalPrice.toFixed(2)}`);
    }
} 