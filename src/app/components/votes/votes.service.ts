import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class VotesService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        return this.http.get('/api/characters');
    }
    getCouples(): Observable<any> {
        return this.http.get('/api/characters/couples');
    }
    getTops() {
        return this.http.get('/api/characters/tops')
    }
    vote(id: number) {
        return this.http.put(`/api/characters/${id}/vote`, {})
    }
}
