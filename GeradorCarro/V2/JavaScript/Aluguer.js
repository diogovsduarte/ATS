class Aluguer {
	constructor(nifCliente, x, y, tipoCombustivel, preferencia) {
		this.nifCliente = nifCliente;
		this.x = x;
		this.y = y;
		this.tipoCombustivel = tipoCombustivel;
		this.preferencia = preferencia;
	}
	override() {
		return `Aluguer: ${this.nifCliente},${this.x},${this.y},${this.tipoCombustivel},${this.preferencia}`;
	}
}

module.exports = Aluguer;
