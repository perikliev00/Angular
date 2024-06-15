import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevigationComponent } from './nevigation.component';

describe('NevigationComponent', () => {
  let component: NevigationComponent;
  let fixture: ComponentFixture<NevigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NevigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NevigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
