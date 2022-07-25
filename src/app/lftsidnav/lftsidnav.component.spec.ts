import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LftsidnavComponent } from './lftsidnav.component';

describe('LftsidnavComponent', () => {
  let component: LftsidnavComponent;
  let fixture: ComponentFixture<LftsidnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LftsidnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LftsidnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
