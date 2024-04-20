import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}

  getInfoFromApi(path: string) {
    const url = environment.Api;
    const publicKey = environment.publicKey;
    const hash = environment.hash;

    return this.http.get(`${url}${path}?ts=1&apikey=${publicKey}&hash=${hash}`);
  }
}
