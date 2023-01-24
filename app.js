console.log("Hello World");

/*const personFactory = function(name) {
    return {
        name: name,
        introduce: function() {
            console.log("Hello a nevem " + this.name);
        },
    };
};

personFactory("Berry").introduce();
personFactory("Henry").introduce();
personFactory("Lenina").introduce();

*/
////GYártó függvény
/*
const createProduct = function(nameObj, descriptionObj, priceObj) {
    return {
        name: nameObj,
        description: descriptionObj,
        price: priceObj,
        print: function() {
            console.log(`${this.name} is ${this.description} and costs ${this.price}`);
        },
    };
};

const disCatcher = createProduct("DisCatcher Discgolf Target", "a chain grid that catches fast and slow putts, heavy and light discs like no other target", 399).print();
*/

// Kosnrtuktor függvények

const Person = function(name) {
    this.name = name;
    this.introduce = function() {
        console.log("Hello a nevem " +this.name);
    };
};

const berry = new Person("Berry");
berry.introduce();

const CreateProduct = function(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.currency = "€";
    this.print = function() {
        console.log(`${this.name} is ${this.description} and cost ${this.price}${this.currency}`);
    };
};

const product = new CreateProduct("DisCatcher Discgolf Target", "a chain grid that catches fast and slow putts, heavy and light discs like no other target", 399);

product.print();