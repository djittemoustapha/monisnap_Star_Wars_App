import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Character } from 'src/app/model';
import { VotesService } from './votes.service';

@Component({
  selector: 'app-tops',
  templateUrl: './topten.component.html',
  styleUrls: ['./topten.component.css']
})
export class TopTenComponent implements OnInit {
  topTen: Character[] = []
  constructor( private votesService: VotesService, private _snackBar: MatSnackBar, private router: Router) {
  }

  ngOnInit() {
    this.votesService.getTops().subscribe(data => {
      Object.assign(this.topTen, data);
    }, error => {
      this.handleError(error?.message);
    });
  }

  handleError(message = 'Opus error !!', action = 'close') {
    this._snackBar.open(message, action);
  }
  goToVote(){
    this.router.navigate(['votes']);
  }
}
