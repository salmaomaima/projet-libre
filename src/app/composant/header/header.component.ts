import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import {UserService} from '../../services/user/user.service';
// import {UtilisateurDto} from '../../../gs-api/src/models/utilisateur-dto';
// import {AuthenticationService} from '../../../gs-api/src/services/authentication.service';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
    imports: [CommonModule, RouterModule]
})
export class HeaderComponent implements OnInit {

  // connectedUser: UtilisateurDto = {};

  constructor(
    private router: Router,
    // private userService: UserService,
    // private AuthenticationService :AuthenticationService
  ) { }

  ngOnInit(): void {
  //   this.connectedUser = this.userService.getConnectedUser();
   }
  logout(): void {
  this.router.navigate(['/pageacceuil']);
  }

}
