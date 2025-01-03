/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Analyse } from '../models/analyse';
import { LaboratoireDTO } from '../models/laboratoire-dto';
import id from '@angular/common/locales/id';

@Injectable({
  providedIn: 'root',
})
class AnalyseControllerService extends __BaseService {
  static readonly getAnalyseByIdPath = '/api/analyses/{id}';
  static readonly updateAnalysePath = '/api/analyses/{id}';
  static readonly deleteAnalysePath = '/api/analyses/{id}';
  static readonly getAllAnalysesPath = '/api/analyses';
  static readonly createAnalysePath = '/api/analyses';
  static readonly getLaboratoireByIdPath = '/api/analyses/laboratoires/{id}';

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
  getAnalyseByIdResponse(id: number): __Observable<__StrictHttpResponse<Analyse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/analyses/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Analyse>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  getAnalyseById(id: number): __Observable<Analyse> {
    return this.getAnalyseByIdResponse(id).pipe(
      __map(_r => _r.body as Analyse)
    );
  }

  /**
   * @param body undefined
   * @return OK
   */
  updateAnalyseResponse(id: number, body: Analyse): __Observable<__StrictHttpResponse<Analyse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/analyses/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });
  
    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Analyse>;
      })
    );
  }
  
  /**
   * @param id L'identifiant de l'analyse à mettre à jour
   * @param body Les données de l'analyse à mettre à jour
   * @return L'analyse mise à jour
   */
  updateAnalyse(id: number, body: Analyse): __Observable<Analyse> {
    return this.updateAnalyseResponse(id, body).pipe(
      __map(_r => _r.body as Analyse)
    );
  }
  

  /**
   * @param id undefined
   */
  deleteAnalyseResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/analyses/${encodeURIComponent(String(id))}`,
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
  deleteAnalyse(id: number): __Observable<null> {
    return this.deleteAnalyseResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return OK
   */
  getAllAnalysesResponse(): __Observable<__StrictHttpResponse<Array<Analyse>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/analyses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Analyse>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllAnalyses(): __Observable<Array<Analyse>> {
    return this.getAllAnalysesResponse().pipe(
      __map(_r => _r.body as Array<Analyse>)
    );
  }

  /**
   * @param body undefined
   * @return OK
   */
  createAnalyseResponse(body: Analyse): __Observable<__StrictHttpResponse<Analyse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/analyses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Analyse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return OK
   */
  createAnalyse(body: Analyse): __Observable<Analyse> {
    return this.createAnalyseResponse(body).pipe(
      __map(_r => _r.body as Analyse)
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  getLaboratoireByIdResponse(id: number): __Observable<__StrictHttpResponse<LaboratoireDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/analyses/laboratoires/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LaboratoireDTO>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  getLaboratoireById(id: number): __Observable<LaboratoireDTO> {
    return this.getLaboratoireByIdResponse(id).pipe(
      __map(_r => _r.body as LaboratoireDTO)
    );
  }
}

module AnalyseControllerService {
}

export { AnalyseControllerService }
