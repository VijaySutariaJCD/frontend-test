import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaterenderComponent } from './staterender.component';

describe('StaterenderComponent', () => {
  let component: StaterenderComponent;
  let fixture: ComponentFixture<StaterenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaterenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaterenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
