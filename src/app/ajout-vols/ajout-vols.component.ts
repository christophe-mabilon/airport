import { VolsService } from './../vols.service';
import { Vol } from './../model/vols.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajout-vols',
  templateUrl: './ajout-vols.component.html',
  styleUrls: ['./ajout-vols.component.css']
})
export class AjoutVolsComponent implements OnInit {
  public id!: number;
  form!: FormGroup;
  formSubmitted = false;
  vols!: Observable<Vol[]>;
  erreur!: string;

  constructor(private fb: FormBuilder,
    private volsService: VolsService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      volNumber: ['', Validators.required],
      departureAirportCode: ['', Validators.required],
      arrivalAirportCode: ['', Validators.required],
      departureDate: ['', Validators.required],
      arrivalDate: ['', Validators.required],
      departureTime: ['', Validators.required],
      arrivalTime: ['', Validators.required],
      late: ['true',],
      price: ['', Validators.required],
    });

  }
  submitForm(): void {
    this.formSubmitted = true;
    if (this.form.valid) {

      this.volsService.add(this.form.value).subscribe(v => this.router.navigate(['/home']));
      this.form.reset();
      this.formSubmitted = false;


    }
  }
}
