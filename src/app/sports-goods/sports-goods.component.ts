import { Component } from '@angular/core';

@Component({
  selector: 'app-sports-goods',
  templateUrl: './sports-goods.component.html',
  styleUrls: ['./sports-goods.component.css']
})
export class SportsGoodsComponent {
  goods = [
    {
      name: 'Football Goal Post',
      description: 'Durable 20-gauge metal frame, size 7x8 feet, easy 4-step disassembly.',
      image: 'assets/images/football-goalpost.jpg'
    },
    {
      name: 'Basketball Pole',
      description: 'Heavy-duty basketball pole, weather-resistant paint finish.',
      image: 'assets/images/basketball-pole.jpg'
    },
    {
      name: 'Badminton Poles',
      description: 'Portable and sturdy poles, perfect for indoor and outdoor play.',
      image: 'assets/images/badminton-pole.jpg'
    },
    {
      name: 'Table Tennis Table',
      description: 'Foldable, smooth surface for professional-level practice and games.',
      image: 'assets/images/table-tennis.jpg'
    }
  ];

  cricketEquipment = [
    // 1
    {
      name: 'Cricket Bat (Hardball)',
      description: 'Professional grade hardball bat made from premium willow.',
      image: 'assets/sportgoodscategory/hardball bat.png'
    },
    // 2
    {
      name: 'Cricket Bat (Tennis)',
      description: 'Lightweight tennis ball bat for casual and street cricket.',
      image: 'assets/sportgoodscategory/cricket tennis bat.jpg'
    },
    // 3
    {
      name: 'Cricket Balls (Tennis)',
      description: 'Tennis, leather, tape, and practice balls for all formats.',
      image: 'assets/sportgoodscategory/tennis balls.jpg'
    },
    // 4
    {
      name: 'Cricket Balls (Hardball)',
      description: 'Lightweight and protective pads for maximum comfort.',
      image: 'assets/sportgoodscategory/cricket hardball.jpg'
    },
    // 5
    {
      name: 'Batting Gloves',
      description: 'High-grip gloves ensuring control and safety.',
      image: 'assets/sportgoodscategory/batting gloves.jpg'
    },
    // 6
    {
      name: 'Wicket Keeping Gloves',
      description: 'Durable leather gloves for wicket keepers.',
      image: 'assets/sportgoodscategory/wicket keeping gloves.jpg'
    },
    // 7
    {
      name: 'Wicket Keeping Pads',
      description: 'Flexible and comfortable pads for wicket keeping.',
      image: 'assets/sportgoodscategory/wicket keeping pad.jpg'
    },
    // 8
    {
      name: 'Helmets',
      description: 'ISI-marked helmets for full-face protection.',
      image: 'assets/sportgoodscategory/helmet.jpg'
    },
    // 9
    {
      name: 'Wickets',
      description: 'Thigh pads, arm guards, and chest guards for extra protection.',
      image: 'assets/sportgoodscategory/wicket.jpg'
    },
    // 10
    {
      name: 'Abdominal Guard (Box)',
      description: 'Essential protective gear for batsmen.',
      image: 'assets/sportgoodscategory/abdominal guard.jpg'
    },
    // 11
    {
      name: 'Cricket Kit Bags',
      description: 'Spacious and durable kit bags to carry all your cricket gear.',
      image: 'assets/sportgoodscategory/cricket kit bag.jpg'
    },
    // 12
    {
      name: 'Batting Pads (Leg Guards)',
      description: 'Spacious and durable kit bags to carry all your cricket gear.',
      image: 'assets/sportgoodscategory/batting pad.jpg'
    }
  ];
}
