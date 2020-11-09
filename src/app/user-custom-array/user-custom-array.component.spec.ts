import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCustomArrayComponent } from './user-custom-array.component';

describe('UserCustomArrayComponent', () => {
  let component: UserCustomArrayComponent;
  let fixture: ComponentFixture<UserCustomArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCustomArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCustomArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
