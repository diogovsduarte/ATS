const fs = require('fs');
const rwc = require('random-weighted-choice');

let carType = [
    { weight: 7.5, id: "Combustao"},
    { weight: 2.5, id: "Eletrico"},
    { weight: 5, id: "Hibrido"},
];

// De acordo com
// https://www.statista.com/statistics/264031/top-selling-car-brands-in-europe-by-number-of-new-registrations/
let carBrands = [
    {weight: 14.4, id: "Volkswagen"},
    {weight: 8, id: "Renault"},
    {weight: 8, id: "Peugeot"},
    {weight: 7.6, id: "Mercedes"},
    {weight: 7.6, id: "Ford"},
    {weight: 6.8, id: "BMW"},
    {weight: 6.1, id: "Toyota"},
    {weight: 5.9, id: "Skoda"},
    {weight: 5.1, id: "Citroen"},
    {weight: 4.9, id: "Audi"},
    {weight: 4.7, id: "Fiat"},
    {weight: 4.6, id: "Opel"},
    {weight: 4.5, id: "Hyundai"},
    {weight: 4.1, id: "Kia"},
    {weight: 4.0, id: "Dacia"},
    {weight: 3.6, id: "Seat"}
];

class Carro {
    constructor(combustao, marca, matricula, nif, cp, autonomia) {
        this.combustao = combustao;
        this.marca = marca;
        this.matricula = matricula;
        this.nif = nif;
        this.cp = cp;
        this.autonomia = autonomia;
    }
    override() {
        return `NovoCarro:${this.combustao}, ${this.marca}, ${this.matricula}, ${this.nif}, ${this.cp}, ${this.autonomia}`;
    }
}

const genNumberRange = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateNif = () => {
    let nif = "";
    let valid = [
        [1, 2, 3, 5, 6, 8],
        [45, 70, 74, 75, 71, 72, 77, 78, 79, 90, 91, 98, 99]
    ];
    let OneOrTwo = genNumberRange(1, 0);
    if(OneOrTwo === 0) {
        nif += valid[OneOrTwo][genNumberRange(0, valid[OneOrTwo].length - 1)];
        nif += Math.floor(Math.random() * 100000000)
    } else {
        nif += valid[OneOrTwo][genNumberRange(0, valid[OneOrTwo].length - 1)];
        nif += Math.floor(Math.random() * 10000000)
    }
    return nif;
};

// Function Generators
const generateLicense = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var license = "";

    for (var i = 0; i < 2; i++) {
        license += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    license += "-";

    for (var i = 0; i < 4; i++) {
        license += Math.floor(Math.random() * (9 + 1));
        if (i === 1) license += "-";
    }
    return license;
};

// Properties
let carros = [];

// e dado em euros e um valor entre 0.1 e 2 euros.
for(let i = 0 ; i < 100 ; i++) {
    carros.push(new Carro(
        rwc(carType),
        rwc(carBrands),
        generateLicense(),
        generateNif(),
        Math.round((Math.random() * (1 - 0.1 + 1) + 0.1) * 100) / 100,
        Math.floor(Math.random() * (800 + 1))
    ));
}

let carroStr = "";

carros.forEach(element => {
   carroStr += element.override() + "\n"
});

fs.writeFile("carros.txt", carroStr, err => {
    if(err) throw err;
    console.log("Gerado!");
});