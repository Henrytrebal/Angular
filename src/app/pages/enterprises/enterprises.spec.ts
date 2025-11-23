import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enterprises } from './enterprises';

describe('Enterprises', () => {
  let component: Enterprises;
  let fixture: ComponentFixture<Enterprises>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enterprises]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Enterprises);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
