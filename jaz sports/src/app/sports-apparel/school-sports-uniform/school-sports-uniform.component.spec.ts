import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSportsUniformComponent } from './school-sports-uniform.component';

describe('SchoolSportsUniformComponent', () => {
  let component: SchoolSportsUniformComponent;
  let fixture: ComponentFixture<SchoolSportsUniformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchoolSportsUniformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolSportsUniformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
