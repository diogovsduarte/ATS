class Classificar {
	constructor(matricula, nota) {
		this.matricula = matricula;
		this.nota = nota;
	}
	override() {
		return `Classificar: ${this.matricula},${this.nota}`;
	}
}

module.exports = Classificar;
