import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelavciComponent } from './delavci.component';

describe('DelavciComponent', () => {
  let component: DelavciComponent;
  let fixture: ComponentFixture<DelavciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelavciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelavciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
