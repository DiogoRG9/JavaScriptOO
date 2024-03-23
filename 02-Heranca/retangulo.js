class Retangulo extends Forma{
    constructor(comprimento, largura){
        super("Retangulo");
        this.comprimento = comprimento;
        this.largura = largura;
    }

    calculaArea(){
        return this.comprimento * this.largura;
    }
}