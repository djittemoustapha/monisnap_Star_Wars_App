import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [
    {
        path: '',
        redirectTo: 'votes',
        pathMatch: 'full'
    },
    {
        path: 'votes',
        loadChildren: () => import('./components/votes/votes.module').then(mod => mod.VotesModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})

export class AppRouting { }
