import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Main pages
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './components/shop/shop.component';
import { MedalsTrophiesComponent } from './components/medals-trophies/medals-trophies.component';
import { GoalPostsPolesComponent } from './components/goal-posts-poles/goal-posts-poles.component';

// Sports Goods main + subpages
import { SportsGoodsComponent } from './sports-goods/sports-goods.component';
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

// Sports Apparel main + subpages
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

// Goal Posts main + subpages
import { BasketballPoleComponent } from './goal-posts-poles/basketball-pole/basketball-pole.component';
import { FootballPoleComponent } from './goal-posts-poles/football-pole/football-pole.component';
import { TrolleysComponent } from './goal-posts-poles/trolleys/trolleys.component';
import { BadmintonPoleComponent } from './goal-posts-poles/badminton-pole/badminton-pole.component';

const routes: Routes = [
  // Default route
  { path: '', component: HomeComponent },

  // Main pages
  { path: 'shop', component: ShopComponent },
  { path: 'about', component: AboutComponent },
  { path: 'medals-trophies', component: MedalsTrophiesComponent },

  // Sports Goods (parent with children)
  {
    path: 'sports-goods',
    component: SportsGoodsComponent,
    children: [
      { path: 'cricket', component: CricketComponent },
      { path: 'football', component: FootballComponent },
      { path: 'badminton', component: BadmintonComponent },
      { path: 'basketball', component: BasketballComponent },
      { path: 'tennis', component: TennisComponent },
      { path: 'table-tennis', component: TableTennisComponent },
      { path: 'hockey', component: HockeyComponent },
      { path: 'squash', component: SquashComponent },
      { path: 'volleyball', component: VolleyballComponent },
      { path: 'swimming', component: SwimmingComponent },
    ],
  },

  // Sports Apparel
  {
    path: 'sports-apparel',
    children: [
      { path: 'customised-sublimated-kits', component: CustomisedSublimatedKitsComponent },
      { path: 'school-sports-uniform', component: SchoolSportsUniformComponent },
      { path: 'track-suits', component: TrackSuitsComponent },
      { path: 'hoodies', component: HoodiesComponent },
      { path: 'trouser', component: TrouserComponent },
      { path: 'short', component: ShortComponent },
      { path: 'basic', component: BasicComponent },
      { path: 'bibs', component: BibsComponent },
      { path: 'baseball-wears', component: BaseballWearsComponent },
      { path: 'cricket-kits', component: CricketKitsComponent },
      { path: 'fashion-wear', component: FashionWearComponent },
    ],
  },

  // Goal Posts & Poles
  {
    path: 'goal-posts-poles',
    component: GoalPostsPolesComponent,
    children: [
      { path: 'basketball-pole', component: BasketballPoleComponent },
      { path: 'football-pole', component: FootballPoleComponent },
      { path: 'trolleys', component: TrolleysComponent },
      { path: 'badminton-pole', component: BadmintonPoleComponent },
    ],
  },

  // Wildcard
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}