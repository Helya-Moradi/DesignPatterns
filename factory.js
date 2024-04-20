class creator {
    createVehicle(type,...args) {
        let vehicle;
        switch (type) {
            case 'car':
                vehicle = new car(...args);
                break;
            case 'plane':
                vehicle = new plane(...args);
                break;
            case 'boat':
                vehicle = new boat(...args);
                break;
        }

        vehicle.type = type;
        return vehicle;
    }
}

class vehicle {
    name;
    price;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    showPrice() {
        console.log(`The price is ${this.price}$`)
    }
}

class car extends vehicle {
    constructor(...args) {
        super(...args);
    }

    drive() {
        console.log('driving');
    }
}

class boat extends vehicle {
    constructor(...args) {
        super(...args);
    }

    move() {
        console.log('moving');
    }
}

class plane extends vehicle {
    constructor(...args) {
        super(...args);
    }

    fly() {
        console.log('flying');
    }
}

const create1 = new creator();

const car1 = create1.createVehicle('car','pride',2000);

console.log(car1.type)
console.log(car1.name);
car1.showPrice();
car1.drive();

const plane1 = create1.createVehicle('plane','jet',50000);

console.log(plane1.type)
console.log(plane1.name);
plane1.showPrice();
plane1.fly();

const boat1 = create1.createVehicle('boat','Imagination',655555);

console.log(boat1.type)
console.log(boat1.name);
boat1.showPrice();
boat1.move();