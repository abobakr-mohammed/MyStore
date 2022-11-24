import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServecorderComponent } from './servecorder.component';

describe('ServecorderComponent', () => {
  let component: ServecorderComponent;
  let fixture: ComponentFixture<ServecorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServecorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServecorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
