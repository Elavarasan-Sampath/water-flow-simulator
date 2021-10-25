import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-simulate-waterflow',
  templateUrl: './simulate-waterflow.component.html',
  styleUrls: ['./simulate-waterflow.component.scss']
})
export class SimulateWaterflowComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log(this.router.getCurrentNavigation().extras.state);
  }
  options: any;
  ngOnInit(): void {
  }

}
