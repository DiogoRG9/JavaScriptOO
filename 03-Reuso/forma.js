class Forma{
    
    constructor(tipoDeForma = 'Forma Abstrata'){
        //this.tipoDeForma = 'Forma Abstrata'
        this.tipoDeForma = tipoDeForma;
    }

    imprimeForma(){
        // alert (`Tipo de forma: ${this.tipoDeForma} - Área: ${this.calculaArea()}`)
        try{
        alert (`Tipo de forma: ${this.tipoDeForma} - Área: ${this.calculaArea()}`)
    } catch (error){
        alert ("O código está com Erro");
    }
     }

    calculaArea(){
        throw new Error('o método calculaArea() deve ser implementado na subclass.')
    }
}