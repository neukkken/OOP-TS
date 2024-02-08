export default class Cuenta {
    titular: string
    valorActual: number

    constructor(titular: string,
        valorActual: number) {

        this.titular = titular
        this.valorActual = valorActual
    }

    getTitular(): string { return this.titular; }
    setTitular(value: string) { this.titular = value }

    getValorActual(): number { return this.valorActual; }
    setValorActual(value: number) { this.valorActual = value }


    mostrar() {
        console.log('------------DATOS DE LA CUENTA-------------')
        console.log('Titular' + this.titular)
        console.log('Valor actual' + this.valorActual)
        console.log('-------------------------------------------')
    }

    ingresar(value: number) {
        this.valorActual = value
        return 'ingreso Exitoso'
    }

    retirar(value: number) {
        if (value > this.valorActual) {
            return 'No puede retirar esa cantidad, no hay fondos suficientes'
        } else {
            this.valorActual = value
            return 'Retiro Exitoso'
        }
    }

}





console.log(cuenta1.retirar(2000))
console.log(cuenta1.getValorActual())