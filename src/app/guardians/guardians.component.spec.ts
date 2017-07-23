import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardiansComponent } from './guardians.component';

describe('GuardiansComponent', () => {
  let component: GuardiansComponent;
  let fixture: ComponentFixture<GuardiansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardiansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardiansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
