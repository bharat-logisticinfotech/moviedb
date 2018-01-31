import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/do';  // debug
// import { Subject } from 'rxjs/Subject';

@Injectable()
export class PopularService {

    headers: Headers;
    options: RequestOptions;

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getMovies(page) {
        return this.http.get('http://api.themoviedb.org/3/movie/popular?api_key=6e953a396ec83db976711d118b0f5868&page=' + page, this.options)
            .map((res: Response) => {
                console.log('response recieved', res);
                return res.json();

            }).catch(this.handleError);
        // .do(data => console.log('server data:', data))  // debug
    }

    getMovie(id) {
        return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=6e953a396ec83db976711d118b0f5868&language=en-US', this.options)
            .map((res: Response) => {
                console.log('response recieved', res);
                return res.json();

            }).catch(this.handleError);
        // .do(data => console.log('server data:', data))  // debug
    }

    handleError(error: any) {
        console.log('res', error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
