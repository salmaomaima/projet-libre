import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvAnalyseComponent } from './nouv-analyse.component';

describe('NouvAnalyseComponent', () => {
  let component: NouvAnalyseComponent;
  let fixture: ComponentFixture<NouvAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouvAnalyseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
