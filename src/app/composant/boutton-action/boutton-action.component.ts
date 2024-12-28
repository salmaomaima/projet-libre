import { CommonModule } from '@angular/common';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-boutton-action',
  templateUrl: './boutton-action.component.html',
  styleUrls: ['./boutton-action.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class BouttonActionComponent implements OnInit {

  @Input()
  isNouveauVisible = true;
  @Input()
  isExporterVisible = true;
  @Input()
  isImporterVisible = true;

  @Output()
  clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  bouttonNouveauClick(): void {
    this.clickEvent.emit();
  }
  bouttonimportClick(): void {
    this.clickEvent.emit('importer');}

  // importData(): void {
  //   // Call a service method to handle data import
  //   this.data.importData().subscribe(
  //     (result) => {
  //       console.log('Data imported successfully', result);
  //       // Optionally, reload or refresh data after import
  //     },
  //     (error) => {
  //       console.error('Failed to import data', error);
  //     }
  //   );
  // }
}
