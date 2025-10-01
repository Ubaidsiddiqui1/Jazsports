import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketballPoleComponent } from './basketball-pole.component';

describe('BasketballPoleComponent', () => {
  let component: BasketballPoleComponent;
  let fixture: ComponentFixture<BasketballPoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasketballPoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasketballPoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
