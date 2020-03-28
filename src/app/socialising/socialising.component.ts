import { Component, OnInit } from '@angular/core';
import { GmtnServicesService } from './../services/gmtn-services.service';

@Component({
  selector: 'app-social',
  templateUrl: './socialising.component.html',
  styleUrls: ['./socialising.component.scss']
})
export class SocialisingComponent implements OnInit {
  public socialisingData: any;
  constructor(private gmtnService: GmtnServicesService) { }

  public getSocialisingData() {
    this.gmtnService.getSocialisingData().subscribe(
      (alumni: any) => {
        this.socialisingData = alumni;
        return this.socialisingData;
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );
  }

  ngOnInit(): void {
    this.getSocialisingData();
  }

}
