import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MembersTravelNetworkDb } from '../business/models/gmtn-model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};
@Injectable()
export class GmtnServicesService {

  public urlSocialising = 'http://localhost:4000/socialising';
  public urlBusiness = 'http://localhost:4000/business';
  public urlLocalKnowledge = 'http://localhost:4000/local-knowledge';

  constructor(
    private http: HttpClient
  ) { }

  public getSocialisingData(): Observable<any> {
    return this.http.get(this.urlSocialising, httpOptions);
  }

  public getBusinessData(): Observable<any> {
    return this.http.get(this.urlBusiness, httpOptions);
  }

  public getLocalKnowledgeData(): Observable<any> {
    return this.http.get(this.urlLocalKnowledge, httpOptions);
  }

  public postSocialisingData(alumni: MembersTravelNetworkDb): Observable<MembersTravelNetworkDb[]> {
    return this.http.post<MembersTravelNetworkDb[]>(this.urlSocialising, alumni, httpOptions);
  }

  public postBusinessData(alumni: MembersTravelNetworkDb): Observable<MembersTravelNetworkDb[]> {
    return this.http.post<MembersTravelNetworkDb[]>(this.urlBusiness, alumni, httpOptions);
  }

  public postLocalKnowledgeData(alumni: MembersTravelNetworkDb): Observable<MembersTravelNetworkDb[]> {
    return this.http.post<MembersTravelNetworkDb[]>(this.urlLocalKnowledge, alumni, httpOptions);
  }
}
