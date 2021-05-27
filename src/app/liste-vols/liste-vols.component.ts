
import { Vol } from './../model/vols.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit ,Input} from '@angular/core';
import { VolsService } from '../vols.service';

@Component({
  selector: 'app-liste-vols',
  templateUrl: './liste-vols.component.html',
  styleUrls: ['./liste-vols.component.css']
})
export class ListeVolsComponent implements OnInit {
  vol: Vol[] = [];
  selectedVol: Vol | undefined ;
  filterStr!: string;
  constructor(private volsServ: VolsService) { }

  ngOnInit(): void {
    this.volsServ.findAll().subscribe(r => this.vol = r);
  }
  receiveChildrenEvt(vol: Vol): void {
    this.selectedVol = vol;
  }

  close(): void {
    this.selectedVol = undefined;
  }
  filterList(): Vol[] {
    return this.filterStr
      ? this.vol.filter(s => s.volNumber.toLowerCase().search(this.filterStr.toLowerCase()) !== -1)
      : this.vol;
  }
  setFilter(event: Event): void {
    this.filterStr = (event.target as HTMLInputElement).value;
  }

}
