import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
playerURL:string="http://localhost:3000/players";
  constructor(private http:HttpClient) { }
    // reponse : string message
addPlayer(obj:any){
  return this.http.post<{message:string}>(this.playerURL,obj);
  }
  // obj: nouvelles valeurs
  // reponse : string message
  editPlayer(obj:any){
  return this.http.put<{message:string}>(this.playerURL,obj);
  }
  // reponse : string message
  deletePlayer(id:any){
  return this.http.delete<{message:string}>(`${this.playerURL}/${id}`);
  }
  // reponse: tableau d'objets
  getAllPlayer(){
  return this.http.get<{players:any, message:string}>(this.playerURL);
  }
  // reponse: un objet
  getPlayerById(id:any){
  return this.http.get<{player:string}>(`${this.playerURL}/${id}`);
  }
  
}
