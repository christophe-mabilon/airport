import { VolsService } from './../vols.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Vol } from '../model/vols.model';
import { DelteModalComponent } from '../delte-modal/delte-modal.component';

@Component({
  selector: 'app-details-vols',
  templateUrl: './details-vols.component.html',
  styleUrls: ['./details-vols.component.css']
})
export class DetailsVolsComponent implements OnInit {
  vol!: Vol;
  constructor(private route: ActivatedRoute,
    private VolsService: VolsService,
    private router: Router,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || -1;
    this.VolsService.findOne(+id)
      .subscribe(v => this.vol = v);
  }
  dispalayModal(): void {
    const modalRef = this.modalService.open(DelteModalComponent);
    modalRef.componentInstance.vol = this.vol;
  }
}
