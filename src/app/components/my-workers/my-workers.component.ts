import { Component, OnInit } from '@angular/core';
import {Worker,WorkersService} from '../../services/workers-service'
@Component({
  selector: 'app-my-workers',
  templateUrl: './my-workers.component.html',
  styleUrls: ['./my-workers.component.css']
})
export class MyWorkersComponent implements OnInit {
  workers: Worker []=[];
  constructor(private workerService:WorkersService) {
    this.workerService.getWorkers()
    .subscribe((workers1)=>this.workers=workers1);
   }

  ngOnInit(): void {
  }

}
