import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FahrradComponent } from './fahrrad.component';

describe('FahrradComponent', () => {
  let component: FahrradComponent;
  let fixture: ComponentFixture<FahrradComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FahrradComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FahrradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
