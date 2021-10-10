class NovoCliente {
	constructor(nome, nif, email, morada, x, y) {
		this.nome = nome;
		this.nif = nif;
		this.email = email;
		this.morada = morada;
		this.x = x;
		this.y = y;
	}
	override() {
		return `NovoCliente: ${this.nome},${this.nif},${this.email},${this.morada},${this.x},${this.y}`;
	}
}

module.exports = NovoCliente;
