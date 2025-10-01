import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballPoleComponent } from './football-pole.component';

describe('FootballPoleComponent', () => {
  let component: FootballPoleComponent;
  let fixture: ComponentFixture<FootballPoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FootballPoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FootballPoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
