class sandwichBuilder {
    bread = 'white';
    sauce = 'ketchup';
    tomato = true;
    type = 'meat';

    setBread(breadType) {
        this.bread = breadType;
        return this;
    }

    setSauce(sauceType) {
        this.sauce = sauceType;
        return this;
    }

    setTomato(status) {
        this.tomato = status;
        return this;
    }

    setType(type) {
        this.type = type;
        return this;
    }

    showSandwich() {
        console.log(`${this.type} sandwich ${this.tomato ? 'with' : 'without'} tomato and ${this.sauce} sauce in ${this.bread} bread`)
    }
}

const mySandwich = new sandwichBuilder()
    .setBread('brown')
    .setSauce('ketchup')
    .setTomato(true)
    .setType('meat')

console.log(mySandwich)
mySandwich.showSandwich()
