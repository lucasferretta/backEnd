class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre= nombre;
        this.apellido= apellido;
        this.libros= libros;
        this.mascotas= mascotas;

    }

    getFullName(){
        return (`${this.nombre} ${this.apellido}`)
    }
    addMascota(mascota){
        this.mascotas.push(mascota)
    }
    addbook(libro, autor){
        this.libros.push({libro:libro,
                          autor:autor})
    }
    getBookNames(){
        let bookName = []
        for (let i=0; i< this.libros.length; i++){
            bookName.push(this.libros[i].libro)
        }
        return bookName;
    }
    countMascota(){
        return this.mascotas.length
    }

}


const usuario1 = new Usuario ("lucas","Ferretta", [{libro:"Harry Potter", autor:"J.K. Rowling"},{libro:"El Alquimista", autor:"Paulo Coelho"}],['bailey','byron'])   

                             

console.log(usuario1.getFullName());
usuario1.addMascota("dobby"); 
console.log(usuario1.countMascota());
usuario1.addbook ("El Señor de los Anillos","J.R.R. Tolkien");
console.log(usuario1.getBookNames());
