import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLaboComponent } from './detail-labo.component';

describe('DetailLaboComponent', () => {
  let component: DetailLaboComponent;
  let fixture: ComponentFixture<DetailLaboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailLaboComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailLaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
