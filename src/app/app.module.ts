import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './components/shop/shop.component';
import { SportsGoodsComponent } from './sports-goods/sports-goods.component';
import { SportsApparelComponent } from './sports-apparel/sports-apparel.component';
import { MedalsTrophiesComponent } from './medals-trophies/medals-trophies.component';
import { GoalPostsPolesComponent } from './goal-posts-poles/goal-posts-poles.component';
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
import { BasketballPoleComponent } from './goal-posts-poles/basketball-pole/basketball-pole.component';
import { FootballPoleComponent } from './goal-posts-poles/football-pole/football-pole.component';
import { TrolleysComponent } from './goal-posts-poles/trolleys/trolleys.component';
import { BadmintonPoleComponent } from './goal-posts-poles/badminton-pole/badminton-pole.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CartSectionComponent } from './cart-section/cart-section.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ShopComponent,
    SportsGoodsComponent,
    SportsApparelComponent,
    MedalsTrophiesComponent,
    GoalPostsPolesComponent,
    CricketComponent,
    FootballComponent,
    BadmintonComponent,
    BasketballComponent,
    TennisComponent,
    TableTennisComponent,
    HockeyComponent,
    SquashComponent,
    VolleyballComponent,
    SwimmingComponent,
    CustomisedSublimatedKitsComponent,
    SchoolSportsUniformComponent,
    TrackSuitsComponent,
    HoodiesComponent,
    TrouserComponent,
    ShortComponent,
    BasicComponent,
    BibsComponent,
    BaseballWearsComponent,
    CricketKitsComponent,
    FashionWearComponent,
    BasketballPoleComponent,
    FootballPoleComponent,
    TrolleysComponent,
    BadmintonPoleComponent,
    CarouselComponent,
    CartSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule   // ✅ add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
