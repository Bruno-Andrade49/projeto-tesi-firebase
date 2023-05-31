import { Component } from '@angular/core';
import { Idea } from '../shared/idea';
import { IdeaService } from '../shared/idea.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Bookings: Idea[] = [];

  constructor(
    private aptService: IdeaService
  ) { }



  ngOnInit() {
    this.fetchBookings();
    let bookingRes = this.aptService.getBookingList();
    bookingRes.snapshotChanges().subscribe((res: any[]) => {
      this.Bookings = [];
      res.forEach(item => {
        let a: any = item.payload.toJSON();
        a['$key'] = item.key;
        this.Bookings.push(a as Idea);
      })
    })
  }

  fetchBookings() {
    this.aptService.getBookingList().valueChanges().subscribe((res: any) => {
      console.log(res)
    })
  }

  deleteBooking(id: string) {
    console.log(id)
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.deleteBooking(id)
    }
  }
}
