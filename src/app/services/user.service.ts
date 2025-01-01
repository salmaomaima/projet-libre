// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UtilisateurDto } from '../../gs-api/src/models/utilisateur-dto';
import { AuthControllerService } from '../../gs-api/src/services';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:9898/auth/getAllUtilisateurs';

 private baseurl = "http://localhost:9898/auth"
  constructor(
    private http: HttpClient,
    private userService :AuthControllerService

  ) { }

  findAllusers(token: string): Observable<UtilisateurDto[]> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<UtilisateurDto[]>(this. baseUrl, { headers });
  }


 supprimerUtilisateur(id: number): Observable<any> {
  if (id === 0) {
    return throwError(() => new Error('ID invalide'));
  }

  return this.http.delete(`${this.baseurl}/${id}`);
}

// Method to add a new user
// addNewUser(user: UtilisateurDto): Observable<string> {
//   const headers = new HttpHeaders().set('Content-Type', 'application/json');
//   return this.http.post<string>(`${this.baseurl}/register`, user, { headers });
// }
// addNewUser(user: UtilisateurDto): Observable<any> {
//   const headers = new HttpHeaders().set('Content-Type', 'application/json');
//   return this.http.post<any>(`${this.baseurl}/register`, user, { headers });
// }
addNewUser(user: UtilisateurDto): Observable<any> {
  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  return this.http.post(`${this.baseurl}/register`, user, {
    headers,
    responseType: 'text', // Spécifiez 'text' si le backend retourne une chaîne ou une réponse vide
  });
}


}
