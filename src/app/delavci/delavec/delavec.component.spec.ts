import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelavecComponent } from './delavec.component';

describe('DelavecComponent', () => {
  let component: DelavecComponent;
  let fixture: ComponentFixture<DelavecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelavecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelavecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
