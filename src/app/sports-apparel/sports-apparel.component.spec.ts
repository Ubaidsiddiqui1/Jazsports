import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsApparelComponent } from './sports-apparel.component';

describe('SportsApparelComponent', () => {
  let component: SportsApparelComponent;
  let fixture: ComponentFixture<SportsApparelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportsApparelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SportsApparelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
