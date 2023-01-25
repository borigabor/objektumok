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


/*
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

*/

/// Prototípus metódusok
/*
const Person = function(name) {
    this.name = name;
} 

Person.prototype.introduce = function() {
    console.log("Hello a nevem " + this.name);
}

const berry = new Person("Berry").introduce();


const CreateProduct = function(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.currency = "€";
}

 CreateProduct.prototype.print = function() {
    console.log(`${this.name} is ${this.description} and costs ${this.price}${this.currency}`);
 }

 const product =  new CreateProduct("DisCatcher Discgolf Target","a chain grid that catches fast ans slow putts, heavy and light discs like no other one target", 399);

 product.print();*/
/*
 const Person = function(name) {
    this.name = name;
    this.intoduce = function() {
        console.log(`Hi, I'm ${this.name}`);
    };
 };

 const Discgolfer = function(name, disc, score) {
    Person.call(this, name);
    this.favouriteDisc = disc;
    this.highScore = score;
 }

 Discgolfer.prototype = Object.create(Person.prototype);

 Object.defineProperty(Discgolfer.prototype, 'constructor', {
    value: Discgolfer,
    enumerable: false,
    writable: true
 });

 Discgolfer.prototype.brag = function() {
    console.log("I'm a discgolfer and i can throw " + this.highScore + " with my " + this.favouriteDisc);
 }

 const henry = new Discgolfer("Henry", "Start Destroyer", 500);
 henry.intoduce();

 henry.brag();
 */
/*
 const CreateProduct = function(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.currency = "€";
 }

 CreateProduct.prototype.print = function() {
    console.log(`${this.name} is ${this.description} and costs ${this.price}${this.currency}`);
 }

 const berry = new CreateProduct("Discatcher Discgolf Target", "a chain grid that catches fast and slow putts, heavy and light discs like no other target", 399);

 berry.print();

  function SaleProduct(name, description, price, discountAmount) {
    CreateProduct.call(this, name, description, price);
    this.discountAmount = discountAmount;
 }

 Object.defineProperty(SaleProduct.prototype, 'constructor', {
    value: CreateProduct,
    enumerable: false,
    writable: true
 });

 SaleProduct.prototype.salePrice = function() {
     return this.price * (1 - this.discountAmount / 100);
 }

SaleProduct.prototype.print = function () {
  console.log(this.name + " is " + this.description + " and costs a discounted " + this.salePrice() + this.currency);
}

const saleCatcher = new SaleProduct("Star Destroyer Disc", "the first Speed 12 driver and is one of the primary discs used by many professional disc golfers", 17.99, 10);
saleCatcher.print();
*/

/*
class Person {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        console.log("Hi, I'm " + this.name);
    }
}

const berry = new Person("Berry");
berry.introduce();

class Discgolfer extends Person {
    constructor(name, disc, score) {
        super(name);
        this.favouriteDisc = disc;
        this.highScore = score;
    }
    brag() {
        console.log("I'm a discgolfer and i can throw " + this.highScore + " with my " +this.favouriteDisc);
    }
}

const henry = new Discgolfer("Henry", "Start Destroyer", 500);
henry.introduce();
henry.brag();
*/

class CreateProduct {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.currency = "€";
    }

    print() {
        console.log(`${this.name} is ${this.description} and costs ${this.price}${this.currency}`);
    }
}

const product = new CreateProduct("DisCatcher Discgolf Target", "a chain grid that catches fast and slow putts, heavy and light discs like no other target", 500);


product.print();

class SaleProduct extends CreateProduct {
    constructor(name, description, price, discount) {
        super(name, description, price);
        this.discountAmount = discount;
    }

    salePrice() {
        return this.price * (1 - this.discountAmount / 100);
    }
}

const saleCatcher = new SaleProduct("Star Destroyer Disc", "the first Speed 12 driver and is one of the primary discs used by many professional disc golfers", 17.99, 10);

saleCatcher.print();

// objektum létrehozás
/*
var odon = {  //ez az obkejtum létrehozási forma az objektum literál
    nev: 'Ödön',
    szuletesiEv: 1978,
    foglalkozas: 'grafikus'
}; 
*/

/*var Szemely = function(nev, szuletesiEv, foglalkozas) {
    this.nev = nev;
    this.szuletesiEv = szuletesiEv;
    this.foglalkozas = foglalkozas;
};

Szemely.prototype.korSzamitas = function() {
    console.log(2021 - this.szuletesiEv);
}

Szemely.prototype.teszt = 'teszt';

var odon = new Szemely('ödön', 1978, 'grafikus') //Ezt úgy hivjúk hogy pédányosítás Jelöljük hogy egy uj személy tipusu objektumot akarok létrehozni

odon.korSzamitas();

var erzsi = new Szemely('Erzsi', 1950, 'nyugdjias');

erzsi.korSzamitas();

console.log(Szemely);
console.log(odon);
console.log(odon.teszt);*/

// object.create

/*var SzemelyProto = {
    korSzamitas: function() {
        console.log(2021 - this.szuletesiEv);
    }
};

var odon = Object.create(SzemelyProto);
odon.nev = 'Ödön';
odon.szuletesiEv = 1960;
odon.foglalkozas = 'pék';

var kati = Object.create(SzemelyProto, {
    nev: { value: 'Kati'},
    szuletesiEv: { value: 1990},
    foglalkozas: { value: 'kozmatikus'}
});*/