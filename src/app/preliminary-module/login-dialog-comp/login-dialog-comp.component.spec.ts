import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDialogCompComponent } from './login-dialog-comp.component';

describe('LoginDialogCompComponent', () => {
  let component: LoginDialogCompComponent;
  let fixture: ComponentFixture<LoginDialogCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDialogCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDialogCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
