import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { IdeaService } from '../../shared/idea.service';

@Component({
  selector: 'app-idea-create',
  templateUrl: './idea-create.page.html',
  styleUrls: ['./idea-create.page.scss'],
})
export class IdeaCreatePage implements OnInit {
  bookingForm!: FormGroup;


  constructor(
    private aptService: IdeaService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: [''],
      endereco: [''],
      salario: [''],
    })
  }

  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      this.aptService.createBooking(this.bookingForm.value).then((res: any) => {
        console.log(res)
        this.bookingForm.reset();
        this.router.navigate(['/home']);
      })
        .catch((error: any) => console.log(error));
      return false;
    }
  }
}
