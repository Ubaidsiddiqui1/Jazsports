import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomisedSublimatedKitsComponent } from './customised-sublimated-kits.component';

describe('CustomisedSublimatedKitsComponent', () => {
  let component: CustomisedSublimatedKitsComponent;
  let fixture: ComponentFixture<CustomisedSublimatedKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomisedSublimatedKitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomisedSublimatedKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
