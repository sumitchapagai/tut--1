import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
teamURL:string="http://localhost:3000/teams";
  constructor(private http:HttpClient) { }

    // reponse : string message
addTeam(obj:any){
  return this.http.post<{message:string}>(this.teamURL,obj);
  }
  // obj: nouvelles valeurs
  // reponse : string message
  editTeam(obj:any){
  return this.http.put<{message:string}>(this.teamURL,obj);
  }
  // reponse : string message
  deleteTeam(id:any){
  return this.http.delete<{message:string}>(`${this.teamURL}/${id}`);
  }
  // reponse: tableau d'objets
  getAllTeams(){
  return this.http.get<{teams:any,message:string}>(this.teamURL);
  }
  // reponse: un objet
  getTeamById(id:any){
  return this.http.get<{team:string}>(`${this.teamURL}/${id}`);
  }
}
