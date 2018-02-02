import { PopularService } from '../popular.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-popular',
    templateUrl: './popular.component.html',
    styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
    movies = [];
    inputStringText = 'Pagination Data:';
    page = 1;
    totalMovieRecords: any;
    perPageMovieRecord: any;

    constructor(public popularService: PopularService) { }

    ngOnInit() {
        this.loadPopularMovies(this.page);
    }

    loadPopularMovies(p) {
        this.popularService.getMovies(p)
        .subscribe((response) => {
            this.movies = response.results;
            this.totalMovieRecords = response.total_results;
            this.perPageMovieRecord = 20;
        }, (error) => {
            //
        });
    }

    // onVoted123(agreed) {
    //     console.log(agreed);
    // }

    pageChanged(pageNumber){
        // alert(pageNumber);
        this.page = pageNumber;
        this.loadPopularMovies(pageNumber);
    }
}

