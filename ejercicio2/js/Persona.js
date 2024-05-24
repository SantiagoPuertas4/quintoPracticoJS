export class Persona {
  constructor(
    nombre = "",
    edad = 0,
    dni = 0,
    sexo = "h",
    peso = 0,
    altura = 0
  ) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }
  setEdad(edad) {
    this.edad = edad;
  }
  setDNI(dni) {
    this.dni = dni;
  }
  setSexo(sexo) {
    this.sexo = sexo;
  }
  setPeso(peso) {
    this.peso = peso;
  }
  setAltura(altura) {
    this.altura = altura;
  }

  mostrarGeneracion() {
    let edad = this.edad;

    if (edad >= 13 && edad <= 30) {
      alert(`${this.nombre} pertenece a la Generacion Z`);
      return;
    }
    if (edad >= 31 && edad <= 43) {
      alert(`${this.nombre} pertenece a la Generacion Y`);
      return;
    }
    if (edad >= 44 && edad <= 55) {
      alert(`${this.nombre} pertenece a la Generacion X`);
      return;
    }
    if (edad >= 56 && edad <= 75) {
      alert(`${this.nombre} pertenece a los Baby Boomers`);
      return;
    }
    if (edad >= 76 && edad <= 94) {
      alert(`${this.nombre} pertenece a la Generacion Silenciosa`);
      return;
    }

    alert("Demasiado joven o demasiado viejo para calificar");
    return;
    //Caso fuera de rango
  }

  esMayorDeEdad() {
    let edad = this.edad;
    if (edad > 100) {
      alert(`${this.nombre} debe volver a la tumba`);
    } else if (edad >= 18) {
      alert(`${this.nombre} es mayor de edad`);
    } else {
      alert(`${this.nombre} es menor de edad`);
    }
  }

  mostrarDatos() {
    alert(
      `Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.dni}\nSexo: ${this.sexo}\nPeso: ${this.peso}\nAltura: ${this.altura}\n`
    );
  }
}
