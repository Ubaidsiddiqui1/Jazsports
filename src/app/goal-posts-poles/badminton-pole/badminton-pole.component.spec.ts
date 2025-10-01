import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadmintonPoleComponent } from './badminton-pole.component';

describe('BadmintonPoleComponent', () => {
  let component: BadmintonPoleComponent;
  let fixture: ComponentFixture<BadmintonPoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BadmintonPoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BadmintonPoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
