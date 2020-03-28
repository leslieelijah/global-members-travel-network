import { Component, OnInit } from '@angular/core';
import { GmtnServicesService } from '../services/gmtn-services.service';

@Component({
  selector: 'app-local-knowledge',
  templateUrl: './local-knowledge.component.html',
  styleUrls: ['./local-knowledge.component.scss']
})
export class LocalKnowledgeComponent implements OnInit {
  public localKnowledgeData: any;
  constructor(private gmtnService: GmtnServicesService) { }

  public getLocalKnowledgeData() {
    this.gmtnService.getLocalKnowledgeData().subscribe(
      (alumni: any) => {
        this.localKnowledgeData = alumni;
        return this.localKnowledgeData;
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );
  }

  ngOnInit(): void {
    this.getLocalKnowledgeData();
  }
}
