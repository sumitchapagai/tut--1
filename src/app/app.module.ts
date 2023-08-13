import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { CupEventComponent } from "./components/cup-event/cup-event.component";
import { ScoreComponent } from "./components/score/score.component";
import { NewsComponent } from "./components/news/news.component";
import { StatsComponent } from "./components/stats/stats.component";
import { VideosComponent } from "./components/videos/videos.component";
import { FooterComponent } from "./components/footer/footer.component";
import { BlogComponent } from "./components/blog/blog.component";
import { MatchesComponent } from "./components/matches/matches.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { HomeComponent } from "./components/home/home.component";
import { PlayersComponent } from "./components/players/players.component";
import { AdminComponent } from "./components/admin/admin.component";
import { AddTeamComponent } from "./components/add-team/add-team.component";
import { AddMatchComponent } from "./components/add-match/add-match.component";
import { AddPlayerComponent } from "./components/add-player/add-player.component";
import { ArticleComponent } from "./components/article/article.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatchesTableComponent } from "./components/matches-table/matches-table.component";
import { TeamsTableComponent } from "./components/teams-table/teams-table.component";
import { PlayersTableComponent } from "./components/players-table/players-table.component";
import { MatchInfoComponent } from "./components/match-info/match-info.component";
import { MatchEditComponent } from "./components/match-edit/match-edit.component";
import { PlayerInfoComponent } from "./components/player-info/player-info.component";
import { PlayerComponent } from "./components/player/player.component";
import { PlayerEditComponent } from "./components/player-edit/player-edit.component";
import { TeamInfoComponent } from "./components/team-info/team-info.component";
import { TeamEditComponent } from "./components/team-edit/team-edit.component";
import { TeamComponent } from "./components/team/team.component";
import { ReversePipe } from "./pipes/reverse.pipe";
import { AsterixPipe } from "./pipes/asterix.pipe";
import { HttpClientModule } from "@angular/common/http";
import { ProfileComponent } from './components/profile/profile.component';
import { MyFiltrePipe } from './pipes/my-filtre.pipe';
import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CupEventComponent,
    ScoreComponent,
    NewsComponent,
    StatsComponent,
    VideosComponent,
    FooterComponent,
    BlogComponent,
    MatchesComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    PlayersComponent,
    AdminComponent,
    AddTeamComponent,
    AddMatchComponent,
    AddPlayerComponent,
    ArticleComponent,
    MatchesTableComponent,
    TeamsTableComponent,
    PlayersTableComponent,
    MatchInfoComponent,
    MatchEditComponent,
    PlayerInfoComponent,
    PlayerComponent,
    PlayerEditComponent,
    TeamInfoComponent,
    TeamEditComponent,
    TeamComponent,
    ReversePipe,
    AsterixPipe,
    ProfileComponent,
    MyFiltrePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
