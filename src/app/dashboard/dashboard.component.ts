import { PopularService } from '../popular.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    movies = [];
    page = 1;

    constructor(public popularService: PopularService) { }

    ngOnInit() {
        this.loadPopularMovies();
    }

    loadPopularMovies() {
        this.popularService.getMovies(this.page++)
            .subscribe((response) => {
                // this.movies = response.results;
                for (const movie of response.results) {
                    this.movies.push(movie);
                }
            }, (error) => {
                //
            });
    }

    onScroll() {
        this.loadPopularMovies();
        // console.log('scrolled!!');
    }
}
