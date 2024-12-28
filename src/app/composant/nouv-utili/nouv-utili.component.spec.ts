import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvUtiliComponent } from './nouv-utili.component';

describe('NouvUtiliComponent', () => {
  let component: NouvUtiliComponent;
  let fixture: ComponentFixture<NouvUtiliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouvUtiliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvUtiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
