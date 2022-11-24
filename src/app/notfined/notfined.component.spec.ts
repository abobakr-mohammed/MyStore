import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfinedComponent } from './notfined.component';

describe('NotfinedComponent', () => {
  let component: NotfinedComponent;
  let fixture: ComponentFixture<NotfinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfinedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotfinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
