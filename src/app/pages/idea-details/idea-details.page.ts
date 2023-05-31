import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { IdeaService } from '../../shared/idea.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-idea-details',
  templateUrl: './idea-details.page.html',
  styleUrls: ['./idea-details.page.scss'],
})
export class IdeaDetailsPage implements OnInit {
  updateBookingForm!: FormGroup;
  id!: any;

  constructor(
    private aptService: IdeaService, private actRoute: ActivatedRoute,
    private router: Router, public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getBooking(this.id).valueChanges().subscribe(res => {
      this.updateBookingForm.setValue(res!);
    });
  }


  ngOnInit() {
    this.updateBookingForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: [''],
      endereco: [''],
      salario: [''],
    })
    console.log(this.updateBookingForm.value)
  }


  updateForm() {
    this.aptService.updateBooking(this.updateBookingForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }
}
