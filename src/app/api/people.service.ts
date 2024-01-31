import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {People} from '../people/people';
import {environment} from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private apiRoot = environment.apiRoot;

  constructor(private http: HttpClient) {
  }

  getPeople(): Observable<People[]> {
    return this.http.get<People[]>(`${this.apiRoot}/people`).pipe(map((people:any)=>people.results));
  }
}
