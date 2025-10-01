import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsGoodsComponent } from './sports-goods.component';

describe('SportsGoodsComponent', () => {
  let component: SportsGoodsComponent;
  let fixture: ComponentFixture<SportsGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportsGoodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SportsGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
