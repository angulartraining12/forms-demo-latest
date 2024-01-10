import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsbybookidComponent } from './authorsbybookid.component';

describe('AuthorsbybookidComponent', () => {
  let component: AuthorsbybookidComponent;
  let fixture: ComponentFixture<AuthorsbybookidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorsbybookidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorsbybookidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
