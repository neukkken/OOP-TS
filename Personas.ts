import Cuenta from "./cuenta";

export default class Persona {
    nombre: string
    apellido: string
    edad: number
    ciudad: string
    cuenta: Cuenta


    constructor(nombre: string,
        apellido: string,
        edad: number,
        ciudad: string,
        cuenta: Cuenta
    ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.ciudad = ciudad;
        this.cuenta = cuenta;
    }

    getNombre(): string { return this.nombre; }
    setNombre(value: string) { this.nombre = value }

    getApellido(): string { return this.apellido }
    setApellido(value: string) { this.apellido = value }

    getEdad(): number { return this.edad }
    setEdad(value: number) { this.edad = value }

    getCiudad(): string { return this.ciudad }
    setCiudad(value: string) { this.ciudad = value }



    allData() {
        console.log('----------------Datos Personales-----------------')
        console.log('Nombre: ' + this.nombre)
        console.log('Apellido: ' + this.apellido)
        console.log('Edad: ' + this.edad)
        console.log('Ciudad: ' + this.ciudad)
        console.log('-------------------------------------------------')
        return ''
    }

    checkAge() {
        if (this.edad >= 18) {
            return 'Es mayor de edad'
        } else {
            return 'Es menor de edad'
        }
    }


}

let cuenta1 = new Cuenta('Armando', 1000)

let persona1 = new Persona('Kidd', 'Keo', 23, 'Alicante')
let persona2 = new Persona('Arthas', 'Menethil', 60, 'Lordaeron', cuenta1)
let persona3 = new Persona('Roc', 'Jou', 20, 'Madrid')
let persona4 = new Persona('Darwom', 'Gomez', 777, 'Popayan')
let persona5 = new Persona('Armando', 'Mesas', 16, 'Popayan')


console.log(persona3.allData())
console.log(persona3.checkAge())

