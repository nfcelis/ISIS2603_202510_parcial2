
import { Candidato } from "./candidato";

export class CandidatoDetail extends Candidato {
  

   constructor(id: number, nombre: string, pais_origen: any, edad: number, vertiente_religiosa: string, foto:string) {
       super(id, nombre, pais_origen, edad, vertiente_religiosa, foto);
   }
}