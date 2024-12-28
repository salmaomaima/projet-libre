import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboManagementComponent } from './labo-management.component';

describe('LaboManagementComponent', () => {
  let component: LaboManagementComponent;
  let fixture: ComponentFixture<LaboManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaboManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
