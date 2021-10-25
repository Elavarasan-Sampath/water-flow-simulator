import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-config-grid-creation',
  templateUrl: './config-grid-creation.component.html',
  styleUrls: ['./config-grid-creation.component.scss']
})
export class ConfigGridCreationComponent implements OnInit {
  configForm: FormGroup;

  constructor(private router: Router) { 
    this.configForm = new FormGroup({
      rows: new FormControl(5),
      columns: new FormControl(5),
      obstructions: new FormControl(3)
    });
   }

  ngOnInit(): void {
    
  }

  goToSimulator = () => {
    this.router.navigate(['/simulation']);
  }
}
