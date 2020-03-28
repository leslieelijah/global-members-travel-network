import { Component, OnInit } from '@angular/core';
import { GmtnServicesService } from '../services/gmtn-services.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  public businessData: any;
  constructor(private gmtnService: GmtnServicesService) { }

  public getBusinessData() {
    this.gmtnService.getBusinessData().subscribe(
      (alumni: any) => {
        this.businessData = alumni;
        return this.businessData;
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );
  }

  ngOnInit(): void {
    this.getBusinessData();
  }

}
