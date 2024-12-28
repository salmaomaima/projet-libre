import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAnalyseComponent } from './page-analyse.component';

describe('PageAnalyseComponent', () => {
  let component: PageAnalyseComponent;
  let fixture: ComponentFixture<PageAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageAnalyseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
