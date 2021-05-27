import { Vol } from './../model/vols.model';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { VolsService } from '../vols.service';

@Component({
  selector: 'app-delte-modal',
  templateUrl: './delte-modal.component.html',
  styleUrls: ['./delte-modal.component.css']
})
export class DelteModalComponent implements OnInit {
  @Input() vol!: Vol;
  constructor(public activeModal: NgbActiveModal,
    private productService: VolsService,
    private router: Router) { }

  ngOnInit(): void {
  }
  delete(): void {

    this.productService.delete(this.vol.id).subscribe(v => {
      this.activeModal.close();
      this.router.navigateByUrl('/home');
    });

  }
}
