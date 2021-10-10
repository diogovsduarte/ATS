class NovoCarro {
    // tipo,marca,matricula,nif,velocidade media,preço por km, consumo por km, autonomia, X, Y
    constructor(combustao, marca, matricula, nif, velocidade, precoKm, consumoKm, autonomia, x, y) {
        this.combustao = combustao;
        this.marca = marca;
        this.matricula = matricula;
        this.nif = nif;
        this.velocidade = velocidade;
        this.precoKm = precoKm;
        this.consumoKm = consumoKm;
        this.autonomia = autonomia;
        this.x = x;
        this.y = y;
    }
    override() {
        return `NovoCarro: ${this.combustao},${this.marca},${this.matricula},${this.nif},${this.velocidade},${this.precoKm},${this.consumoKm},${this.autonomia},${this.x},${this.y}`;
    }
}

module.exports = NovoCarro;