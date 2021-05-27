import { Vol } from './model/vols.model';
import { Injectable } from '@angular/core';
import { environment as env } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class VolsService {
  vol!: Vol[];
  selectedProduct!: Vol;
  filterStr!: string;
  private apiUrl = env.apiUrl + 'vols';

  constructor(private http: HttpClient) { }
  add(product: Vol): Observable<Vol> {
    return this.http.post<Vol>(this.apiUrl, product);
  }

  delete(VolId: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + VolId);
  }

  update(Vol: Vol): Observable<Vol> {
    return this.http.put<Vol>(this.apiUrl + '/' + Vol.id, Vol);
  }

  findAll(): Observable<Vol[]> {
    return this.http.get<Vol[]>(this.apiUrl);
  }

  findOne(id: number): Observable<Vol> {
    return this.http.get<Vol>(this.apiUrl + '/' + id);
  }

}
