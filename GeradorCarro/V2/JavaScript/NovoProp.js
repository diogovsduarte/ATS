class NovoProp {
	constructor(nome, nif, email, morada) {
		this.nome = nome;
		this.nif = nif;
		this.email = email;
		this.morada = morada;
	}
	override() {
		return `NovoProp: ${this.nome},${this.nif},${this.email},${this.morada}`;
	}
}

module.exports = NovoProp;
