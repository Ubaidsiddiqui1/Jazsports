import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketKitsComponent } from './cricket-kits.component';

describe('CricketKitsComponent', () => {
  let component: CricketKitsComponent;
  let fixture: ComponentFixture<CricketKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CricketKitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CricketKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
