import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Main pages
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './components/shop/shop.component';
import { MedalsTrophiesComponent } from './components/medals-trophies/medals-trophies.component';
import { GoalPostsPolesComponent } from './components/goal-posts-poles/goal-posts-poles.component';

// Sports Goods subpages
import { CricketComponent } from './sports-goods/cricket/cricket.component';
import { FootballComponent } from './sports-goods/football/football.component';
import { BadmintonComponent } from './sports-goods/badminton/badminton.component';
import { BasketballComponent } from './sports-goods/basketball/basketball.component';
import { TennisComponent } from './sports-goods/tennis/tennis.component';
import { TableTennisComponent } from './sports-goods/table-tennis/table-tennis.component';
import { HockeyComponent } from './sports-goods/hockey/hockey.component';
import { SquashComponent } from './sports-goods/squash/squash.component';
import { VolleyballComponent } from './sports-goods/volleyball/volleyball.component';
import { SwimmingComponent } from './sports-goods/swimming/swimming.component';

// Sports Apparel subpages
import { CustomisedSublimatedKitsComponent } from './sports-apparel/customised-sublimated-kits/customised-sublimated-kits.component';
import { SchoolSportsUniformComponent } from './sports-apparel/school-sports-uniform/school-sports-uniform.component';
import { TrackSuitsComponent } from './sports-apparel/track-suits/track-suits.component';
import { HoodiesComponent } from './sports-apparel/hoodies/hoodies.component';
import { TrouserComponent } from './sports-apparel/trouser/trouser.component';
import { ShortComponent } from './sports-apparel/short/short.component';
import { BasicComponent } from './sports-apparel/basic/basic.component';
import { BibsComponent } from './sports-apparel/bibs/bibs.component';
import { BaseballWearsComponent } from './sports-apparel/baseball-wears/baseball-wears.component';
import { CricketKitsComponent } from './sports-apparel/cricket-kits/cricket-kits.component';
import { FashionWearComponent } from './sports-apparel/fashion-wear/fashion-wear.component';

// Goal Posts subpages
import { BasketballPoleComponent } from './goal-posts-poles/basketball-pole/basketball-pole.component';
import { FootballPoleComponent } from './goal-posts-poles/football-pole/football-pole.component';
import { TrolleysComponent } from './goal-posts-poles/trolleys/trolleys.component';
import { BadmintonPoleComponent } from './goal-posts-poles/badminton-pole/badminton-pole.component';

const routes: Routes = [
  // Default route (Home with carousel + cart section)
  { path: '', component: HomeComponent },

  // Main pages
  { path: 'shop', component: ShopComponent },
  { path: 'about', component: AboutComponent },
  { path: 'medals-trophies', component: MedalsTrophiesComponent },
  { path: 'goal-posts-poles', component: GoalPostsPolesComponent },

  // Sports Goods
  { path: 'sports-goods/cricket', component: CricketComponent },
  { path: 'sports-goods/football', component: FootballComponent },
  { path: 'sports-goods/badminton', component: BadmintonComponent },
  { path: 'sports-goods/basketball', component: BasketballComponent },
  { path: 'sports-goods/tennis', component: TennisComponent },
  { path: 'sports-goods/table-tennis', component: TableTennisComponent },
  { path: 'sports-goods/hockey', component: HockeyComponent },
  { path: 'sports-goods/squash', component: SquashComponent },
  { path: 'sports-goods/volleyball', component: VolleyballComponent },
  { path: 'sports-goods/swimming', component: SwimmingComponent },

  // Sports Apparel
  { path: 'sports-apparel/customised-sublimated-kits', component: CustomisedSublimatedKitsComponent },
  { path: 'sports-apparel/school-sports-uniform', component: SchoolSportsUniformComponent },
  { path: 'sports-apparel/track-suits', component: TrackSuitsComponent },
  { path: 'sports-apparel/hoodies', component: HoodiesComponent },
  { path: 'sports-apparel/trouser', component: TrouserComponent },
  { path: 'sports-apparel/short', component: ShortComponent },
  { path: 'sports-apparel/basic', component: BasicComponent },
  { path: 'sports-apparel/bibs', component: BibsComponent },
  { path: 'sports-apparel/baseball-wears', component: BaseballWearsComponent },
  { path: 'sports-apparel/cricket-kits', component: CricketKitsComponent },
  { path: 'sports-apparel/fashion-wear', component: FashionWearComponent },

  // Goal Posts & Poles subpages
  { path: 'goal-posts-poles/basketball-pole', component: BasketballPoleComponent },
  { path: 'goal-posts-poles/football-pole', component: FootballPoleComponent },
  { path: 'goal-posts-poles/trolleys', component: TrolleysComponent },
  { path: 'goal-posts-poles/badminton-pole', component: BadmintonPoleComponent },

  // Fallback (if user types unknown URL → go to home)
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
