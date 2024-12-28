/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UtilisateurDto } from '../models/utilisateur-dto';
import { JwtAuthenticationResponse } from '../models/jwt-authentication-response';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root',
})
class AuthControllerService extends __BaseService {
  static readonly getUtilisateurByIdPath = '/auth/{id}';
  static readonly mettreAJourUtilisateurPath = '/auth/{id}';
  static readonly supprimerUtilisateurPath = '/auth/{id}';
  static readonly getTokenPath = '/auth/token';
  static readonly addNewUserPath = '/auth/register';
  static readonly validateTokenPath = '/auth/validate';
  static readonly getAllUtilisateursPath = '/auth/getAllUtilisateurs';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param id undefined
   * @return OK
   */
  getUtilisateurByIdResponse(id: number): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/auth/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  getUtilisateurById(id: number): __Observable<UtilisateurDto> {
    return this.getUtilisateurByIdResponse(id).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * @param params The `AuthControllerService.MettreAJourUtilisateurParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * @return OK
   */
  mettreAJourUtilisateurResponse(params: AuthControllerService.MettreAJourUtilisateurParams): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/auth/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @param params The `AuthControllerService.MettreAJourUtilisateurParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * @return OK
   */
  mettreAJourUtilisateur(params: AuthControllerService.MettreAJourUtilisateurParams): __Observable<UtilisateurDto> {
    return this.mettreAJourUtilisateurResponse(params).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * @param id undefined
   */
  supprimerUtilisateurResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/auth/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  supprimerUtilisateur(id: number): __Observable<null> {
    return this.supprimerUtilisateurResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   * @return OK
   */
  getTokenResponse(body: JwtAuthenticationResponse): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/auth/token`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param body undefined
   * @return OK
   */
  getToken(body: JwtAuthenticationResponse): __Observable<string> {
    return this.getTokenResponse(body).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param body undefined
   * @return OK
   */
  addNewUserResponse(body: User): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/auth/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param body undefined
   * @return OK
   */
  addNewUser(body: User): __Observable<string> {
    return this.addNewUserResponse(body).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param token undefined
   * @return OK
   */
  validateTokenResponse(token: string): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (token != null) __params = __params.set('token', token.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/auth/validate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param token undefined
   * @return OK
   */
  validateToken(token: string): __Observable<string> {
    return this.validateTokenResponse(token).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @return OK
   */
  getAllUtilisateursResponse(): __Observable<__StrictHttpResponse<Array<UtilisateurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/auth/getAllUtilisateurs`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllUtilisateurs(): __Observable<Array<UtilisateurDto>> {
    return this.getAllUtilisateursResponse().pipe(
      __map(_r => _r.body as Array<UtilisateurDto>)
    );
  }
}

module AuthControllerService {

  /**
   * Parameters for mettreAJourUtilisateur
   */
  export interface MettreAJourUtilisateurParams {
    id: number;
    body: UtilisateurDto;
  }
}

export { AuthControllerService }
