import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmenComponent } from './xmen.component';

describe('XmenComponent', () => {
  let component: XmenComponent;
  let fixture: ComponentFixture<XmenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
