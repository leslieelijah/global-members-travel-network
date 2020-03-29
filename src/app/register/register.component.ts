import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GmtnServicesService } from '../services/gmtn-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private gmtnSvc: GmtnServicesService) { }

  public networkForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    interest: [''],
    city: [''],
    address: [''],
    address1: [''],
    zipCode: [''],
    phone: [''],
    email: [''],
    typeOfCommunication: ['']
  });

  public onRegister() {
    console.warn(this.networkForm.value);
  }
  ngOnInit(): void {

  }

}
