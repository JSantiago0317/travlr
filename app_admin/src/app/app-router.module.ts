import { NgModule } from "@angular/core";
import { RouterModule, Routes} from '@angular/router';
import { TripListingComponent } from "./trip-listing/trip-listing.component";
import { AddTripComponent } from "./add-trip/add-trip.component";
import { EditTripComponent } from "./edit-trip/edit-trip.component";
import { DeleteTripsComponent } from "./delete-trips/delete-trips.component";

const routes: Routes = [
    { path: 'add-trip', component: AddTripComponent },
    { path: 'edit-trip', component: EditTripComponent },
    { path: 'delete-trip', component: DeleteTripsComponent },
    { path: '', component: TripListingComponent, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }