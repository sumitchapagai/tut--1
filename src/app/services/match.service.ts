import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
matchURl: string="http://localhost:3000/matches";
// Livreur: htpp
  constructor(private http:HttpClient) { }
  // reponse : string message
addMatch(obj:any){
return this.http.post<{message:string}>(this.matchURl,obj);
}
// obj: nouvelles valeurs
// reponse : string message
editMatch(obj:any){
return this.http.put<{message:string}>(this.matchURl,obj);
}
// reponse : string message
deleteMatch(id:any){
return this.http.delete<{message:string}>(`${this.matchURl}/${id}`);
}
// reponse: tableau d'objets
getAllMatches(){
return this.http.get<{matches:any, message:string}>(this.matchURl);
}
// reponse: un objet
getMatchById(id:any){
return this.http.get<{match:any}>(`${this.matchURl}/${id}`);
}



}
