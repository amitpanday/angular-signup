import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { routingModule } from '../app.routing';
import { APP_BASE_HREF } from '@angular/common';
import { TestCommonDeclarations, TestCommonImports , TestAuthServices } from '../_shared/helpers/test.helper';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ...TestCommonDeclarations,
      ],
      imports: [
        ...TestCommonImports,
        HttpClientTestingModule,
        routingModule,
      ],
      providers : [
        ...TestAuthServices,
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
    .compileComponents();

    httpMock = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('check username and password formgroup fields', () => {
    it('loginForm formgroup should have username field', () => {
      const field = component.loginForm.get('username');
      expect(field).toBeTruthy();
    });

    it('loginForm formgroup should have password field', () => {
      const field = component.loginForm.get('password');
      expect(field).toBeTruthy();
    });
  });

  it('formdata not set, should not be able to submit', () => {
    component.loginForm.reset();
    component.onSubmitButtonClicked();
    expect(component.error).toBeFalsy();
  });

});
