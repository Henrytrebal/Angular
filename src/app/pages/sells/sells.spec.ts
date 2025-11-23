import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sells } from './sells';

describe('Sells', () => {
  let component: Sells;
  let fixture: ComponentFixture<Sells>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sells]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sells);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
