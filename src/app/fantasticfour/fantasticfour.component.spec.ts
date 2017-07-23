import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasticfourComponent } from './fantasticfour.component';

describe('FantasticfourComponent', () => {
  let component: FantasticfourComponent;
  let fixture: ComponentFixture<FantasticfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FantasticfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FantasticfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
