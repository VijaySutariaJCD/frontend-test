import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestBookWriteComponent } from './guest-book-write.component';

describe('GuestBookWriteComponent', () => {
  let component: GuestBookWriteComponent;
  let fixture: ComponentFixture<GuestBookWriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestBookWriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestBookWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
