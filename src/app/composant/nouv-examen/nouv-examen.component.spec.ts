import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvExamenComponent } from './nouv-examen.component';

describe('NouvExamenComponent', () => {
  let component: NouvExamenComponent;
  let fixture: ComponentFixture<NouvExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouvExamenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
