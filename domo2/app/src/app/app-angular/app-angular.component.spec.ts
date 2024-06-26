import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAngularComponent } from './app-angular.component';

describe('AppAngularComponent', () => {
  let component: AppAngularComponent;
  let fixture: ComponentFixture<AppAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
