import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionWearComponent } from './fashion-wear.component';

describe('FashionWearComponent', () => {
  let component: FashionWearComponent;
  let fixture: ComponentFixture<FashionWearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FashionWearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FashionWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
