const fs = require('fs');
const rwc = require('random-weighted-choice');
const Aluguer = require('./Aluguer');
const Classificar = require('./Classificar');
const NovoCliente = require('./NovoCliente');
const NovoProp = require('./NovoProp');
const NovoCarro = require('./NovoCarro');
const Utils = require('./utils');
const DataSample = require('./data');

console.log('Generating...');

let listNif = [],
	listMatricula = [];

// Objects for Log file
let Clientes = [];
let Carros = [];
let Classificacoes = [];
let Proprietarios = [];
let Alugueres = [];

let i = 0;

// Gerar Clientes
while (i < 5000) {
	let maleOrFemale = Utils.genNumberRange(0, 1, true);
	let nome = rwc(DataSample.nomes[maleOrFemale]);
	let sobrenome = rwc(DataSample.sobrenomes);
	let fullName = `${nome} ${sobrenome}`;
	let email = `${nome}${sobrenome}@gmail.com`;
	let morada = `${rwc(DataSample.moradas)} ${rwc(DataSample.sobrenomes)}`;
	let y = Utils.genLongitude();
	let x = Utils.genLatitude();
	let newNif = Utils.genNif();

	if (!listNif.includes(newNif)) {
		Clientes.push(new NovoCliente(fullName, newNif, email, morada, x, y));
		listNif.push(newNif);
		i++;
	}
}
console.log('Clientes Gerados...');

i = 0;

// Gerar Carros
while (i < 5000) {
	let combustao = rwc(DataSample.tipoCarro);
	let marca = rwc(DataSample.marcaCarro);
	let newMatricula = Utils.generateLicense();
	let velocidade = Utils.genNumberRange(220, 0, true);
	let precoKm = (Math.round(Utils.genNumberRange(0.1, 2, false)) * 100) / 100;
	let consumoKm = Utils.genNumberRange(1, 11, true);
	let autonomia = Utils.genNumberRange(0, 1000, true);
	let y = Utils.genLongitude();
	let x = Utils.genLatitude();
	if (!Carros.includes(newMatricula)) {
		listMatricula.push(newMatricula);
		Carros.push(
			new NovoCarro(
				combustao,
				marca,
				newMatricula,
				listNif[Utils.genNumberRange(0, listNif.length - 1, true)],
				velocidade,
				precoKm,
				consumoKm,
				autonomia,
				x,
				y
			)
		);
		i++;
	}
}
console.log('Carros gerados...');
i = 0;

// Gerar Proprietários
while (i < 10000) {
	let maleOrFemale = Utils.genNumberRange(1, 0, true);

	let nome = rwc(DataSample.nomes[maleOrFemale]);
	let sobrenome = rwc(DataSample.sobrenomes);

	let fullName = `${nome} ${sobrenome}`;
	let email = `${nome}${sobrenome}@hotmail.com`;
	let morada = `${rwc(DataSample.moradas)} ${rwc(DataSample.sobrenomes)}`;
	let newNif = Utils.genNif();

	if (!listNif.includes(newNif)) {
		listNif.push(newNif);
		Proprietarios.push(new NovoProp(fullName, newNif, email, morada));
		i++;
	}
}
console.log('Proprietários gerados...');
i = 0;

while (i < listMatricula.length) {
	Classificacoes.push(
		new Classificar(listMatricula[i], Utils.genNumberRange(0, 100, true))
	);
	i++;
}
console.log('Classificacoes Geradas...');
i = 0;

while (i < Clientes.length) {
	console.log(Clientes[i].nif);
	Alugueres.push(
		new Aluguer(
			Clientes[i].nif,
			Utils.genLatitude(),
			Utils.genLongitude(),
			rwc(DataSample.tipoCarro),
			rwc(DataSample.preferencia)
		)
	);
	i++;
}
console.log('Alugueres Gerados...');
i = 0;

console.log('A escrever ficheiro');

let strLog = '';

// let Clientes = [];
// let Carros = [];
// let Classificacoes = [];
// let Proprietarios = [];
// let Alugueres = [];

Clientes.forEach(element => {
	strLog += `${element.override()}\n`;
});
Carros.forEach(element => {
	strLog += `${element.override()}\n`;
});
Proprietarios.forEach(element => {
	strLog += `${element.override()}\n`;
});
Alugueres.forEach(element => {
	strLog += `${element.override()}\n`;
});
Classificacoes.forEach(element => {
	console.log(element.override());
	strLog += `${element.override()}\n`;
});

fs.writeFile('logsPOO_carregamentoInicial.bak', strLog, err => {
	if (err) throw err;
	console.log('Log gerado');
});

console.log(Classificacoes);
