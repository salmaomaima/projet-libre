import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantAcceuilComponent } from './composant-acceuil.component';

describe('ComposantAcceuilComponent', () => {
  let component: ComposantAcceuilComponent;
  let fixture: ComponentFixture<ComposantAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposantAcceuilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
