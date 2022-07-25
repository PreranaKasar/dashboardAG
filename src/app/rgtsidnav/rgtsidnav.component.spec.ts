import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgtsidnavComponent } from './rgtsidnav.component';

describe('RgtsidnavComponent', () => {
  let component: RgtsidnavComponent;
  let fixture: ComponentFixture<RgtsidnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgtsidnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgtsidnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
