import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-delete-trips',
  templateUrl: './delete-trips.component.html',
  styleUrls: ['./delete-trips.component.css']
})
export class DeleteTripsComponent implements OnInit {
  deleted = false;



  constructor(
    private router: Router,
    private tripService: TripDataService
  ) { }

  ngOnInit() {
    let tripCode = localStorage.getItem("tripCode");
    
    if (!tripCode) {
      alert("Something wrong, couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    }

    console.log('DeleteTripComponent#onInit found tripcode' + tripCode);

    this.tripService.getTrip(tripCode)
      .then(data => {
        console.log(data);
      })

      console.log('DeleteTripComponent#onInit calling TripDataService#deleteTrip(\"' + tripCode + '\"');
      this.deleted = true;

      if (this.deleted) {
        this.tripService.deleteTrip(tripCode);
        console.log("This trip was deleted");
      }
  }

  onClick() {
  }

}
