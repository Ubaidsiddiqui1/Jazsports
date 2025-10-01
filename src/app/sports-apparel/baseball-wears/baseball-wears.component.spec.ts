import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseballWearsComponent } from './baseball-wears.component';

describe('BaseballWearsComponent', () => {
  let component: BaseballWearsComponent;
  let fixture: ComponentFixture<BaseballWearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseballWearsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaseballWearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
