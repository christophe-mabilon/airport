import { Vol } from './../model/vols.model';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { VolsService } from '../vols.service';
@Component({
  selector: 'app-vols',
  templateUrl: './vols.component.html',
  styleUrls: ['./vols.component.css']
})
export class VolsComponent implements OnInit {

  @Input() vol!: Vol;
  @Output() evt = new EventEmitter<Vol>();

  // @HostListener('click')
  volClick(): void {
    this.evt.emit(this.vol);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
