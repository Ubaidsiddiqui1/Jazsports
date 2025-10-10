import { Component } from '@angular/core';

@Component({
  selector: 'app-medals-trophies',
  templateUrl: './medals-trophies.component.html',
  styleUrls: ['./medals-trophies.component.css']
})
export class MedalsTrophiesComponent {
  medals = [
    {
      name: 'Metal Medal',
      image: 'assets/medals/metal medal main.jpg'
    },
    {
      name: 'Silver Medal',
      image: 'assets/medals/silver medal main.jpg'
    },
    {
      name: 'Gold Medal',
      image: 'assets/medals/brass medal main.jpg'
    },
    {
      name: 'Bronze Medal',
      image: 'assets/medals/gold medal main.jpg'
    },
    {
      name: 'Brown Medal Designs',
      image: 'assets/medals/brown medal main.jpg'
    }
  ];

  trophies = [
    {
      name: 'Cricket Trophy',
      image: 'assets/trophies/cricket-trophy.jpg'
    },
    {
      name: 'Football Trophy',
      image: 'assets/trophies/football-trophy.jpg'
    },
    {
      name: 'Corporate Trophy',
      image: 'assets/trophies/corporate-trophy.jpg'
    },
    {
      name: 'Corporate Trophy',
      image: 'assets/trophies/corporate-trophy.jpg'
    },
    {
      name: 'Custom Trophy Designs',
      image: 'assets/trophies/custom-trophy.jpg'
    }
  ];
}
