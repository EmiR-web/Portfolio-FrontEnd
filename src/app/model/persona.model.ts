export class persona {
    id?:number;
    nombre:string;;
    apellido:string;
    direccion:string;
    telefono:string;
    mail:string;
    sobreMi:string;
    url_foto:string;

    constructor(nombre:string, apellido:string, direccion:string, telefono:string, mail:string, sobreMi:string, url_foto:string){
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.mail = mail;
        this.sobreMi = sobreMi;
        this.url_foto = url_foto;
    }
}