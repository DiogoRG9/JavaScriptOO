class Forma{
    
    constructor(){
        this.tipoDeForma = 'Forma Abstrata'
    }

    imprimeForma(){
        alert (`Tipo de forma: ${this.tipoDeForma} - Área: ${this.calculaArea()}`)
        // alert(`Tipo de Forma: ${this.tipoDeForma}`);
    }

    calculaArea(){
        throw new Error('o método calculaArea() deve ser implementado na subclass.')
    }
}