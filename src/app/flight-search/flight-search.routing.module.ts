import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightSearchComponent } from './flight-search.component';

const routes: Routes = [
    {
        path: '',
        component: FlightSearchComponent,
        data: {
            title: 'Search Flight'
        },
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FlightSearchRoutingModule { }
