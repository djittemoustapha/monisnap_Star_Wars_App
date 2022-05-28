import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Character } from 'src/app/model';
import { VotesService } from './votes.service';

@Component({
  selector: 'app-vote',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  couples: Character[][] = []
  currentCouple: Character[] = []
  index = 0
  constructor(
    private votesService: VotesService,
    private _snackBar: MatSnackBar,
    private router: Router) {
  }

  ngOnInit() {
    this.initVote()
  }

  handleError(message = 'Opus error !!', action = 'close') {
    this._snackBar.open(message, action);
  }

  hasnext() {
    return this.index < this.couples.length && this.couples[this.index].length === 2
  }
  initVote() {
    this.votesService.getCouples().subscribe(data => {
      Object.assign(this.couples, data);
      this.currentCouple = this.couples[0]
    }, error => {
      this.handleError(error?.message);
    });
  }

  vote(id: number) {
    this.votesService.vote(id).subscribe(() => {
      this.currentCouple = this.couples[0]
      this.index++
      if (this.hasnext()) {
        this.currentCouple = this.couples[this.index]
      }
      else {
        this.handleError('end of voting')
        this.currentCouple = []
      }
    }, error => {
      this.handleError(error?.message);
    });
  }
  showTopTen() {
    this.router.navigate(['votes/tops']);
  }
}
