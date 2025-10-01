import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackSuitsComponent } from './track-suits.component';

describe('TrackSuitsComponent', () => {
  let component: TrackSuitsComponent;
  let fixture: ComponentFixture<TrackSuitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackSuitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackSuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
