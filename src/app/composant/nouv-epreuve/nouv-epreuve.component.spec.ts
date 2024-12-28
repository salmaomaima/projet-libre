import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  NouvEpreuveComponent} from './nouv-epreuve.component';

describe(' NouvEpreuveComponent', () => {
  let component:  NouvEpreuveComponent;
  let fixture: ComponentFixture< NouvEpreuveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvEpreuveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent( NouvEpreuveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
