import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotesRoutingModule } from './votes-routing.module';
import { VotesComponent } from './votes.component';
import { TopTenComponent } from './topten.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [VotesComponent, TopTenComponent],
  imports: [
    CommonModule,
    VotesRoutingModule,
    SharedModule
  ],
  entryComponents: []
})
export class VotesModule { }
