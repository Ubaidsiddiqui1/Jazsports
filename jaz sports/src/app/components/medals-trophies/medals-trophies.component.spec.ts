import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedalsTrophiesComponent } from './medals-trophies.component';

describe('MedalsTrophiesComponent', () => {
  let component: MedalsTrophiesComponent;
  let fixture: ComponentFixture<MedalsTrophiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedalsTrophiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedalsTrophiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
