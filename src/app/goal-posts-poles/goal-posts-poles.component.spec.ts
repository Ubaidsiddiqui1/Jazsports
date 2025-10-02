import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalPostsPolesComponent } from './goal-posts-poles.component';

describe('GoalPostsPolesComponent', () => {
  let component: GoalPostsPolesComponent;
  let fixture: ComponentFixture<GoalPostsPolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoalPostsPolesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoalPostsPolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
