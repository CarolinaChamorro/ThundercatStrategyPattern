class Thundercat{
    nombre;
    estrategiaCorrer;
    estrategiaAtacar;
    
    ejecutarCorrida(){
        this.estrategiaCorrer.correr();
    }
    traerEstrategiaCorrer(estrategiaCorrer){
        this.estrategiaCorrer=estrategiaCorrer;
    }
    ejecutarAtaque(){
        this.estrategiaAtacar.ataque();
    }
    traerEstrategiaAtacar(estrategiaAtacar){
       this.estrategiaAtacar=estrategiaAtacar;
    }


}
class Leano extends Thundercat{

}
class Cheetara extends Thundercat{
  
}
/*Interfaz Comportamiento Correr*/

class CorrerConAlas{
     correr(){
        console.log("Puedo correr con mis alas");
     }

}

class CorrerRapido{
    correr(){
        console.log("Puedo correr super rápido");
     }
}
/*Interfaz Comportamiento Ataque*/

class AtaqueMortal{
     ataque(){
console.log("Realice un ataque mortal");
     }
     
}
class AtaqueFuego{
    ataque(){
        console.log("Realice un ataque con fuego");
     }
}