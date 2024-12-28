import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageDashboardComponent } from './page-dashboard.component';

import { RouterTestingModule } from '@angular/router/testing';  // Add RouterTestingModule if needed
import { MenuComponent } from '../../composant/menu/menu.component';
import { HeaderComponent } from '../../composant/header/header.component';

import { HttpClientModule } from '@angular/common/http';

describe('PageDashboardComponent', () => {
  let component: PageDashboardComponent;
  let fixture: ComponentFixture<PageDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PageDashboardComponent,
       MenuComponent,   // Declare the components used in the template
       HeaderComponent,

      ],
      imports: [RouterTestingModule,HttpClientModule
      ]  // Import RouterTestingModule for router-related features like <router-outlet>
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
