// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// export interface Analyse {
//   id: number;
//   name: string;
//   description?: string;
//   fkLaboratoire: number;
 
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class AnalyseService {
//   private apiUrl = 'http://localhost:5010/api/analyses'; 

//   constructor(private http: HttpClient) {}

  
//   getAllAnalyses(): Observable<Analyse[]> {
//     return this.http.get<Analyse[]>(this.apiUrl);
//   }
// }
