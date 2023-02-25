import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponentTsComponent } from './navbar.component';

describe('NavbarComponentTsComponent', () => {
  let component: NavbarComponentTsComponent;
  let fixture: ComponentFixture<NavbarComponentTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponentTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
