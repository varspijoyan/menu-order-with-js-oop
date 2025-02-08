export default class Order {
    constructor() {
        this.orders = [];
        this.totalPrice = 0;
    }

    addToTheOrder(food, amount) {
        let isExist = this.orders.find(item => item.food === food.name);
        if (isExist) {
            isExist.amount += amount;
            console.log(`Added ${amount} more to the existing ${isExist.food}`);
            return;
        }

        this.orders.push({
            food: food.name,
            price: food.price,
            amount: amount
        });

        console.log(`Added ${amount} ${food.name} to the order`);
    }

    removeFromTheOrder(food, amount) {
        let findFood = this.orders.findIndex(item => item.food === food.name);
        if (findFood > -1) {
            let item = this.orders[findFood];

            if (amount > item.amount) {
                console.log(`The amount you gave is bigger than the actual quantity, you cannot remove`);
                return;
            }

            item.amount -= amount;
            console.log(`You removed ${amount} of ${food.name}`);

            if (item.amount === 0) {
                this.orders.splice(findFood, 1);
            }
        } else {
            console.log(`${food.name} does not exist in the order to remove`);
        }
    }

    getTotalPrice() {
        this.totalPrice = this.orders.reduce((acc, item) => {
            return acc + (item.price * item.amount);
        }, 0);
        console.log(`Total price: ${this.totalPrice.toFixed(2)}`);
    }
}
