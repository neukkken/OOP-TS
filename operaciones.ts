class Operaciones {
    numero1: number
    numero2: number

    constructor(numero1: number, numero2: number) {
        this.numero1 = numero1
        this.numero2 = numero2
    }

    getNumero1(): number { return this.numero1; }
    setNumero1(value: number) { this.numero1 = value }

    getNumero2(): number { return this.numero2; }
    setNumero2(value: number) { this.numero2 = value }

    add() {
        return this.numero1 + this.numero2
    }

    subs() {
        return this.numero1 - this.numero2
    }

    mul() {
        return this.numero1 * this.numero2
    }

    div() {
        if (this.numero2 == 0) {
            return 'ERROR Cant divide by 0.'
        } else {
            return this.numero1 / this.numero2
        }
    }

}

//methos of Operaciones add, subs, mul and div ;)

let miPrimeraOperacion = new Operaciones(20, 2)
let miSegundaOperacion = new Operaciones(15, 0)
console.log('Mi primera calculadora')
console.log('-------')
console.log(miPrimeraOperacion.getNumero1() + '+' + miPrimeraOperacion.getNumero2() + '=' + miPrimeraOperacion.add())
console.log(miPrimeraOperacion.getNumero1() + '-' + miPrimeraOperacion.getNumero2() + '=' + miPrimeraOperacion.subs())
console.log(miPrimeraOperacion.getNumero1() + 'x' + miPrimeraOperacion.getNumero2() + '=' + miPrimeraOperacion.mul())
console.log(miPrimeraOperacion.getNumero1() + '/' + miPrimeraOperacion.getNumero2() + '=' + miPrimeraOperacion.div())
console.log(miSegundaOperacion.getNumero1() + '/' + miSegundaOperacion.getNumero2() + '=' + miSegundaOperacion.div())
console.log('-------')