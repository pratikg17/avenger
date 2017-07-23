import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponaryComponent } from './weaponary.component';

describe('WeaponaryComponent', () => {
  let component: WeaponaryComponent;
  let fixture: ComponentFixture<WeaponaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
