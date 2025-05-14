import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidatoDetail } from './candidatos-detail';


@Injectable({
 providedIn: 'root'
})
export class CandidatoService {


 private apiUrl: string ="https://raw.githubusercontent.com/kgarces/ISIS2603_202510_parcial2/refs/heads/main/jsons";


  constructor(private http: HttpClient) { }


  getcandidatos(): Observable<CandidatoDetail[]> {
    return this.http.get<CandidatoDetail[]>(this.apiUrl+"/candidates.json");
  }

  getcandidato(id: string): Observable<CandidatoDetail> {
    return this.http.get<CandidatoDetail>(this.apiUrl+"/"+id+"/candidates.json");
  }


}