import { ProfileComponent } from './components/profile/profile.component';
import { TeamEditComponent } from "./components/team-edit/team-edit.component";
import { TeamInfoComponent } from "./components/team-info/team-info.component";
import { PlayerEditComponent } from "./components/player-edit/player-edit.component";
import { PlayerInfoComponent } from "./components/player-info/player-info.component";
import { MatchEditComponent } from "./components/match-edit/match-edit.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddMatchComponent } from "./components/add-match/add-match.component";
import { AddPlayerComponent } from "./components/add-player/add-player.component";
import { AddTeamComponent } from "./components/add-team/add-team.component";
import { AdminComponent } from "./components/admin/admin.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { MatchInfoComponent } from "./components/match-info/match-info.component";
import { MatchesComponent } from "./components/matches/matches.component";
import { PlayersComponent } from "./components/players/players.component";
import { SignupComponent } from "./components/signup/signup.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "subscription", component: SignupComponent },
  { path: "signupAdmin", component: SignupComponent },
  { path: "matches", component: MatchesComponent },
  { path: "players", component: PlayersComponent },
  { path: "admin", component: AdminComponent },
  { path: "add-team", component: AddTeamComponent },
  { path: "add-player", component: AddPlayerComponent },
  { path: "add-match", component: AddMatchComponent },
  { path: "matchInfo/:id", component: MatchInfoComponent },
  { path: "matchEdit/:id", component: MatchEditComponent },
  { path: "playerInfo/:id", component: PlayerInfoComponent },
  { path: "playerEdit/:id", component: PlayerEditComponent },
  { path: "teamInfo/:id", component: TeamInfoComponent },
  { path: "teamEdit/:id", component: TeamEditComponent },
  {path:"profile", component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
