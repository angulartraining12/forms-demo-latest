import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacrtivesignupformComponent } from './reacrtivesignupform.component';

describe('ReacrtivesignupformComponent', () => {
  let component: ReacrtivesignupformComponent;
  let fixture: ComponentFixture<ReacrtivesignupformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReacrtivesignupformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReacrtivesignupformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
