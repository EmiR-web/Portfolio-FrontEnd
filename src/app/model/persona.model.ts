export class Persona{
    id?:number;
    nombre:String;
    apellido:String;
    direccion:String;
    mail:String;
    telefono:String;
    url_foto:String;
    sobre_mi:String;

    constructor(nombre:String, apellido:String, direccion:String, mail:String, telefono:String, url_foto:String, sobre_mi:String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.mail = mail;
        this.telefono = telefono;
        this.url_foto = url_foto;
        this.sobre_mi = sobre_mi;
    }
}