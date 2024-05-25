export class Tarea {
  constructor(tarea) {
    this.codigo = window.self.crypto.randomUUID();
    this.tarea = tarea;
    console.log("tarea creada");
  }
}
