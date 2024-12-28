import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUtiliComponent } from './detail-utili.component';

describe('DetailUtiliComponent', () => {
  let component: DetailUtiliComponent;
  let fixture: ComponentFixture<DetailUtiliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailUtiliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailUtiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
